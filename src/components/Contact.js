import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => (
  <Box py={5}>
    <Typography variant="h4" gutterBottom>Contact</Typography>
    <Typography>Email: your-email@example.com</Typography>
    <Typography>LinkedIn: linkedin.com/in/yourprofile</Typography>
    <Typography>GitHub: github.com/yourusername</Typography>
    <Typography>Location: Hyderabad, Telangana</Typography>
  </Box>
);

export default Contact;