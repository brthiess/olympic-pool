let users = [];
export default {
  users,
};

export const loadUsers = () => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((json) => {
      users.push(...json.users);
    });
};
