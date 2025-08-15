import { useState } from "react"
import { useAuth} from "../components/AuthProvider";

function Login () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState ("");
    const [error, setError] = useState ("");
    const {login} = useAuth();

    const enviarDadosDeLogin = (event) => {
        event.preventDefault();

        if (!email | !senha) {
            setError("Preencha os dados corretamente!")
            return;
        }

        // fazer lógica para verificar email e senha
        if(email === "dayanealrodrigues@gmail.com" && senha === "1234"){
            login(email,senha);
            setError("");
        } else {
            setError ("E-mail ou senha incorretos.");
        }

       
    }
    return (
        <>
        <main>
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <h1>Catálogo Online</h1>
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

                    <button>Entrar</button>
                    <button >Criar Conta</button>
                </form>

            </div> 
        </main>
        </>
    )
}

export default Login;