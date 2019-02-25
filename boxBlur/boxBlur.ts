function boxBlur(image: number[][]): number[][] {
  /**
   * @TODO - next Algorithm
   */
  const resolution = [];
  for (let y = 0; y < image.length - 2; y++) {
    const line = [];

    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;
      let count = 0;

      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
          count++;
        }
      }
      line.push(Math.floor(sum / count));
    }
    resolution.push(line);
  }

  return resolution;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
