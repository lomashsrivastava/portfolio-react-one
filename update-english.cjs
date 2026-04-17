const fs = require('fs');

const replacements = {
  'System Operational': 'Welcome to my portfolio',
  'Entity_Origin': 'About Me',
  'Tech_Arsenal': 'My Skills',
  'Neural_Constructs': 'My Projects',
  'Experience_Logs': 'Work Experience',
  'Academic_Records': 'Education',
  'System_Blueprint': 'Resume',
  'Establish_Connection': 'Contact Me',
  'Initialize Handshake': "Let's Connect",
  'Deploy Projects': 'View Projects',
  'Download Data': 'Download Resume',
  'INITIALIZE': 'HIRE ME',
  'TRANSMIT_EMAIL': 'Email Address',
  'SOURCE_CODE': 'GitHub',
  'PROFESSIONAL_NETWORK': 'LinkedIn',
  'IDENTIFIER': 'Name',
  'RETURN_ADDRESS': 'Email',
  'PAYLOAD': 'Message',
  'TRANSMIT DATA': 'Send Message',
  'Extract Full Data': 'Download Full Resume'
};

const components = [
  'Hero.jsx', 'About.jsx', 'Skills.jsx', 'Projects.jsx', 
  'Experience.jsx', 'Education.jsx', 'Resume.jsx', 'Contact.jsx'
];

components.forEach(file => {
  const path = 'src/components/sections/' + file;
  if (!fs.existsSync(path)) return;
  
  let content = fs.readFileSync(path, 'utf8');
  for (const [oldWord, newWord] of Object.entries(replacements)) {
    content = content.split(oldWord).join(newWord);
  }
  fs.writeFileSync(path, content);
});

console.log('English simplified in sections.');
