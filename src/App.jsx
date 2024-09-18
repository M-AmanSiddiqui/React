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

    return (
    <div>

      {/* Header */}
    <Header header={header} />
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
