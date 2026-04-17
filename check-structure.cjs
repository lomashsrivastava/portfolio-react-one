const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('../Assets/index.html', 'utf8'));

console.log('--- SECTIONS ---');
$('section').each((i, el) => console.log($(el).attr('id') || $(el).attr('class')));

console.log('\n--- H2 ---');
$('h2').each((i, el) => console.log($(el).text()));

console.log('\n--- FORMS ---');
$('form').each((i, el) => console.log($(el).attr('action')));

console.log('\n--- LINKS ---');
$('a').each((i, el) => {
  const href = $(el).attr('href');
  if(href && (href.includes('mailto') || href.includes('github') || href.includes('linkedin'))) {
    console.log(href);
  }
});
