const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");
  
    // Check if a winning game was found
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }
  
  //  usage:
  const winYear = superbowlWin(record);
  console.log(winYear); // This will output the year of the win or undefined if no win is found
  
