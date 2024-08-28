import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CatContainer from "./components/CatContainer";

function App() {
  const [cats, setCats] = useState([
    {
      name: "Benito",
      bio: "Dormilón y chiquito",
      picture:
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  return (
    <>
      <main>
        <nav>Gato lista 9000</nav>

        {cats.map((cat, i) => {
          return (
            <CatContainer
              key={i}
              name={cat.name}
              bio={cat.bio}
              picture={cat.picture}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
