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
        
        <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
                {/* Bloco de Informações */}
                <div className="flex flex-col items-center justify-center p-8 text-center bg-blue-500 text-white">
                <h1 className="text-3xl font-bold mb-2">Catálogo Online</h1>
                <h2 className="text-xl font-medium">Faça seu Login</h2>
                </div>

                {/* Formulário de Login */}
                <div className="p-8">
                {error && <p className="text-red-500 font-semibold mb-4 text-center">{error}</p>}
                <form className="flex flex-col space-y-4" onSubmit={enviarDadosDeLogin}>
                    <label className="text-gray-700 font-medium">Email</label>
                    <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <label className="text-gray-700 font-medium">Senha</label>
                    <input 
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4">
                    <button 
                        type="submit" 
                        className="w-full md:w-auto flex-1 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Entrar
                    </button>
                    <button 
                        onClick={createUser} 
                        type="button"
                        className="w-full md:w-auto flex-1 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Criar Conta
                    </button>
                    </div>
                </form>
                </div>
  </div>
</main>
    )
}

export default Login;