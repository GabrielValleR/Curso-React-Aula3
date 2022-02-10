import Button from "./Button"
function Evento(){

    function meuEvento(){
        console.log("Opa, fui ativado!!")
    }
    function segundoEvento(){
        console.log("Segundo evento fui ativado!!")
    }

    return (
        <>
        
        <p> Clique para desparar um evento</p>
        <button onClick={meuEvento}>Ativando primeiro evento!</button>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo Evento"/>
        </>
    )
}

export default Evento