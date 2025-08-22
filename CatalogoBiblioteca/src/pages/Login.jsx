import { useState } from "react"
import { useNavigate } from "react-router";
import { useAuth} from "../context/AuthProvider";

function Login () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState ("");
    const [error, setError] = useState ("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const enviarDadosDeLogin = (event) => {
        event.preventDefault();

        if (!email | !senha) {
            setError("Preencha os dados corretamente!")
            return;
        }

        // fazer lógica para verificar email e senha
        if(email === "dayanealrodrigues@gmail.com" && senha === "1234"){
            login(email,senha);
            navigate("/");
            setError("");
        } else {
            setError ("E-mail ou senha incorretos.");
        }

       
    }
    const createUser = (e) => {
        e.preventDefault();
        navigate("/createuser");
    }
    return (
        <>
        <main>
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <h1>Catálogo Online</h1>
                <h2>Login</h2>
            </div>
            <div>
                <form  onSubmit={enviarDadosDeLogin}>
                    <label>Email</label>
                    <input type="email"
                    value = {email}
                    onChange ={(e) => setEmail(e.target.value)} />
                    <label>Senha</label>
                    <input 
                    type="password"
                    value={senha}
                    onChange = {(e) => setSenha(e.target.value)} />

                    <button type="submit">Entrar</button>
                    <button onClick={createUser}>Criar Conta</button>
                </form>

            </div> 
        </main>
        </>
    )
}

export default Login;