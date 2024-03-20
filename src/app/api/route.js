import { NextRequest, NextResponse } from "next/server";
import {Pool} from "pg";

export const pool= new Pool({
    user: "	euziiffh",
    host: "	rosie.db.elephantsql.com",
    database: "	euziiffh",
    password: "YAydpgqgMg_kUgCGE7fhAoqWcOb4yUNV",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

export async function GET(){
    try{
        const data= await pool.query("SELECT * FROM db_ifms_campus");
        return NextResponse.json(data.rows);
    } catch (error){
        return NextResponse.error("Erro interno no servidor", {status:500})
    }
}