import { useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import appRouter from './router/appRouter';
import { Outlet } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Outlet/>
      </div>
      
      
    </>
  )
}

export default App
