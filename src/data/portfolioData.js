import {
  Code2,
  Database,
  Layout,
  Server,
  Cloud,
  Cpu,
  MonitorSmartphone,
  Globe,
  Settings,
  ShieldCheck,
  Terminal,
  Workflow
} from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "LOMASH SRIVASTAVA",
    role: "Full-Stack Developer",
    description: "I build web applications using React.js, Node.js, and Python. I have experience with databases, APIs, and putting projects online.",
    typingTexts: [
      "FULL-STACK DEVELOPER",
      "REACT.js | NODE.js | DJANGO",
      "CLOUD & DEVOPS EXPERT",
      "AI/ML ENTHUSIAST",
      "FORMER SITE ENGINEER",
      "PROBLEM SOLVER"
    ],
    profileImage: "/assets/img/profile.jpeg"
  },
  
  about: {
    title: "About Me",
    bio1: "I am a Full Stack Developer with 1 year of experience as an intern. I love building websites and working with technologies like React, Node.js, and Python. I have built several projects where I created both the user interface and the backend logic. I am good at solving problems and I am always looking for new opportunities to learn and grow as a developer.",
    bio2: "",
    highlights: [
      { number: "10+", title: "Web Apps", description: "Built 10+ web apps and made them run faster." },
      { number: "30%", title: "Database Speed", description: "Made database queries run much smoother." },
      { number: "256+", title: "Teamwork", description: "Managed large groups of people to finish projects on time." },
      { number: "25%", title: "Saved Time", description: "Automated manual work to save hours every week." }
    ],
    contactInfo: {
      email: "lomashgroups@gmail.com",
      phone: "+91-7355338964",
      location: "Aliganj Khajpar, Banda, Uttar Pradesh, India 210001"
    }
  },

  skills: {
    title: "Technical Skills",
    items: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "TypeScript", level: 78 }
    ]
  },

  experience: {
    title: "Professional Experience",
    items: [
      {
        title: "Full-Stack Developer Intern",
        company: "QSpiders, Noida",
        date: "Jan 2025 To Jan 2026",
        details: [
          "Built and deployed MERN-stack apps, improving speed by 20%",
          "Developed REST APIs with JWT authentication and Swagger documentation",
          "Designed responsive React UIs, ensuring 100% mobile compatibility",
          "Implemented CI/CD pipelines on AWS/Heroku, 95% defect-free deployments",
          "Mentored junior interns on React and Git workflows"
        ]
      },
      {
        title: "Site Engineer",
        company: "Larsen & Toubro (L&T), Banda, UP",
        date: "Jan 2023 – Aug 2023",
        details: [
          "Led 4 major pipeline sites with 256+ workforce; delivered 12% under budget",
          "Directed excavation (2m depth) with heavy machinery (JCB, Hydra)",
          "Conducted QA/QC inspections, reducing rework by 12%",
          "Coordinated with local authorities for road restoration",
          "Implemented safety protocols achieving zero accidents"
        ]
      },
      {
        title: "Mechanical Site Engineer",
        company: "Dixon Technologies, Dehradun",
        date: "Jun 2022 – Jan 2023",
        details: [
          "Executed HVAC & pressure pipeline installations per ISO 9001 standards",
          "Reduced downtime 15% by optimizing vendor deliveries",
          "Automated reporting process, saving 4 hours weekly",
          "Managed site safety protocols achieving zero accidents",
          "Supervised installation of industrial equipment"
        ]
      }
    ]
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "M.Tech - Artificial Intelligence & Machine Learning",
        institution: "Lovely Professional University",
        date: "2022 - 2024",
        description: "Focus on neural networks, real-time image processing, and AI research.",
      },
      {
        degree: "B.Tech - Mechanical Engineering",
        institution: "Uttar Pradesh Technical University",
        date: "Oct 2022",
        description: "Specialized in advanced engineering principles & automation projects.",
      }
    ]
  },

  certifications: {
    title: "Certifications",
    items: [
      {
        degree: "Python Full Stack Web Development",
        institution: "QSpiders, Noida",
        date: "2025 to 2026",
        description: "Built 4 full-stack applications. Specialized in MERN & Django stacks. Gained expertise in cloud deployment.",
      }
    ]
  },

  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "LOMASH HR CRM SYSTEM",
        category: "Full Stack Web App",
        tech: ["React 19 (TypeScript)", "Vite", "Node.js", "Express", "MongoDB", "Django", "SpaCy"],
        description: "A website to help HR teams manage employees and scan resumes automatically using AI.",
        price: "₹100,000",
        github: "https://github.com/lomashsrivastava/LOMASH-HR-CRM-SYSTEM",
        demo: "https://lomashhrcrm.netlify.app/login"
      },
      {
        title: "L-CHAT - Advanced Realtime Messaging Platform",
        category: "Full Stack Web App",
        tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Socket.io"],
        description: "A modern chat app where people can send messages and talk in real-time.",
        price: "₹25,500",
        github: "https://github.com/lomashsrivastava/L-Chat",
        demo: "https://lchat12.netlify.app/"
      },
      {
        title: "L-Movies Platform",
        category: "Full Stack Web App",
        tech: ["React.js", "Django", "DRF", "MongoDB", "Djongo", "Docker"],
        description: "A movie website where people can find and watch their favorite movies.",
        price: "₹35,000",
        github: "https://github.com/lomashsrivastava/L-Movies",
        demo: "https://lmovies2026.netlify.app/"
      },
      {
        title: "AI Job Portal",
        category: "Full Stack Web App",
        tech: ["React", "Tailwind CSS", "Redux", "Node.js", "MongoDB", "Cloudinary"],
        description: "A website for finding jobs, with sections for both light recruiters and students.",
        price: "₹15,000",
        github: "https://github.com/lomashsrivastava/AI-Job-Portal",
        demo: "https://jobporta2026.netlify.app/"
      },
      {
        title: "Lomash Markets",
        category: "Frontend Web App",
        tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "Chart.js"],
        description: "A bright and modern online store homepage with 3D elements.",
        price: "₹5,000",
        github: "https://github.com/lomashsrivastava/Lomash-Markets",
        demo: "https://ecoma1.netlify.app/"
      },
      {
        title: "CineVerse Movies",
        category: "Frontend Web App",
        tech: ["HTML5", "CSS3", "JavaScript (ES6+)"],
        description: "A movie exploration website with a modern look and feel.",
        price: "₹4,000",
        github: "https://github.com/lomashsrivastava/Cinerverse-Movies",
        demo: "https://cineversemovies2026.netlify.app/"
      },
      {
        title: "Vcard-Portfolio",
        category: "Frontend Web App",
        tech: ["HTML5", "CSS3", "JavaScript"],
        description: "A personal portfolio site that looks great on both phones and computers.",
        price: "₹3,500",
        github: "https://github.com/lomashsrivastava/Vcard-Portfolio",
        demo: "https://vcardportfoliogaurav.netlify.app/"
      },
      {
        title: "3D Portfolio",
        category: "Full Stack Web App",
        tech: ["React.js", "Three.js", "Node.js", "Vite"],
        description: "An interactive 3D website to show off my coding projects.",
        price: "₹3,500",
        github: "https://github.com/lomashsrivastava/3d-Portfolio-React",
        demo: "https://3dportfolior.netlify.app/"
      },
      {
        title: "Working Contact Form With API",
        category: "Frontend",
        tech: ["HTML", "CSS (Vanilla)", "JavaScript", "Web3Forms API"],
        description: "A simple contact form that actually works and sends messages.",
        price: "₹2,500",
        github: "https://github.com/lomashsrivastava/Wroking-Contact-Form-With-API",
        demo: "https://runningcontactform.netlify.app/"
      },
      {
        title: "Advance Hotel Booking System",
        category: "Frontend",
        tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
        description: "A hotel booking system that helps manage rooms and reservations.",
        price: "₹6,500",
        github: "https://github.com/lomashsrivastava/Hotel-Booking-Management-System",
        demo: "https://lomashbookingsystem.netlify.app/"
      },
      {
        title: "Lomash Resume Matcher (AI)",
        category: "AI/ML Full-Stack",
        tech: ["React", "FastAPI", "Python", "scikit-learn", "spaCy"],
        description: "A tool that uses AI to match resumes with the right job descriptions.",
        price: "₹4,800",
        github: "https://github.com/lomashsrivastava/Resume-Matcher-With-AI",
        demo: "https://lomashresumematcher.netlify.app/"
      },
      {
        title: "Laxmi Tour - Tour & Travel",
        category: "Frontend + AI Simulation",
        tech: ["HTML5", "CSS3", "JS (ES6+)", "GSAP"],
        description: "A travel website that helps you find the best tour packages.",
        price: "₹7,500",
        github: "https://github.com/lomashsrivastava/Laxmi-Travels---Tour-And-Travel-Website-With-Package-AI-Integration",
        demo: "https://laxmitour.netlify.app/"
      },
      {
        title: "Lomash UI - Dashboard Project",
        category: "Advanced UI/ML",
        tech: ["HTML5", "CSS3", "JavaScript", "Chart.js", "TensorFlow.js"],
        description: "A modern dashboard for tracking data and seeing charts.",
        price: "₹4,000",
        github: "https://github.com/lomashsrivastava/Advance-UI-Dashboard",
        demo: "https://lomashui.netlify.app/"
      }
    ]
  },

  contact: {
    title: "Let's Connect",
    accessKey: "3dd0cc07-31d0-42b6-bec8-c00a172a2183",
    email: "lomashgroups@gmail.com",
    phone: "+91-7355338964",
    location: "Banda, Uttar Pradesh, India",
    mapLink: "https://www.google.com/maps?q=25.465365,80.342462",
    availability: "Monday - Friday, 10:00 AM - 7:00 PM",
    socials: {
      github: "https://github.com/lomashsrivastava",
      linkedin: "https://www.linkedin.com/in/lomashsrivastava",
      whatsapp: "https://wa.me/917355338964"
    }
  }
};
