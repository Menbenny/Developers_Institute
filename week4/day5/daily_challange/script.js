const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const planetColors = [
    "gray", "orange", "blue", "red", "brown", "goldenrod", "lightblue", "darkblue"
];

const moonCounts = [0, 0, 1, 2, 79, 82, 27, 14]; 

const listPlanets = document.querySelector(".listPlanets");

for (let i = 0; i < planets.length; i++) {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planetColors[i];
    planetDiv.textContent = planets[i];
    
    for (let j = 0; j < moonCounts[i]; j++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        moonDiv.style.left = `${20 * (j + 1)}px`; 
        planetDiv.appendChild(moonDiv);
    }
    
    listPlanets.appendChild(planetDiv);
}
