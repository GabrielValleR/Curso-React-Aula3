import PropTypes from 'prop-types'

function Item({nome, temporadas}){
    return(
        <>
        <li>
            {nome} - {temporadas}
        </li>
        
        </>
    )
}

Item.propTypes = {
    nome: PropTypes.string,
}

Item.defaultProps ={
    nome: 'Naruto',
    temporadas: 10,
}
export default Item