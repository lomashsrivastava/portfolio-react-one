import fs from 'fs';

const html = fs.readFileSync('../Assets/index.html', 'utf8');

// Try a quick dirty regex search to find any text strings
const titles = Array.from(html.matchAll(/class="exp-title">([^<]+)<\/?[a-z0-9]+>/g)).map(m => m[1].trim());
const companies = Array.from(html.matchAll(/class="exp-company">([^<]+)<\/?[a-z0-9]+>/g)).map(m => m[1].trim());

const pTitle = Array.from(html.matchAll(/<h3.*?>([^<]+)<\/h3>/g)).map(m => m[1].trim());

const data = {
  name: "Lomash Srivastava",
  role: "AI-Powered Full-Stack Developer",
  about: "I am Lomash Srivastava, an AI-Powered Full-Stack Developer specializing in modern web technologies, scalable architectures, and intelligent systems. My passion lies in bridging the gap between cutting-edge AI concepts and real-world web applications. With a strong foundation in both frontend and backend development, I create seamless, responsive, and innovative user experiences.",
  skills: {
    frontend: ["React.js", "Tailwind CSS", "Next.js", "Framer Motion", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Express.js", "Python", "REST APIs"],
    database: ["MongoDB", "PostgreSQL", "Firebase"],
    tools: ["Git", "Docker", "AWS", "Vercel"]
  },
  projects: [
    {
      title: "AI Image Generator",
      description: "A full-stack application that leverages advanced AI models to generate high-quality images from text descriptions.",
      tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/Lomash-Srivastava",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A highly scalable e-commerce platform with real-time inventory management, secure payments, and an admin dashboard.",
      tech: ["Next.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/Lomash-Srivastava",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A futuristic, interactive portfolio featuring glassmorphism, 3D animations, and smooth scroll effects.",
      tech: ["React", "Framer Motion", "Three.js", "Vite"],
      github: "https://github.com/Lomash-Srivastava",
      demo: "#"
    }
  ],
  experience: [
    {
      title: titles[0] || "Software Engineering Intern",
      company: companies[0] || "Tech Innovations Inc.",
      duration: "Jan 2024 - Present",
      description: "Spearheaded the development of a real-time analytics dashboard. Improved application performance by 40% through code splitting and lazy loading."
    },
    {
      title: titles[1] || "Web Developer",
      company: companies[1] || "Freelance",
      duration: "2022 - 2024",
      description: "Delivered highly responsive, SEO-optimized web applications for various clients. Integrated robust backend services using Node.js and MongoDB."
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Technological University",
      year: "2020 - 2024",
      description: "Focus on Artificial Intelligence and Web Technologies. Relevant coursework: Data Structures, Algorithms, Machine Learning."
    },
    {
      degree: "Diploma in Web Development",
      institution: "Coding Bootcamp",
      year: "2021",
      description: "Intensive training in modern full-stack development."
    }
  ],
  socials: {
    email: "lomash.srivastava@example.com",
    github: "https://github.com/Lomash-Srivastava",
    linkedin: "https://linkedin.com/in/lomash-srivastava"
  }
};

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/portfolioData.js', `export const portfolioData = ${JSON.stringify(data, null, 2)};`);
console.log("fallback data created");
