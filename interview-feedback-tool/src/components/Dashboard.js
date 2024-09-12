import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">
        Welcome to the Interview Feedback Tool Dashboard. Here you'll be able to see analytics and summaries of feedback.
      </Typography>
      {/* Add more dashboard content here */}
    </Box>
  );
};

export default Dashboard;