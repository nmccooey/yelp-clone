import pg from "pg";

const pool = new pg.Pool();

export default {
  query: (text, params) => pool.query(text, params),
};
