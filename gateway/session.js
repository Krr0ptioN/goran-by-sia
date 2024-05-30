import jwt from "jsonwebtoken";

function verifyToken(authoriztion) {
  const token = authoriztion.split(" ", 2)[1];
  return new Promise((resolve, reject) =>
    jwt.verify(token, "salt-and-peper!!", (err, decoded) => {
      if (err) {
        return reject();
      }
      resolve(decoded.id);
    }),
  );
}

export default function securityMiddleware(req, res, next) {
  if (req.path == "/api/auth/me") {
    // TODO: replace with session
    res.send({
      username: "Sia",
      name: "Siyamend",
      profileImage:
        "/media/profiles/40e7f1b67fc1b42dc17c2651bd3ea9a0aac191637dadbc1e983a315e5427744f.jpeg",
    });
  } else if (
    req.path !== "/api/auth/login" &&
    req.path !== "/api/auth/register"
  ) {
    if (req.path.startsWith("/api")) {
      if (req.headers?.authoriztion) {
        verifyToken(req.headers.authoriztion)
          .then((id) => (req.userId = id))
          .catch(() => res.status(401).send({ message: "Forbidden." }));
      } else if (req.path.startsWith("/media")) {
        // TODO: add token verification for images
      } else {
        res.status(401).send({ error: "Unauthenticated" });
      }
    }
  }
  next();
}
