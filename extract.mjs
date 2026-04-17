import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlList = fs.readFileSync('../Assets/index.html', 'utf8');
const $ = cheerio.load(htmlList);

const data = {
  name: 'Lomash Srivastava', // Hardcoded from title
  role: 'AI-Powered Full-Stack Developer',
  about: '',
  skills: {
    frontend: [],
    backend: [],
    database: [],
    tools: []
  },
  projects: [],
  experience: [],
  education: [],
  socials: {
    github: '',
    linkedin: '',
    email: ''
  }
};

// Extremely naive extraction just to get *something* without placeholders.
$('section').each((i, el) => {
    const id = $(el).attr('id');
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (id === 'about') data.about = text.substring(0, 500); // grab chunk
    // We try to find specific stuff
});

// Since exact extraction logic without seeing html is hard, I will output a generic structured format.
// Wait, I can print the text of h1, h2, h3 and paragraph text for inspection!
console.log("Analyzing sections...");
const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
sections.forEach(s => {
    let t = $(`#${s}`).text() || '';
    if (t) console.log(`Found section ${s}:`, t.substring(0, 100));
});

// Let's grab elements
$('.project-card').each((i, el) => {
    data.projects.push({
        title: $(el).find('h3').text().trim(),
        description: $(el).find('p').first().text().trim(),
        tech: $(el).find('.tech-stack span, .tech-tag').map((_, s) => $(s).text()).get(),
        github: $(el).find('a[href*="github"]').attr('href') || '#',
        demo: $(el).find('a').not('[href*="github"]').attr('href') || '#'
    });
});

$('a[href*="github.com"]').each((i, el) => { if(!data.socials.github) data.socials.github = $(el).attr('href'); });
$('a[href*="linkedin.com"]').each((i, el) => { if(!data.socials.linkedin) data.socials.linkedin = $(el).attr('href'); });
$('a[href^="mailto:"]').each((i, el) => { if(!data.socials.email) data.socials.email = $(el).attr('href').replace('mailto:', ''); });

fs.writeFileSync('src/data/portfolioData.js', `export const portfolioData = ${JSON.stringify(data, null, 2)};`);
console.log("Data written to src/data/portfolioData.js");
