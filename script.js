const apiURL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching the API data:', error);
    }
}

function displayData(data) {
    const container = document.getElementById('data-container');

    data.forEach(item => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        `;

        container.appendChild(postElement);
    });
}

window.onload = fetchData;