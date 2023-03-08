const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.post("/cookie", (req, res) => {
  res
    .cookie("token", "1234567890", {
      expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      //   httpOnly: true,
      sameSite: "none",
      secure: true,
      domain: ".magenta-dolphin-7f08eb.netlify.app",
    })
    .json({ message: "cookie ?" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("server started borrrrr");
});
