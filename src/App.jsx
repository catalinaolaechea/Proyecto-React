import React, { useState, useEffect } from 'react';
import Create from './componentes/create-recipe/Create';
import History from './componentes/recipe-history/History';

const App = () => {
  //inicializa el estado de recipes con las recetas guardadas en la localStorage (memoria local) en caso de que las haya sino con un array vacío
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  //guarda las nuevas recetas en la localStorage
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  //guarda una nueva receta 
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  //elimina una receta a apartir de su indice
  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };


  return (
    <div>

      <Create onAddRecipe={addRecipe} />

      {/*history.jsx recibe una lista de receta y una función para eliminar alguna de ellas en caso de que se quiera*/}
      <History recipes={recipes} onDeleteRecipe={deleteRecipe} />

    </div>
  );
};

export default App;

