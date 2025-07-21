import React from 'react';
import { Box, Typography } from '@mui/material';

const projects = [
  { name: 'Dairy Delights', tech: 'React, Spring Boot, Razorpay', desc: 'Organic dairy e-commerce platform.' },
  { name: 'MovieZone Theaters', tech: 'JavaScript', desc: 'Theater ticket booking app.' },
  { name: 'Talaqa', tech: 'React, MUI', desc: 'Speech therapy web platform.' },
  { name: 'Royal Restaurants', tech: 'React, Spring Boot, MongoDB', desc: 'Food ordering app with role-based access.' },
  { name: 'Library Management System', tech: 'Spring Boot, MySQL', desc: 'Book issue and return system.' },
  { name: 'Foodie App', tech: 'React, Spring Boot, Razorpay', desc: 'Zomato-like food app with cart and payment.' },
];

const Projects = () => (
  <Box py={5}>
    <Typography variant="h4" gutterBottom>Projects</Typography>
    {projects.map((proj, idx) => (
      <Box key={idx} mb={2}>
        <Typography fontWeight="bold">{proj.name} – {proj.tech}</Typography>
        <Typography>{proj.desc}</Typography>
      </Box>
    ))}
  </Box>
);

export default Projects;
