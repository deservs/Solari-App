const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env.local" });

const mediaRouter = require("./routes/media");
const dbRouter = require("./routes/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/media", mediaRouter);
app.use("/db", dbRouter);

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "solari-server" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Proxy rodando em http://localhost:${PORT}`),
);
