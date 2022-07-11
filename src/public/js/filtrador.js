const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");

let users = [];

window.addEventListener("DOMContentLoaded", async () => {
  userList.innerHTML = `<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;

  const data = await loadUsers();
  users = data.data;
  renderUsers(users);
});

async function loadUsers() {
  const response = await fetch(
    "https://fakerapi.it/api/v1/users?_quantity=1000"
  );
  return await response.json();
}
input.addEventListener("keyup", (e) => {
  const newUsers = users.filter((user) =>
    `${user.firstname.toLowerCase()}${user.lastname.toLowerCase()}`.includes(
      input.value.toLowerCase()
    )
  );
  renderUsers(newUsers);
});

const createUsersItems = (users) =>
  users
    .map((user) => `<tr><td>${user.firstname} ${user.lastname}</td></tr>`)
    .join(" ");

function renderUsers(users) {
  const itemsString = createUsersItems(users);
  userList.innerHTML = itemsString;
}
