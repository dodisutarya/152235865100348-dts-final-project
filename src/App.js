import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './themes/theme';
import HomePage from './components/containers/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailResep from './components/containers/DetailResep';
import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {


  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resep/:resepId"
              element={
                <>
                  <ProtectedRoute>
                    <DetailResep />
                  </ProtectedRoute>
                </>
              }
            />
            {/* <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} /> */}
          </Routes>

        </BrowserRouter>

      </ThemeProvider>
    </>

  )
}

export default App;
