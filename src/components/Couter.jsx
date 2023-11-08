import './Couter.css'

const Couter = ({ title, number, eventColor }) => {
  return (
    <div className='couter'>
        <p className='couter-number' style={{ backgroundColor: eventColor }}>{number}</p>
        <h3 className='couter-text' style={{ color: eventColor }}>{title}</h3>
    </div>
  )
}

export default Couter