import { subDays } from 'date-fns';

const generateMockData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    candidateName: `Candidate ${i + 1}`,
    position: ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer'][Math.floor(Math.random() * 4)],
    interviewer: `Interviewer ${Math.floor(i / 3) + 1}`,
    technicalSkills: Math.floor(Math.random() * 5) + 1,
    communicationSkills: Math.floor(Math.random() * 5) + 1,
    cultureFit: Math.floor(Math.random() * 5) + 1,
    comments: `Mock feedback for Candidate ${i + 1}`,
    date: subDays(new Date(), i).toISOString(),
  }));
};

const initialState = {
  feedbacks: generateMockData(20),
  loading: false,
  error: null,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK_REQUEST':
      return { ...state, loading: true };
    case 'SUBMIT_FEEDBACK_SUCCESS':
      return {
        ...state,
        loading: false,
        feedbacks: [...state.feedbacks, action.payload],
      };
    case 'SUBMIT_FEEDBACK_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default feedbackReducer;