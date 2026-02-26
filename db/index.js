// db/index.js

const { PrismaClient } = require('../generated/prisma');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

console.log("Connecting to:", process.env.DATABASE_URL.split('@')[1]); // Logs the host only for safety

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
});

module.exports = prisma;
