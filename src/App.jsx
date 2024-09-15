import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import landingPageData from './constant/webData'
import { data } from 'autoprefixer'
import Header from './components/header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {
  console.log("landingPageData", landingPageData);
  const {header, hero , features , testimonials} = landingPageData;
  const [userName,setUserName] = useState ('Aman')
  // const [counter,setcounter] = useState (0)
  // const handleUpdateCounter = () =>{
  //   setcounter(counter + 1)
  // } 
  console.log(userName);
  
  return (
    <div>
      {/* Header */}
    <Header header={header} />
        {/* Use with input */}
        {/* <div  className='flex justify-center items-center flex-col'>
          <input
           value={userName} 
          placeholder='Add Your Name' 
          onChange={(e)=> setUserName(e.target.value)}
          className='border border purple-400'
          />
          </div> */}

    {/* Use with number */}
    {/* <div  className='flex justify-center items-center flex-col'>
    <h2>{counter}</h2><h2>{userName}</h2>
    <button onClick={handleUpdateCounter}>Update counter</button>
    </div> */}
  {/* Hero */}
 <Hero hero={hero} />
{/* Features Section */}
<Features features={features} />
{/* {testimonials Section} */}
<Testimonials testimonials={testimonials} />
{/* {Footer Section} */}
<Footer header={header} />
  </div>
  );
}

export default App
