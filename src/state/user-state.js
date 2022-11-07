let users = [];
let currentUser = { loaded: false };
export default {
  users,
  currentUser,
};

export const loadUsers = () => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((json) => {
      users.push(...json.users);
    });
};

export const loadCurrentUser = () => {
  fetch("/api/current-user")
    .then((res) => res.json())
    .then((json) => {
      Object.assign(currentUser, json.currentUser);
      currentUser.loaded = true;
    });
};
