import React, { useState } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { marked } from 'marked';
import ReadmeForm from './components/ReadmeForm';
import ReadmePreview from './components/ReadmePreview';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    interests: '',
    about: '',
    workingOn: '',
    learning: '',
    collaborating: '',
    helpWith: '',
    askMeAbout: '',
    email: '',
    pronouns: '',
    funFact: '',
    skills: [],
    projects: [],
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: '',
    },
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSkillsChange = (skills) => {
    setFormData(prev => ({
      ...prev,
      skills,
    }));
  };

  const handleProjectsChange = (projects) => {
    setFormData(prev => ({
      ...prev,
      projects,
    }));
  };

  const handleSocialLinksChange = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  const generateMarkdown = () => {
    const {
      name,
      role,
      interests,
      about,
      workingOn,
      learning,
      collaborating,
      helpWith,
      askMeAbout,
      email,
      pronouns,
      funFact,
      skills,
      projects,
      socialLinks,
    } = formData;

    return `<!-- 👋 INTRO -->
<h1 align="center">Hi 👋, I'm ${name}</h1>
<h3 align="center">A ${role} who loves ${interests}</h3>

<!-- 🌐 SOCIALS / BADGES -->
<p align="center">
  ${socialLinks.github ? `<a href="https://github.com/${socialLinks.github}"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/></a>` : ''}
  ${socialLinks.linkedin ? `<a href="https://linkedin.com/in/${socialLinks.linkedin}"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>` : ''}
  ${socialLinks.twitter ? `<a href="https://twitter.com/${socialLinks.twitter}"><img alt="Twitter" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>` : ''}
</p>

---

## 👨‍💻 About Me
${about ? `- ${about}\n` : ''}
${workingOn ? `- 🔭 I'm currently working on **${workingOn}**\n` : ''}
${learning ? `- 🌱 I'm currently learning **${learning}**\n` : ''}
${collaborating ? `- 👯 I'm looking to collaborate on **${collaborating}**\n` : ''}
${helpWith ? `- 🤔 I'm looking for help with **${helpWith}**\n` : ''}
${askMeAbout ? `- 💬 Ask me about **${askMeAbout}**\n` : ''}
${email ? `- 📫 How to reach me: [${email}](mailto:${email})\n` : ''}
${pronouns ? `- 😄 Pronouns: ${pronouns}\n` : ''}
${funFact ? `- ⚡ Fun fact: ${funFact}\n` : ''}

---

## 🛠️ Skills
${skills.map(skill => `![${skill}](https://img.shields.io/badge/-${skill}-323330?style=flat&logo=${skill.toLowerCase()})`).join('\n')}

---

## 🔭 Featured Projects
${projects.map(project => `
### ${project.name}
${project.description}
${project.link ? `[View Project](${project.link})` : ''}
`).join('\n')}

---

Made with ❤️ by ${name}`;
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        GitHub Profile README Generator
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
        <Paper sx={{ flex: 1, p: 3 }}>
          <ReadmeForm
            formData={formData}
            onFormChange={handleFormChange}
            onSkillsChange={handleSkillsChange}
            onProjectsChange={handleProjectsChange}
            onSocialLinksChange={handleSocialLinksChange}
          />
        </Paper>
        <Paper sx={{ flex: 1, p: 3 }}>
          <ReadmePreview markdown={generateMarkdown()} />
        </Paper>
      </Box>
    </Container>
  );
}

export default App; 