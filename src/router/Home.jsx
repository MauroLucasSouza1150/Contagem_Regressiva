import { useState, useContext } from "react"
import { CountdownContext } from "../context/CountdownContext";
import { useNavigate } from "react-router-dom"

import "./Home.css"

const Home = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();

    const { setEvent } = useContext(CountdownContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventObject = {
            title,
            date,
            image,
            color,
        };

        setEvent(eventObject);

        navigate("/countdown")
    }
  
    return (
    <div className="home">
        <h2>Coloque sua Contagem Regressiva</h2>
        <form className="countdown-form" onSubmit={handleSubmit}>
            <label>
                <span>Título:</span>
                <input type="text" name="name" placeholder="Digite o Título do Evento" 
                onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <label>
                <span>Data do Evento:</span>
                <input type="date" name="date" onChange={(e) => setDate(e.target.value)} required/>
            </label>
            <label>
                <span>Imagem:</span>
                <input type="text" name="image" placeholder="Insira uma url da imagem" 
                onChange={(e) => setImage(e.target.value)}/>
            </label>
            <label>
                <span>Cor do Tema:</span>
                <input type="color" name="color" onChange={(e) => setColor(e.target.value)} required/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Home