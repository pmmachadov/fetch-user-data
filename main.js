async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {
                Accept: "application.json"
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("An error occurred while fetching user data:", error);
        return [];
    }
}

async function setup() {
    let allUsers = await getUsers();

    if (!Array.isArray(allUsers)) {
        console.error('Expected an array of users, got:', allUsers);
        return;
    }


    let html = allUsers.map(user => {
        return `<div class="user-container">
                <p>${user.name}</p>
                <p>${user.username}</p>
                <p>${user.email}</p>
            </div>`;
    }).join('');


    document.querySelector('.container').innerHTML = html;
}

window.onload = setup;
