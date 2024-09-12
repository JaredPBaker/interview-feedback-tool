export const validateFeedbackForm = (formData) => {
    const errors = {};
  
    if (!formData.candidateName.trim()) {
      errors.candidateName = 'Candidate name is required';
    }
  
    if (!formData.position.trim()) {
      errors.position = 'Position is required';
    }
  
    if (!formData.interviewer.trim()) {
      errors.interviewer = 'Interviewer name is required';
    }
  
    if (formData.technicalSkills === 0) {
      errors.technicalSkills = 'Please rate technical skills';
    }
  
    if (formData.communicationSkills === 0) {
      errors.communicationSkills = 'Please rate communication skills';
    }
  
    if (formData.cultureFit === 0) {
      errors.cultureFit = 'Please rate culture fit';
    }
  
    return errors;
  };