document.addEventListener("DOMContentLoaded", function() {


    let    planets = [
        {
            name: "Mercury",
            color: "gray",
            moons: []
        },
        {
            name: "Venus",
            color: "orange",
            moons: []
        },
        {
            name: "Earth",
            color: "blue",
            moons: ["Moon"]
        },
        {
            name: "Mars",
            color: "red",
            moons: ["Phobos", "Deimos"]
        },
        {
            name: "Jupiter",
            color: "tan",
            moons: ["Io", "Europa", "Ganymede", "Callisto"]
        },
        {
            name: "Saturn",
            color: "goldenrod",
            moons: ["Titan", "Rhea", "Enceladus", "Mimas"]
        },
        {
            name: "Uranus",
            color: "lightblue",
            moons: ["Titania", "Oberon", "Umbriel", "Ariel"]
        },
        {
            name: "Neptune",
            color: "blue",
            moons: ["Triton", "Proteus", "Nereid"]
        }
    ];


    let    listPlanets = document.querySelector('.listPlanets');

    planets.forEach(planet => {
    
        let    planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;
        
        if (planet.moons.length > 0) {
            planet.moons.forEach(moon => {
            
                let    moonDiv = document.createElement('div');
                moonDiv.classList.add('moon');
                moonDiv.textContent = moon;
                planetDiv.appendChild(moonDiv);
            });
        }

        listPlanets.appendChild(planetDiv);
    });
});
