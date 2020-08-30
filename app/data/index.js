const fs = require('fs'),
w = require('./works_orig');

let arr = [];

for (let i = 0; i < w.length; i++) {
  arr.push({
    name: w[i].name,
    html_url: w[i].html_url,
    description: w[i].description,
    created_at: w[i].created_at,
    updated_at: w[i].updated_at,
    git_url: w[i].git_url,
    size: w[i].size,
    language: w[i].language
  })
}



fs.writeFileSync('./works.json', JSON.stringify(arr))
