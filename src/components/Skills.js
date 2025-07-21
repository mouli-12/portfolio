import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const skills = {
  'Programming Languages': ['Python', 'Java', 'C++', 'C'],
  'Web Technologies': ['React.js', 'MUI', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Nest.js', 'Express.js'],
  'Databases': ['MySQL', 'MongoDB'],
  'Cloud Technologies': ['AWS', 'Azure', 'Google Cloud'],
  'Tools': ['Visual Studio', 'SSMS'],
  'ML Libraries': ['NumPy', 'Pandas', 'Scikit-learn', 'NLTK', 'Matplotlib']
};

const Skills = () => (
  <Box py={5}>
    <Typography variant="h4" gutterBottom>Skills</Typography>
    {Object.entries(skills).map(([category, items]) => (
      <Box key={category} mb={2}>
        <Typography fontWeight="bold">{category}</Typography>
        <List dense>
          {items.map((item, index) => (
            <ListItem key={index}><ListItemText primary={item} /></ListItem>
          ))}
        </List>
      </Box>
    ))}
  </Box>
);

export default Skills;
