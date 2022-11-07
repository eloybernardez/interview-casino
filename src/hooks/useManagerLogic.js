const useManagerLogic = () => {
  const betsAccumulation = (user) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const betDate = (bet) => {
      const stringDates = bet.date.split("/");
      const day = Number(stringDates[0]);
      const month = Number(stringDates[1]);
      const year = Number(stringDates[2]);
      return { day, month, year };
    };

    const hoursDifference = (bet) => Math.abs(bet.hours - 7);
    const daysDifference = (bet) => Math.abs(day - betDate(bet).day);
    const monthDifference = (bet) => Math.abs(month - betDate(bet).month);

    // Filter the bets of the current day since 7am to 7am of the next day
    const currentDayBets = user.bets.filter((bet) => {
      if (
        daysDifference(bet) <= 1 &&
        monthDifference(bet) === 0 &&
        bet.hours >= 7 &&
        hoursDifference(bet) <= 24 &&
        hoursDifference(bet) >= 0
      ) {
        return bet;
      }
    });

    // Sum the bets of the current day
    const sum = currentDayBets.reduce((acc, bet) => acc + bet.bet, 0);
    console.log(sum);

    return sum || 0;
  };

  const sumBets = (users) =>
    users.reduce((acc, user) => acc + betsAccumulation(user), 0);

  return { sumBets };
};

export default useManagerLogic;
