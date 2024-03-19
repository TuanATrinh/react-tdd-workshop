import React from 'react'
import { Link } from 'react-router-dom'
import DetailsContext from './DetailsContext'


const Movie = (props) => {
  const { setDetails } = React.useContext(DetailsContext)

  return(
    <>
      <div onClick={() =>{
        setDetails(props.movie)}}>
        <Link to={`/id/${props.id}`}>
          <img src={props.image} alt={`movie ${props.id}`} width="150px" height="200px" />
        </Link>
      </div>
    </>
  )
}

export default Movie