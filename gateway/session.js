export default function securityMiddleware(req, res, next) {
  if (req.path == "/api/auth/me") {
    // TODO: replace with session
    res.send({
      username: "Sia",
      name: "Siyamend",
      profileImage:
        "/media/profiles/40e7f1b67fc1b42dc17c2651bd3ea9a0aac191637dadbc1e983a315e5427744f.jpeg",
    });
  } else {
    if (req.path.startsWith("/api") || req.path.startsWith("/media")) {
      // TODO: verify if token is valid jwt or not
      console.log(`Not protected! ${req.path}`);
    }
    next();
  }
}
