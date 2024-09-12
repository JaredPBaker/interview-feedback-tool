import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Rating, Box, Typography } from '@mui/material';
import { submitFeedback } from '../store/actions/feedbackActions';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    candidateName: '',
    position: '',
    interviewer: '',
    technicalSkills: 0,
    communicationSkills: 0,
    cultureFit: 0,
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (name) => (event, newValue) => {
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFeedback(formData));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& > :not(style)': { m: 1 } }}>
      <Typography variant="h5">Provide Interview Feedback</Typography>
      <TextField
        name="candidateName"
        label="Candidate Name"
        variant="outlined"
        fullWidth
        required
        value={formData.candidateName}
        onChange={handleChange}
      />
      <TextField
        name="position"
        label="Position"
        variant="outlined"
        fullWidth
        required
        value={formData.position}
        onChange={handleChange}
      />
      <TextField
        name="interviewer"
        label="Interviewer"
        variant="outlined"
        fullWidth
        required
        value={formData.interviewer}
        onChange={handleChange}
      />
      <Box>
        <Typography>Technical Skills</Typography>
        <Rating
          name="technicalSkills"
          value={formData.technicalSkills}
          onChange={handleRatingChange('technicalSkills')}
        />
      </Box>
      <Box>
        <Typography>Communication Skills</Typography>
        <Rating
          name="communicationSkills"
          value={formData.communicationSkills}
          onChange={handleRatingChange('communicationSkills')}
        />
      </Box>
      <Box>
        <Typography>Culture Fit</Typography>
        <Rating
          name="cultureFit"
          value={formData.cultureFit}
          onChange={handleRatingChange('cultureFit')}
        />
      </Box>
      <TextField
        name="comments"
        label="Comments"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={formData.comments}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Feedback
      </Button>
    </Box>
  );
};

export default FeedbackForm;