import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Grid,
  Chip,
  Autocomplete,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const SKILL_OPTIONS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'C#',
  'PHP',
  'Ruby',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'HTML',
  'CSS',
  'Sass',
  'Less',
  'TailwindCSS',
  'Bootstrap',
  'Material-UI',
  'Vue.js',
  'Angular',
  'Next.js',
  'Express.js',
  'Django',
  'Flask',
  'Spring',
  'Laravel',
  'GraphQL',
  'REST',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'GCP',
  'Git',
  'GitHub',
  'GitLab',
  'CI/CD',
  'Jest',
  'Cypress',
  'Selenium',
  'Webpack',
  'Vite',
  'Babel',
];

function ReadmeForm({
  formData,
  onFormChange,
  onSkillsChange,
  onProjectsChange,
  onSocialLinksChange,
}) {
  const handleProjectAdd = () => {
    onProjectsChange([
      ...formData.projects,
      { name: '', description: '', link: '' },
    ]);
  };

  const handleProjectRemove = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    onProjectsChange(newProjects);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = formData.projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    onProjectsChange(newProjects);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h5" gutterBottom>
        Basic Information
      </Typography>
      <TextField
        label="Name"
        value={formData.name}
        onChange={(e) => onFormChange('name', e.target.value)}
        fullWidth
      />
      <TextField
        label="Role"
        value={formData.role}
        onChange={(e) => onFormChange('role', e.target.value)}
        fullWidth
      />
      <TextField
        label="Interests"
        value={formData.interests}
        onChange={(e) => onFormChange('interests', e.target.value)}
        fullWidth
      />

      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <TextField
        label="About"
        value={formData.about}
        onChange={(e) => onFormChange('about', e.target.value)}
        multiline
        rows={2}
        fullWidth
      />
      <TextField
        label="🔭 Currently Working On"
        value={formData.workingOn}
        onChange={(e) => onFormChange('workingOn', e.target.value)}
        fullWidth
        placeholder="e.g., A React project, Learning TypeScript"
      />
      <TextField
        label="🌱 Currently Learning"
        value={formData.learning}
        onChange={(e) => onFormChange('learning', e.target.value)}
        fullWidth
        placeholder="e.g., React Native, GraphQL"
      />
      <TextField
        label="👯 Looking to Collaborate On"
        value={formData.collaborating}
        onChange={(e) => onFormChange('collaborating', e.target.value)}
        fullWidth
        placeholder="e.g., Open source projects, CLI tools"
      />
      <TextField
        label="🤔 Looking for Help With"
        value={formData.helpWith}
        onChange={(e) => onFormChange('helpWith', e.target.value)}
        fullWidth
        placeholder="e.g., TypeScript performance tuning"
      />
      <TextField
        label="💬 Ask Me About"
        value={formData.askMeAbout}
        onChange={(e) => onFormChange('askMeAbout', e.target.value)}
        fullWidth
        placeholder="e.g., JavaScript, UI/UX, cybersecurity"
      />
      <TextField
        label="📫 How to Reach Me"
        value={formData.email}
        onChange={(e) => onFormChange('email', e.target.value)}
        fullWidth
        placeholder="e.g., youremail@example.com"
      />
      <TextField
        label="😄 Pronouns"
        value={formData.pronouns}
        onChange={(e) => onFormChange('pronouns', e.target.value)}
        fullWidth
        placeholder="e.g., he/him, she/her, they/them"
      />
      <TextField
        label="⚡ Fun Fact"
        value={formData.funFact}
        onChange={(e) => onFormChange('funFact', e.target.value)}
        fullWidth
        placeholder="e.g., I can solve a Rubik's cube in under 2 minutes!"
      />

      <Typography variant="h5" gutterBottom>
        Social Links
      </Typography>
      <TextField
        label="GitHub Username"
        value={formData.socialLinks.github}
        onChange={(e) => onSocialLinksChange('github', e.target.value)}
        fullWidth
      />
      <TextField
        label="LinkedIn Username"
        value={formData.socialLinks.linkedin}
        onChange={(e) => onSocialLinksChange('linkedin', e.target.value)}
        fullWidth
      />
      <TextField
        label="Twitter Username"
        value={formData.socialLinks.twitter}
        onChange={(e) => onSocialLinksChange('twitter', e.target.value)}
        fullWidth
      />

      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Autocomplete
        multiple
        options={SKILL_OPTIONS}
        value={formData.skills}
        onChange={(_, newValue) => onSkillsChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Select Skills" fullWidth />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option}
              {...getTagProps({ index })}
              key={option}
            />
          ))
        }
      />

      <Typography variant="h5" gutterBottom>
        Projects
      </Typography>
      {formData.projects.map((project, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={11}>
              <TextField
                label="Project Name"
                value={project.name}
                onChange={(e) =>
                  handleProjectChange(index, 'name', e.target.value)
                }
                fullWidth
                sx={{ mb: 1 }}
              />
              <TextField
                label="Description"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(index, 'description', e.target.value)
                }
                multiline
                rows={2}
                fullWidth
                sx={{ mb: 1 }}
              />
              <TextField
                label="Project Link"
                value={project.link}
                onChange={(e) =>
                  handleProjectChange(index, 'link', e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                color="error"
                onClick={() => handleProjectRemove(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button
        startIcon={<AddIcon />}
        onClick={handleProjectAdd}
        variant="outlined"
      >
        Add Project
      </Button>
    </Box>
  );
}

export default ReadmeForm; 