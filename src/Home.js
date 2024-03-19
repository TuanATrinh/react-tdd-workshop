import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'

export default function Home(){
    const headingStyle={
    backgroundColor: 'lightgrey',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
    }

    const spanStyle= {
        display: 'flex',
        alignItems: 'left',
        marginLeft: 'auto'
    }

    return (
    <>
        <h1 style={headingStyle}>
            <span style={spanStyle}>GMDB</span>
        <SearchBar />
        </h1>
        <MovieList />
    </>)
}

