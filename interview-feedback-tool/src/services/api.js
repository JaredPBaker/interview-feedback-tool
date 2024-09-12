import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${API_URL}/feedback`, feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

// Add more API functions as needed