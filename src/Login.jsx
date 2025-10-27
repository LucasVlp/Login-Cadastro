import './Login.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { AiFillInstagram } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

export default function Login(){
    return(
        <>
            <div className="container">
                <div className="containerCadastro">
                    <h1>Login</h1>
                    <form>
                        <div className="inputs">    
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='Digite seu email' id='email' name='email' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" placeholder='Digite sua senha' id='password' name='password' />
                        </div>
                        <button>Enviar!</button>
                        <p>Não tem uma conta? <Link to='/cadastro'>Cadastrar</Link></p>
                        <div className="container-icons">
                            <AiFillInstagram  size={40}/>
                            <FcGoogle id='google' size={40}/>
                            <FaApple size={42}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}