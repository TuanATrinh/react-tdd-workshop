import React from 'react'
import DetailsContext from './DetailsContext'

export default function DetailsPage(){
    const {details} = React.useContext(DetailsContext)
    const detailsTextStyle = {
        marginLeft: '20px'
    }
    const containerStyle = {
      display: 'flex',
      alignItems: 'center'


    }
    return(<>
      <div style={containerStyle}>
        <img src={details.poster} alt="" />
        <div className='details-text' style={detailsTextStyle}>
          <h1>{details.title}</h1>
          <h3>Released on: {details.released}</h3>
          <h4>Genre: {details.genre} | Actors: {details.actors}</h4>
          <p>Plot: {details.plot}</p>
        </div>
      </div>
    </>)
}