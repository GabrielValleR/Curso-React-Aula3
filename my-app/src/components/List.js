import Item from "./Item"

function List(){
    return(
        <>
        <h1> Minha Lista de Animes</h1>
        <ul>
            <li>Sworld Art Online</li>
            <li>Hero Shild</li>
            <li>Boku no hero</li>
            <Item nome='One Piece' temporadas={10}/>
            <Item/>
        </ul>
        </>
    )
}

export default List