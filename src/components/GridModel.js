export default {

  generateRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
  },
  
  generateGrids(numGrids, numRowsCols) {
    const grids = [];

    for (let gridIndex = 0; gridIndex < numGrids; gridIndex++) {
      const grid = [];

      for (let rowIndex = 0; rowIndex < numRowsCols; rowIndex++) {
        const row = [];

        for (let colIndex = 0; colIndex < numRowsCols; colIndex++) {
          row.push(this.generateRandomLetter());
        }

        grid.push(row);
      }

      grids.push(grid);
    }

    return grids;
  },
};
