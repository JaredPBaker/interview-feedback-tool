import React from 'react';
import { Typography, Box } from '@mui/material';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage = () => {
  return (
    <Box>
      <Typography variant="h4">Provide Interview Feedback</Typography>
      <FeedbackForm />
    </Box>
  );
};

export default FeedbackPage;