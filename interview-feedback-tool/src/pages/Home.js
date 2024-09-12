import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { format } from 'date-fns';

const Home = () => {
  const feedbacks = useSelector(state => state.feedback.feedbacks);

  const totalInterviews = feedbacks.length;
  const averageRating = feedbacks.reduce((acc, curr) => 
    acc + (curr.technicalSkills + curr.communicationSkills + curr.cultureFit) / 3, 0
  ) / totalInterviews;

  const recentFeedbacks = feedbacks.slice(-5).reverse();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Quick Statistics</Typography>
              <Typography>Total Interviews: {totalInterviews}</Typography>
              <Typography>Average Rating: {averageRating.toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Recent Feedback Submissions</Typography>
              {recentFeedbacks.map(feedback => (
                <Box key={feedback.id} mb={1}>
                  <Typography>{feedback.candidateName} - {feedback.position}</Typography>
                  <Typography variant="body2">
                    Date: {format(new Date(feedback.date), 'MM/dd/yyyy')}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;