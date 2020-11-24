export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    URL () {
      return `mysql://${this.user}:${this.pass}@${this.host}:${this.port}`
    }
  },
}
