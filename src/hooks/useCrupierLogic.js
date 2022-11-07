import { useContext } from "react";
import AppContext from "../context/AppContext";

const useCrupierLogic = () => {
  const { users, handleUsers, saveUsers } = useContext(AppContext);

  const handleBetting = (user, betValue) => {
    const date = new Date();
    const hours = date.getHours();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const fullDate = `${day}/${month}/${year}`;

    // Search for the user in the users array
    const foundUser = users.find(
      (usr) => usr.user?.toLowerCase() === user.toLowerCase()
    );
    // If found, add the user's bet
    if (!foundUser) {
      handleUsers([
        ...users,
        {
          user: user,
          points: 1000,
          bets: [{ hours: hours, date: fullDate, bet: betValue }],
        },
      ]);
    } else {
      // If not found, filter old users
      const oldUsers = users.filter(
        (usr) => usr.user?.toLowerCase() !== foundUser.user.toLowerCase()
      );
      // Add the new user with the bet
      const newUser = {
        ...foundUser,
        bets: [
          ...foundUser.bets,
          { hours: hours, date: fullDate, bet: betValue },
        ],
      };
      // Update the users array
      handleUsers([...oldUsers, newUser]);
    }
    // Save in local storage
    saveUsers(users);
  };
  return { handleBetting };
};

export default useCrupierLogic;
