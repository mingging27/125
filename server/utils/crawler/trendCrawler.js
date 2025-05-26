const puppeteer = require("puppeteer");
const { InfoPost } = require('../../models/index.js');

// 1. DB 저장 함수 정의
async function saveToDB(articleList) {
  for (const article of articleList) {
    try {
      if (exists) {
        console.log(`이미 존재하여 중복 저장 X: ${article.title}`);
        continue;
      }

      await InfoPost.create({
        source_url: article.url,
        title: article.title,
        summary: article.summary,
        thumbnail: article.thumbnail,
        content: article.body,
        category: 'info_trend',
        published_at: new Date(article.date),
      });
    } catch (err) {
      console.error(`저장 실패: ${article.title}`, err.message);
    }
    console.log(`✅ 저장 완료: ${article.title}`);
  }
}

// 2. 뉴스 크롤링
async function crawlNews(keyword, maxPages = 1) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const encoded = encodeURIComponent(keyword);
  const results = [];

  for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
    const url = `https://www.yna.co.kr/search/index?query=${encoded}&ctype=A&page=${pageNum}`;
    await page.goto(url, { waitUntil: "networkidle2" });

    try {
      await page.waitForSelector("div.item-box01", { timeout: 5000 });
    } catch (e) {
      console.warn(`페이지 ${pageNum} 기사 없음 또는 로딩 실패`);
      continue;
    }

    const articles = await page.evaluate(() => {
      const data = [];
      const elements = document.querySelectorAll("div.item-box01");

      elements.forEach((el) => {
        const aTag = el.querySelector("a");
        const title = aTag?.querySelector(".tit-wrap")?.innerText.trim();
        const url = aTag?.href;
        const summary = aTag?.querySelector(".news-con")?.innerText.trim();
        const thumbnail = aTag?.querySelector("img")?.src || null;
        const dateMatch = summary?.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/);
        const date = dateMatch ? dateMatch[0] : "날짜 없음";
        if (title && url) {
          data.push({ title, url, summary, thumbnail, date });
        }
      });
      return data;
    });

    // 각 기사 본문 크롤링
    for (const article of articles) {
      try {
        const detailPage = await browser.newPage();
        await detailPage.goto(article.url, { waitUntil: "domcontentloaded" });

        const content = await detailPage.evaluate(() => {
          const articleEl = document.querySelector("#articleWrap > div.story-news.article");
          let body = "본문 없음";

          if (articleEl) {
            const paragraphs = Array.from(articleEl.querySelectorAll("p"));
            body = paragraphs.map(p => p.innerText.trim()).filter(Boolean).join("\n\n");
          }

          return { body };
        });

        article.body = content.body;
        await detailPage.close();
      } catch (err) {
        console.warn(`상세 페이지 크롤링 실패: ${article.url}`);
        article.body = "크롤링 실패";
      }
    }

    results.push(...articles);
  }

  console.log("최종 크롤링 결과:");
  console.dir(results, { depth: null });
  await saveToDB(results);

  await browser.close();
}

// 3. 실행
crawlNews("중장년 취업 지원", 1);