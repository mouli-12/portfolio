import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Experience = () => (
  <Box py={5} bgcolor="#f5f5f5">
    <Typography variant="h4" gutterBottom>Experience</Typography>
    <Typography variant="h6">Full Stack Developer – CampX EduTech Pvt Ltd</Typography>
    <Typography>Mar 2024 – Present | Hyderabad, Telangana</Typography>
    <List>
      <ListItem><ListItemText primary="Built clinician-user modules using React and MUI." /></ListItem>
      <ListItem><ListItemText primary="Developed student examination and notification modules." /></ListItem>
      <ListItem><ListItemText primary="Improved platform productivity by 30%." /></ListItem>
    </List>
  </Box>
);

export default Experience;
