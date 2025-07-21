import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => (
  <Box textAlign="center" py={5} bgcolor="primary.main" color="white">
    <Typography variant="h3" fontWeight="bold">
      Lakkakula Mouli Sai Babu
    </Typography>
    <Typography mt={2}>
      Full Stack Developer | Machine Learning Enthusiast | Cloud Certified
    </Typography>
    <Button
      variant="contained"
      sx={{ mt: 3, backgroundColor: 'white', color: 'primary.main' }}
      href="/resume.pdf"
      download
    >
      Download Resume
    </Button>
  </Box>
);

export default Home;