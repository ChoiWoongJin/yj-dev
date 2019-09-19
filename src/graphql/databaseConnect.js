import mysql from "mysql2/promise";
import { dbConfig } from "../config/database.config";

// connection pool 생성
// https://github.com/sidorares/node-mysql2 참조
const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const getDbPeople = async () => {
    const [rows] = await pool.query("select * from testtable");
    return rows;
};