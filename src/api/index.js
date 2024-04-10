const getUsers = (count) =>
  fetch(
    `https://randomuser.me/api/?&results=${count}&seed=ONL-JS-PFE2023-2&page=1`
  ).then((response) => response.json());
export default getUsers;
