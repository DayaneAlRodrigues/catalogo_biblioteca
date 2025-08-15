import { useState } from "react"

function CriarConta () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState ("");
    const [error, setError] = useState ("");

    const criarConta = (event) => {
        event.preventDefault();

        if (!email | !senha) {
            setError("Preencha os dados corretamente!")
            return;
        }

        setError ("");

        const newLogin = {
            id: Date.now,
            email: email,
            senha: senha
        }
        console.log(newLogin)
    }
    return (
        <>
        <main>
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <h1>Criar Conta</h1>
            </div>
            <div>
                <form>
                    <label onSubmit={criarConta}>Email</label>
                    <input type="email"
                    value = {email}
                    onChange ={(e) => setEmail(e.target.value)} />
                    <label>Senha</label>
                    <input 
                    type="text"
                    value={senha}
                    onChange = {(e) => setSenha(e.target.value)} />
                    <select >
                        <option value="admin">Admnistrador</option>
                        <option value="usuário">Usuário</option>
                    </select>

                    <button>Criar Conta</button>
                </form>

            </div> 
        </main>
        </>
    )
}

export default CriarConta;