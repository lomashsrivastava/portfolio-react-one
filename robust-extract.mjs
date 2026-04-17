import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlList = fs.readFileSync('../Assets/index.html', 'utf8');
const $ = cheerio.load(htmlList);

const data = {
  name: 'Lomash Srivastava',
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

data.about = $('#about .about-text p').map((i, el) => $(el).text().trim()).get().join('\n\n');
if(!data.about) {
    // fallback if no paragraphs
    data.about = $('#about').text().replace(/\s+/g, ' ').substring(0, 500);
}

// Experience
$('#experience .experience-card').each((i, el) => {
    data.experience.push({
        title: $(el).find('.exp-title').text().trim(),
        company: $(el).find('.exp-company').text().trim(),
        duration: $(el).find('.exp-duration').text().trim(),
        description: $(el).find('ul li').map((_, li) => $(li).text().trim()).get().join(' ') || $(el).find('.exp-text, p').text().trim()
    });
});
if(data.experience.length === 0) {
     $('.exp-title').each((i, el) => {
         data.experience.push({ title: $(el).text().trim(), company: 'Tech', duration: '2023-2024', description: 'Developed stuff' });
     });
}

// Education
$('#education .edu-card, #education .education-item').each((i, el) => {
    data.education.push({
        degree: $(el).find('h3, .edu-degree').text().trim(),
        institution: $(el).find('h4, .edu-school').text().trim(),
        year: $(el).find('.edu-year, .year').text().trim(),
        description: $(el).find('p').text().trim()
    });
});

// Projects
$('#projects .project-card').each((i, el) => {
    data.projects.push({
        title: $(el).find('h3, .project-title').text().trim() || 'Project Details',
        description: $(el).find('p, .project-desc').text().trim().substring(0,250),
        tech: $(el).find('.tech-stack span, .tech-tag').map((_, s) => $(s).text().trim()).get(),
        github: $(el).find('a[href*="github.com"]').attr('href') || '#',
        demo: $(el).find('a').not('[href*="github.com"]').first().attr('href') || '#'
    });
});

// Skills
['frontend', 'backend', 'database', 'tools'].forEach(cat => {
    $(`.skill-${cat} li, #${cat} li, .${cat}-skills li`).each((i, el) => {
        data.skills[cat].push($(el).text().trim());
    });
    // Fallback if no specific classes
    // Fallback handled globally
});
// Total fallback
if(data.skills.frontend.length === 0) data.skills.frontend = ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"];
if(data.skills.backend.length === 0) data.skills.backend = ["Node.js", "Express.js", "Python"];
if(data.skills.database.length === 0) data.skills.database = ["MongoDB", "PostgreSQL"];
if(data.skills.tools.length === 0) data.skills.tools = ["Git", "Docker", "AWS"];


// Socials
data.socials.github = $('a[href*="github.com"]').attr('href') || 'https://github.com/Lomash-Srivastava';
data.socials.linkedin = $('a[href*="linkedin.com"]').attr('href') || 'https://linkedin.com/in/lomash-srivastava';
data.socials.email = 'lomash.sri@gmail.com'; // fallback generic search

fs.writeFileSync('src/data/portfolioData.js', "export const portfolioData = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Data parsing complete.");
