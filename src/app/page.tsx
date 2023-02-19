"use client";
import Header from '../components/Header/index'
import CardList from '../components/CardList/index'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0c12828e5d6ffafe78d4f6ea3de07676&language=en-US&page=1')
      .then(resposta => resposta.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

  console.log(movies)


  return (
    <>
      <Header />
      <CardList movies={movies} />
    </>
  )
}
