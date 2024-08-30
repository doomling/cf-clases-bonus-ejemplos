import React, { useState } from "react";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSearch = async () => {
    if (pokemonName.trim() === "") {
      setError("Por favor, ingresa un nombre de Pokémon.");
      setPokemonData(null);
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const data = await response.json();
      setPokemonData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    }
  };

  return (
    <div>
      <h1>Buscar Pokémon</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={handleInputChange}
        placeholder="Ingresa el nombre del Pokémon"
      />
      <button onClick={handleSearch}>Buscar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Altura: {pokemonData.height}</p>
          <p>Peso: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
