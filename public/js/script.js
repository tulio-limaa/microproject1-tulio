document.getElementById('fetchButton').addEventListener('click', fetchData);

// Define the async function that fetches data from the JSON file
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data/data.json');
        const data = await response.json();

        const movieInfoDiv = document.getElementById('movieInfo');
        movieInfoDiv.innerHTML = '';  // Clear previous data

        // Loop through each movie in the fetched data
        data.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Release Year: ${movie.year}</p>
                <p>Genre: ${movie.genre}</p>
            `;
            movieInfoDiv.appendChild(movieDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
