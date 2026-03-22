const { neon } = require("@neondatabase/serverless");

function getSqlClient() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL não configurada");
  }

  return neon(databaseUrl);
}

async function checkDatabaseConnection() {
  const sql = getSqlClient();
  const result = await sql`SELECT NOW() AS server_time`;
  return result[0];
}

module.exports = {
  getSqlClient,
  checkDatabaseConnection,
};
