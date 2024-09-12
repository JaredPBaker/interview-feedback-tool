import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Grid } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const AnalyticsPage = () => {
  const feedbacks = useSelector(state => state.feedback.feedbacks);

  const skillsData = {
    labels: feedbacks.map(f => f.candidateName),
    datasets: [
      {
        label: 'Technical Skills',
        data: feedbacks.map(f => f.technicalSkills),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Communication Skills',
        data: feedbacks.map(f => f.communicationSkills),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Culture Fit',
        data: feedbacks.map(f => f.cultureFit),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const averageRatings = feedbacks.map(f => (f.technicalSkills + f.communicationSkills + f.cultureFit) / 3);
  const topPerformers = feedbacks
    .map((f, index) => ({ ...f, averageRating: averageRatings[index] }))
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 5);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Analytics</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Skills Trends</Typography>
          <Line data={skillsData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Average Ratings</Typography>
          <Bar 
            data={{
              labels: feedbacks.map(f => f.candidateName),
              datasets: [{
                label: 'Average Rating',
                data: averageRatings,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }]
            }} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Top Performers</Typography>
          {topPerformers.map((performer, index) => (
            <Box key={performer.id} mb={1}>
              <Typography>{index + 1}. {performer.candidateName} - Average Rating: {performer.averageRating.toFixed(2)}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsPage;