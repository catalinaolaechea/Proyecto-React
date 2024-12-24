import React, { useState } from 'react'
import './Inspo.css'
import Foto1 from '../assets/budinZuchinni.jpg'
import Foto2 from '../assets/tortillaRucula.jpg'
import Foto3 from '../assets/pizza.jpg'

const Inspo = () => {
  const [searchTerm, setSearchTerm] = useState('') //almacena el texto que el usuario escribe en el input
  const [searchResults, setSearchResults] = useState([]) //almacena los resultados de búsqueda
  const [isLoading, setIsLoading] = useState(false) //cuando este en estado de loading...
  const [error, setError] = useState(null)

  const images = [
    { src: Foto1, description: 'Recetas de budin de chocolate.' },
    { src: Foto2, description: 'Recetas de omellete' },
    { src: Foto3, description: 'Recetas para la masa de pizza casera' },
  ]

  const searchRecipes = async (term) => {
    if (!term.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      //petición a la API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      const data = await response.json()
      //guarda los resultados
      setSearchResults(data.meals || [])
      }catch (err) {
        setError('Error al buscar recetas')
        setSearchResults([])
      } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e) => { 
    const value = e.target.value //obtiene el texto escrito en el input
    setSearchTerm(value) //almacena el texto en el Estado
    searchRecipes(value) //ejecuta busqueda con nuevo término, hace la petición a la API
  }

  return (
    <div className="gallery-container">
      <h2>Trending recipes</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={`Foto ${index + 1}`} />
            <div className="gallery-description">
              {image.description}
              <button className="read-more-btn">Leer +</button>
            </div>
          </div>
        ))}
      </div>

      {/*Incorporación de barra de busqueda con base en una api de recetas*/}
      <div className="search-container">
        <h3>Search for inspiring ideas:</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar recetas..."
          className="search-input"
        />
        
        {isLoading && <p>Buscando recetas...</p>}
        {error && <p className="error-message">{error}</p>}
        
        <div className="search-results">
          {searchResults.length === 0 && searchTerm && !isLoading ? (
            //en caso de no encontrar recetas con lo que se ingresó para buscar:
            <p>No se han encontrado recetas</p>
          ) : (
            <div className="gallery">
              {/*en caso de encontrar receta(s):*/}
              {searchResults.map((meal) => (
                <div className="gallery-item" key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div className="gallery-description">
                    <h4>{meal.strMeal}</h4>
                    <button className="read-more-btn">Leer +</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Inspo

