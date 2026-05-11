import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  background-attachment: fixed;
  color: #e2e8f0;
`;

const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
