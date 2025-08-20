const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Authorization 헤더가 없거나 형식이 잘못된 경우
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "인증 토큰이 없습니다." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // JWT 검증
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");
    // 이후 라우터에서 사용자 정보 사용 가능
    req.user = decoded;
    // 인증 성공하면 다음 미들웨어 또는 라우터 실행
    next();
  } catch (err) {
    console.error("[authMiddleware] 유효하지 않은 토큰:", err.message);
    return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
  }
};

module.exports = authMiddleware;
