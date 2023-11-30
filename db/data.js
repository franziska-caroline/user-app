const users = [
  {
    id: "1",
    firstName: "Jonas",
    lastName: "Wenck",
    email: "jonas.wenck@example.com",
    age: 29,
    createdAt: new Date("2023-11-30"),
  },
  {
    id: "2",
    firstName: "Lina",
    lastName: "Habich",
    email: "lina.habich@gmail.com",
    age: 26,
    createdAt: new Date("2023-11-30"),
  },
  {
    id: "3",
    firstName: "Marianne",
    lastName: "Franke",
    email: "marianne.franke@gmail.com",
    age: 27,
    createdAt: new Date("2023-11-30"),
  },
  {
    id: "4",
    firstName: "Pia",
    lastName: "Hoffman",
    email: "pia.hoffmann@gmail.com",
    age: 28,
    createdAt: new Date("2023-11-30"),
  },
  {
    id: "5",
    firstName: "Felix",
    lastName: "Reinhold",
    email: "felix.reinhold@gmail.com",
    age: 29,
    createdAt: new Date("2023-11-30"),
  },
];

export function getAllUsers() {
  return users;
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}