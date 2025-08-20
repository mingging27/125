const puppeteer = require("puppeteer");
const { InfoPost } = require("../../models");

// 1. DB 저장 함수 정의
async function saveToDB(articleList) {
  for (const article of articleList) {
    try {
      const exists = await InfoPost.findOne({ where: { title: article.title } }); // 중복 검사
      if (exists) {
        console.log(`이미 존재하여 중복 저장 X: ${article.title}`);
        continue;
      }

      await InfoPost.create({
        title: article.title,
        source_url: article.url,
        summary: "중장년 대상 교육", // 요약 고정
        thumbnail: article.thumbnail,
        content: "크롤링된 상세 설명 없음", // 상세 페이지 크롤링 안하므로 placeholder
        category: "info_edu",
        published_at: new Date()
      });

      console.log(`✅ 저장 완료: ${article.title}`);
    } catch (err) {
      console.error(`❌ 저장 실패: ${article.title}`, err.message);
    }
  }
}

// 2. 크롤링 함수 정의
async function crawlEduCourses() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const siteUrl = "https://www.elifeplan.or.kr/course/course_list.jsp";

  await page.goto(siteUrl, { waitUntil: "networkidle2" });
  await page.waitForSelector("ul.course_gallery > li");

  const results = await page.evaluate(() => {
    const data = [];

    document.querySelectorAll("ul.course_gallery > li").forEach((li) => {
      const title = li.querySelector(".ctitle")?.innerText.trim();

      // 상세 페이지 URL 처리 (상대경로 → 절대경로)
      const href = li.querySelector("a")?.getAttribute("href") || "";
      const url = new URL(href, "https://www.elifeplan.or.kr").href;

      // 썸네일 이미지 처리
      const style = li.querySelector(".cimg")?.getAttribute("style") || "";
      const match = style.match(/url\((['"]?)(.*?)\1\)/);
      const thumbnail = match ? new URL(match[2], "https://www.elifeplan.or.kr").href : null;

      if (title && url && thumbnail) {
        data.push({ title, url, thumbnail });
      }
    });

    return data;
  });

  console.log("크롤링 결과:", results.length);
  console.dir(results, { depth: null });

  await saveToDB(results);

  await browser.close();
}

// 3. 외부에서 호출할 수 있게 export
module.exports = { crawlEduCourses };
