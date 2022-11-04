import React, { useState } from "react";

const initialContext = {
  management: [
    { user: "crupier", pass: "crupierpass" },
    { user: "manager", pass: "managerpass" },
  ],
  users: [
    { user: "Carlos", bets: [500, 250], points: 1250 },
    { user: "Juan", bets: [1000, 2500], points: 4000 },
    { user: "Pedro", bets: [100, 150], points: 552 },
  ],
};

const useInitialData = () => {
  const [users, setUsers] = useState(initialContext.users);
  const management = initialContext.management;

  const handleUsers = (newUsers) => {
    setUsers(newUsers);
  };

  return { users, handleUsers, management };
};

export default useInitialData;
