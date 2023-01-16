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
            <div>
                <p>
                    Trabalho com Tecnologia desde 2018. 
                    Tive o prazer de me formar como Técnico em Informática no ano de 2020, foi apenas o início de um grande sonho. 
                    Hoje estou finalizando uma graduação da área de informática e minha paixão por tecnologia e novos desafios só aumentam.
                </p>
            </div>
        </div>
    )

}

export default Sobre