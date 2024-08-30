import React, { useState, useEffect } from "react";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]); // Estado para almacenar la lista de Pokémon
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener la lista de Pokémon desde la PokeAPI
    const obtenerPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        ); // Limitar a los primeros 20 Pokémon
        if (!response.ok) {
          throw new Error("Error en la obtención de datos"); // Manejo de errores
        }
        const data = await response.json();
        setPokemon(data.results); // Actualizar el estado con los resultados obtenidos
      } catch (error) {
        setError(error.message); // Actualizar el estado de error
      }
    };

    obtenerPokemon(); // Ejecutar la función de obtención de Pokémon
  }, []); // El array de dependencias vacío [] asegura que el efecto solo se ejecute una vez al montar

  if (error) {
    return <p>Error: {error}</p>; // Mostrar mensaje de error si ocurrió un error en la obtención de datos
  }

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
