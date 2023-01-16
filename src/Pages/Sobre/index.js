import "./Sobre.css"
import { FaLinkedin } from "react-icons/fa";
const Sobre =()=>{
    return(
        <div>
            <div className="titulo">
                <h1> Brunno Terada Martins</h1>
                <h2>Eterno aprendiz</h2>
            </div>
            <div className="social-box">
                <ul className="social">
                    <li>
                        <FaLinkedin/>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Sobre