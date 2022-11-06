import { useState } from "react";

const initialContext = {
  management: [
    { user: "crupier", pass: "crupierpass" },
    { user: "manager", pass: "managerpass" },
  ],
  users: [
    {
      user: "Carlos",
      bets: [
        { day: 17, hours: 10, date: "17/5/2022", bet: 500 },
        { day: 17, hours: 11, date: "17/5/2022", bet: 250 },
      ],
      points: 1250,
    },
    {
      user: "Juan",
      bets: [
        { day: 10, hours: 14, date: "10/4/2022", bet: 1000 },
        { day: 26, hours: 22, date: "26/9/2022", bet: 2500 },
      ],
      points: 4000,
    },
    {
      user: "Pedro",
      bets: [
        { day: 8, hours: 13, date: "8/7/2022", bet: 100 },
        { day: 1, hours: 19, date: "1/8/2022", bet: 150 },
      ],
      points: 552,
    },
  ],
};

const saveUsers = (users) => {
  window.localStorage.setItem("users", JSON.stringify(users));
};

const getUsers = () => {
  const usersStoraged = window.localStorage.getItem("users");
  return usersStoraged ? JSON.parse(usersStoraged) : initialContext.users;
};

const useInitialData = () => {
  const [users, setUsers] = useState(getUsers());
  const management = initialContext.management;

  const handleUsers = (newUsers) => {
    setUsers(newUsers);
  };

  return { users, handleUsers, management, saveUsers };
};

export default useInitialData;
