import {useState} from 'react'


function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("Testando")
        console.log(userEmail)
    }

    function limparEmail(){
        
        setUserEmail('')
        console.log("Email foi limpo")
        
    }
    return(
        <>
            <h2> Cadastre seu email:</h2> 
            <form>
            <input 
            type="email" 
            placeholder="Digite o seu e-mail"
            onChange={(e)=> setEmail(e.target.value)}
            />
            </form>   
            <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
            
        </>
    )
}

export default Condicional