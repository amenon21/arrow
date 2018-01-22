import { readFileSync } from 'fs';
import { Table } from 'apache-arrow';

console.log("hello");

const arrow = readFileSync('simple.arrow');
const table = Table.from([arrow]);

console.log(table.toString());