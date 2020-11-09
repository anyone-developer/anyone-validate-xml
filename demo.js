const rrdir = require("rrdir");
const fs = require('fs');
const path = require('path');

async function fun()
{
    let entries = await rrdir.async("./sample_folder");
    entries = entries.filter(i=>path.extname(i.path).toLowerCase() === ".xml");
    fs.readFile()
    console.log(entries);
}

fun();
