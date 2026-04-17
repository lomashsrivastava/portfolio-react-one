const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('../Assets/index.html', 'utf8'));

console.log('--- PROJECTS ---');
$('#projects').find('.project-card, .card').each((i, el) => {
    console.log('TITLE:', $(el).find('h1, h2, h3, h4, h5, .title').text().trim() || 'Missing Title');
    console.log('LINKS:', $(el).find('a').map((i, a) => $(a).attr('href')).get().join(', '));
});
if($('#projects').text().length < 50) {
    console.log('[WARN] No projects found inside #projects, searching globally for "project" classes.');
    $('.project').each((i, el) => console.log('Proj Global:', $(el).text().substring(0, 50)));
}

console.log('--- SKILLS ---');
console.log($('#skills').text().replace(/\s+/g, ' ').trim().substring(0, 300));
