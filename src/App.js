import './App.css'
import React from 'react';
import Advanced from './Advanced'
import 'telegram-web-app'


const tg = window.Telegram.WebApp;

function App () {
  return (
    <div className='app'>
    data={tg.initDataUnsafe?.user?.usernam}
    <Advanced />
    </div>
  )
}

export default App
