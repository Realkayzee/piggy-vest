import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Tab from './tab';
import Dashboard from './routes/Dashboard';
import Leaderboard from './routes/Leaderboard';
import SaveEther from './routes/SaveEther';
import Stablecoin from './routes/Stablecoin';
import { ChakraProvider } from '@chakra-ui/react'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>
    <ChakraProvider>
      <BrowserRouter>
        <Tab />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='saveether' element={<SaveEther />} />
          <Route path='stablecoin' element={<Stablecoin />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </div>
  
);
