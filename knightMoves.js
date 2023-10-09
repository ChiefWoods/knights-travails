function knightMoves(start, target) {
  const possibleMoves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]
  ];

  const queue = [{ position: start, distance: 0 }];

  const visited = new Set();
  visited.add(JSON.stringify(start));

  const parent = {};

  while (queue.length > 0) {
    const { position, distance } = queue.shift();

    if (position[0] === target[0] && position[1] === target[1]) {
      const path = [];
      let currentPos = position;
      while (currentPos) {
        path.unshift(currentPos);
        currentPos = parent[JSON.stringify(currentPos)];
      }
      console.log(`You made it in ${distance} ${distance === 1 ? 'move' : 'moves'}! Here's your path:`);
      path.forEach(position => console.log(JSON.stringify(position)));
    }

    possibleMoves.forEach(move => {
      const [dx, dy] = move;
      const x = position[0] + dx;
      const y = position[1] + dy;
      const newPosition = [x, y];

      if (
        x >= 0 && x <= 7 &&
        y >= 0 && y <= 7 &&
        !visited.has(JSON.stringify(newPosition))
      ) {
        visited.add(JSON.stringify(newPosition));
        parent[JSON.stringify(newPosition)] = position;
        queue.push({ position: newPosition, distance: distance + 1 });
      }
    })
  }
}

knightMoves([0, 0], [1, 2]);
knightMoves([3, 3], [4, 3]);
