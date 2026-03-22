const { checkDatabaseConnection } = require("../db/neon");

exports.getDbHealth = async (req, res) => {
  try {
    const response = await checkDatabaseConnection();
    res.json({ ok: true, dbTime: response.server_time });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Falha ao conectar no Neon",
      details: error.message,
    });
  }
};
