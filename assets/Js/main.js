async function getUsers (){

const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
const users = await response.json();
const result = users.map(
    function (users) {
        return `
        <div class="user">
        <h2>${users.name}</h2>
        <p>${users.email}</p>
        <p>${users.address.street}, ${users.address.suite}, ${users.address.city}, ${users.address.zipcode}</p>
        <p>Phone: ${users.phone}</p>
        <p>Website: <a href="${users.website}">${users.website}</a></p>
        </div>`; 
            
    }
).join(' ');

document.querySelector(".users").innerHTML = result;

}

getUsers();
