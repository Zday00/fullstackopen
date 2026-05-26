import { useState } from 'react'




// a proper place to define a component
const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = ({good, bad, neutral, all, average, positive}) => {
  if (all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
  const newGood = good + 1
  console.log("good clicked", newGood)
  setGood(newGood)

  }

  const handleNeutral = () => {
  const newNeutral = neutral + 1
  console.log("neutral clicked", newNeutral) 
  setNeutral(newNeutral)
  }

  const handleBad = () => {
  const newBad = bad + 1
  console.log("bad clicked", newBad)
  setBad(newBad)
}


  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100
  
  
  return (
    <div>
         <h1>give feedback</h1>
        
        <Button text = "good" onClick ={handleGood}/>
        <Button text = "neutral" onClick ={handleNeutral}/>
        <Button text = "bad" onClick ={handleBad}/>
        
        <Statistics good ={good} bad ={bad} neutral ={neutral} all = {all} average ={average} positive ={positive}/>
   </div>
   
  )
}

export default App


















