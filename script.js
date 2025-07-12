(() => {
  let gridSize = 16;
  const sizeBtn = document.querySelector('button');
  const container = document.querySelector('.container');

  function drawGrid() {
    container.innerHTML = '';
    for (let i = 0, n = gridSize * gridSize; i < n; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `calc(100% / ${gridSize})`;
      cell.style.height = `calc(100% / ${gridSize})`;
      container.appendChild(cell);
    }
  }
  drawGrid();

  sizeBtn.onclick = () => {
    let input;
    while (true) {
      input = prompt('New grid size (max 100): ');
      const num = Number(input);
      if (!isNaN(num) && num > 0 && num <= 100) {
        gridSize = Math.floor(num);
        break;
      }
    }
    drawGrid();
  };

  container.addEventListener('mouseover', (e) => {
    if (e.target.className !== 'cell') return;
    e.target.style.backgroundColor = randomRgb();
  });

  function randomRgb() {
    const r = random256();
    const g = random256();
    const b = random256();
    return `rgb(${r}, ${g}, ${b})`;
  }

  function random256() {
    return Math.floor(Math.random() * 256);
  }
})();
