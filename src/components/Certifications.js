import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Certifications = () => (
  <Box py={5} bgcolor="#f5f5f5">
    <Typography variant="h4" gutterBottom>Certifications</Typography>
    <List>
      <ListItem><ListItemText primary="Java Full Stack – NIIT & Wipro" /></ListItem>
      <ListItem><ListItemText primary="Google Cloud, AWS, Azure Basics" /></ListItem>
      <ListItem><ListItemText primary="Microsoft, Cisco Certified" /></ListItem>
      <ListItem><ListItemText primary="NPTEL Gold – IIT Roorkee (91%)" /></ListItem>
      <ListItem><ListItemText primary="NPTEL Silver – IIT Kanpur (82%)" /></ListItem>
    </List>
  </Box>
);

export default Certifications;
