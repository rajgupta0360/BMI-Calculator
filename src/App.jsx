import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const reload = () =>{
    window.location.reload();
  }

  const calBMI = (e) => {
    e.preventDefault();
    const meterSqr = (height / 100) ** 2;
    if(weight === 0 && height === 0){
      alert("Please enter a valid weight and height");
      return;
    }
    else if(weight === 0){
      alert("Please enter a valid weight");
      return;
    }
    else if(height === 0){
      alert("Please enter a valid height");
      return;
    }
    else{
      let bmi = (weight / meterSqr);
      console.log(bmi);
      setBmi(bmi.toFixed(2));
      console.log(bmi);

      if(bmi < 18.5){
        setMessage("You are underweight");
      }
      else if(bmi >= 18.5 && bmi < 25){
        setMessage("You are normal weight");
      }
      else{
        setMessage("You are overweight");
      }
    }
  }
  return (
    <>
      <div className='container'>
        <h1>BMI Calculator</h1> 
        <form onSubmit={calBMI}>
          <div className= 'wrapper'>
          <div className='input-container'>
            <label>Weight (kg)</label>
            <input type="number" placeholder='Enter your weight' value={weight} onChange={(e)=>(setWeight(Number(e.target.value)))}/>
          </div>
          <div className='input-container'>
            <label>Height (cm)</label>
            <input type="number" placeholder='Enter your height' value={height} onChange={(e)=>(setHeight(Number(e.target.value)))}/>
          </div>
          <div className="button-container">
            <button className="btn submit" type='submit'>Calculate</button>
            <button className="btn" type='reset' onClick={reload}>reload</button>
          </div>
          <div className="result-container">
            <h3>Your BMI is: {bmi}</h3>
            <p className="result">{message}</p>
          </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
