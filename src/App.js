import './App.css'
import React from 'react';
import Advanced from './Advanced'
import { Helmet } from 'react-helmet';

// const tg = window.Telegram.WebApp;


function App () {
  return (
    <div className='app'>
    <Helmet>
      <script src="https://telegram.org/js/telegram-web-app.js" />
    </Helmet>
      
    data={window.Telegram}
    <Advanced />
    </div>
  )
}

export default App
