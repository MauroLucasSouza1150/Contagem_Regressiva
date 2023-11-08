import Title from "../components/Title"
import Couter from "../components/Couter"
import useCountdown from '../hooks/useCountdown'

import { useContext } from "react"
import { CountdownContext } from "../context/CountdownContext"
import { Navigate } from "react-router-dom"


const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" replace/>

  const eventTitle = event.title;

  const eventColor = event.color;
  
  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
        <Title title={eventTitle} eventColor={eventColor}/>
        <div className="couter-container">
            <Couter title= "Dias" number={day} eventColor={eventColor} />
            <Couter title= "Horas" number={hour} eventColor={eventColor} />
            <Couter title= "Minutos" number={minute} eventColor={eventColor} />
            <Couter title= "Segundos" number={second} eventColor={eventColor} />
        </div>
    </>
  )
}

export default Countdown