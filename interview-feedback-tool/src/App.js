import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import FeedbackPage from './pages/FeedbackPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;