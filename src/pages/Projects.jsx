import { useEffect, useState } from "react";
import ProjectsCard from "../components/ProjectsCard";

export default function Projects() {
  const arr = [
    {
      name: "CRA Chat App",
      description:
        "Interactive, live messaging app built using React.js, Firebase, and socket.io.",
      image: "./ChatApp.png",
      code: "https://github.com/Fiestaman/ChatApp",
      demo: "https://craca.onrender.com/",
    },
    {
      name: "Pokedex Compendium",
      description:
        "Single page app highlighting information regarding Pokemons, berries, and items in the game series built using React.js.",
      image: "./Pokedex.png",
      code: "https://github.com/Fiestaman/pokedex",
      demo: "https://pokedexcompendium.netlify.app/",
    },
    {
      name: "Blackjack",
      description:
        "Interactive game based on Blackjack or 21 built using HTML, CSS, and Javascript",
      image: "./Blackjack.png",
      code: "https://github.com/Fiestaman/blackjack",
      demo: "https://fiestaman.github.io/blackjack/",
    },
    {
      name: "annson.dev",
      description: "Portfolio website built using React.js.",
      image: "./Portfolio.png",
      code: "https://github.com/Fiestaman/fiestaman.github.io",
      demo: "https://annson.dev/",
    },
    // { name: "", description: "", image: "", code: "", demo: "" },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => setProjects(arr), []);

  const cards = projects.map((card, i) => {
    return <ProjectsCard key={`Card${i}`} card={card} />;
  });

  return (
    <div className="Projects">
      <h1 className="text-5xl mb-4">
        Here are some of the projects that I&apos;ve worked on:
      </h1>
      {cards}
    </div>
  );
}
