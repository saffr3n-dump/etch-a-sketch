(() => {
  const GRID_SIZE = 16;
  const container = document.querySelector('.container');
  for (let i = 0, n = GRID_SIZE * GRID_SIZE; i < n; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }

  container.addEventListener('mouseover', (e) => {
    if (e.target.className !== 'cell') return;
    e.target.style.backgroundColor = 'black';
  });
})();
