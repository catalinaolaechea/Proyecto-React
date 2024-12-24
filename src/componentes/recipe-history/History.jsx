import React from 'react';
import './History.css'

const History = ({ recipes, onDeleteRecipe }) => {
  return (
    <div style={{fontFamily:'Poppins,sans-serif'}}>
      <h2>Historial de recetas</h2>
      <div className="recipe-section">
        {recipes.length === 0 ? (
          <p className="no-recipes">No hay recetas aún. ¡Crea una nueva!</p>
        ) : (
          recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <div className="recipe-main-info">
                <h3 className="recipe-title">{recipe.name}</h3>
                <p>{recipe.description}</p>
              </div>
              <div className="recipe-text info">
                <div className="recipe-text-left">
                  <strong>Tiempo de preparación:</strong>
                  <p>{recipe.prepTime} minutos</p>
                </div>
                <div className="recipe-text-right">
                  <strong>Ingredientes:</strong>
                  <ol>
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="recipe-main-info info">
                <strong>Pasos:</strong>
                <ol className="pasos">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="delete-btn">
                <button onClick={() => onDeleteRecipe(index)}>delete recipe</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;

