class Winner {
  static #getMaxPosition(raceResult) {
    const sortedCarPosition = Object.values(raceResult).sort((a, b) => {
      return a.length - b.length;
    });
    return sortedCarPosition.at(-1).length;
  }

  static determineWinner(raceResult) {
    const maxPosition = this.#getMaxPosition(raceResult);
    const winnerList = [];
    for (const [carName, carPosition] of Object.entries(raceResult)) {
      if (maxPosition === carPosition.length) {
        winnerList.push(carName);
      }
    }
    return winnerList;
  }
}
export default Winner;
