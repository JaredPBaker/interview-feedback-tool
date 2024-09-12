export const submitFeedback = (feedbackData) => {
  return async (dispatch) => {
    dispatch({ type: 'SUBMIT_FEEDBACK_REQUEST' });
    try {
      // Replace this with an actual API call when you have a backend
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ data: feedbackData }), 1000)
      );
      dispatch({ type: 'SUBMIT_FEEDBACK_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SUBMIT_FEEDBACK_FAILURE', payload: error.message });
    }
  };
};