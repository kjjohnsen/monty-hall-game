const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const regex = /<a class="card" href="([^>]+)">\s*<span class="card-icon">[^<]+<\/span>\s*<span class="card-title">([^<]+)<\/span>\s*<span class="card-desc">([^<]+)<\/span>/g;
let match;
const pages = [];

while ((match = regex.exec(indexHtml)) !== null) {
  pages.push({
    file: match[1],
    title: match[2],
    desc: match[3]
  });
}

console.log('Found ' + pages.length + ' pages');

pages.forEach(p => {
  if (fs.existsSync(p.file)) {
    let content = fs.readFileSync(p.file, 'utf8');
    // Replace the subtitle
    content = content.replace(/<p class="subtitle">[\s\S]*?<\/p>/, '<p class="subtitle">' + p.desc + '</p>');
    fs.writeFileSync(p.file, content);
    console.log('Updated ' + p.file);
  } else {
    console.log('File not found: ' + p.file);
  }
});
