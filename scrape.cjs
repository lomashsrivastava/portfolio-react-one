const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('../Assets/index.html', 'utf8');
const $ = cheerio.load(html);

const data = {
  name: 'Lomash Srivastava',
  role: 'AI-Powered Full-Stack Developer',
  about: '',
  skills: { frontend: [], backend: [], database: [], tools: [] },
  projects: [],
  experience: [],
  education: [],
  certifications: [
    { title: "Example Certification 1", issuer: "Institution", link: "#" }
  ],
  socials: { github: '', linkedin: '', email: '' },
  accessKey: ''
};

// Access key
const keyInput = $('input[name="access_key"]');
if(keyInput.length) data.accessKey = keyInput.val() || '3dd0cc07-31d0-42b6-bec8-c00a172a2183';

// Socials
$('a').each((i, el) => {
    const h = $(el).attr('href') || '';
    if (h.includes('github.com')) data.socials.github = h;
    if (h.includes('linkedin.com')) data.socials.linkedin = h;
    if (h.includes('mailto:')) data.socials.email = h.replace('mailto:', '');
});

// Generic card scraper for Projects
$('.project-card-advanced, .project-card, .project, .advanced-project').each((i, el) => {
    let title = $(el).find('h3, h2, h4, .title').first().text().trim();
    let desc = $(el).find('p, .desc').first().text().trim();
    let tech = [];
    $(el).find('.tech-tag, .tag, span').each((i, s) => {
       let pt = $(s).text().trim();
       if(pt && pt.length < 20) tech.push(pt);
    });
    let links = $(el).find('a').map((i, a) => $(a).attr('href')).get();
    let github = links.find(l => l.includes('github')) || '#';
    let demo = links.find(l => !l.includes('github') && l !== '#') || '#';
    if(title) {
       data.projects.push({ title, description: desc, tech: tech.slice(0, 5), github, demo });
    }
});

// Since the old HTML is complex, let's grab all text from #projects to see what it is
const pText = $('#projects').text().replace(/\s+/g, ' ');
// Same for skills
const sText = $('#skills').text().replace(/\s+/g, ' ');

// If scraping failed, let's output the raw text for my eyes or do our best
require('fs').writeFileSync('scraped_raw.json', JSON.stringify({ pText, sText, data }, null, 2));
