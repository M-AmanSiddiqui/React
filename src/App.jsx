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


  const [amount , setamount] = useState (0);
  const [type,setType] = useState ("income");
  const [transactions,setTransactions] = useState ([]);

  const handleAddTransactions = () =>{
    setTransactions([...transactions , {amount,type}])
    
    
  };
  console.log("transactions",transactions);
    
    return (
    <div>
      {/* Header */}
    <Header header={header} />
    <div className='flex flex-col justify-center items-center'>
      <div className='flex'>
<input 
value={amount}
onChange={(e) => setamount(e.target.value)}
 className="border border-purple-600 rounded-sm m-4 mx-2 p-1" type="number" placeholder='add Amount'/>
<select value={type}
onChange={(e) => setType(e.target.value)}
className='border border-purple-600 rounded-sm m-4 mx-2 p-1'> 
  <option value="income">income</option>
  <option value="expense">expense</option>

</select>
<button onClick={handleAddTransactions} className='border border-purple-600 rounded-sm m-4 mx-2 p-1'>submit</button>
      </div>
      <div>
        {
          transactions.map((data , index)=>{
            return (
             <div key={index} className='flex g' ><h1 className='font-bold underline text-3xl w-60'>{data.amount}</h1>
            <h1 className={`font-bold underline text-3xl ${data.type === "income" ? "text-green-700" : "text-red-700"  }`}
             >
              {data.type}</h1>
            </div>
            );
          })}
        
      </div>
    </div>



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
