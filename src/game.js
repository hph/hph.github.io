'use strict';

/**
 * Conway's Game of Life
 */

export default class Game {
  constructor () {
    this.canvas = document.querySelector('canvas');
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = `rgba(255,0,0,0.3)`;
    this.size = 2;
    this.margin = 1;
    this.boxSize = this.size + this.margin;
    this.cells = this.getInitialCells();
    window.requestAnimationFrame(this.render.bind(this));
  }

  addCell (x, y) {
    this.context.fillRect(x, y, this.size, this.size);
  }

  removeCell (x, y) {
    this.context.clearRect(x, y, this.size, this.size);
  }

  getInitialCells (chance = 0.2) {
    const columns = Math.floor(this.width / (this.size + this.margin));
    const rows = Math.floor(this.height / (this.size + this.margin));
    const cells = [];
    for (let i = 0; i < columns; i++) {
      const column = [];
      for (let j = 0; j < rows; j++) {
        const cell = Math.random() < chance ? 1 : 0;
        column[j] = cell;
      }
      cells.push(column);
    }
    return cells;
  }

  neighbours (x, y) {
    const first = this.cells[x - 1] || [];
    const second = this.cells[x] || [];
    const third = this.cells[x + 1] || [];
    return (
      (first[y - 1] || 0) + (first[y] || 0) + (first[y + 1] || 0) + 
      (second[y - 1] || 0) + (second[y + 1] || 0) + 
      (third[y - 1] || 0) + (third[y] || 0) + (third[y + 1] || 0)
    );
  }

  render () {
    if (!document.hasFocus()) {
      return window.requestAnimationFrame(this.render.bind(this));
    }

    if (!this.previous) {
      this.previous = new Date();
      this.cells.forEach((column, i) => {
        column.forEach((row, j) => {
          if (row) {
            this.addCell(i * this.boxSize, j * this.boxSize);
          } else {
            this.removeCell(i * this.boxSize, j * this.boxSize);
          }
        });
      });
      return window.requestAnimationFrame(this.render.bind(this));
    }

    const now = new Date();
    const delta = now - this.previous;
    let nextCells = [];
    if (delta > 80) {
      this.previous = now;
      this.cells.forEach((column, i) => {
        nextCells[i] = [];
        column.forEach((row, j) => {
          const cell = this.cells[i][j];
          const neighbours = this.neighbours(i, j);
  
          let newCell = 0;
          if (neighbours === 3 || cell && neighbours === 2) {
            newCell = 1;
          }
          nextCells[i][j] = newCell;

          if (!cell && newCell) {
            this.addCell(i * this.boxSize, j * this.boxSize);
          } else if (cell && !newCell) {
            this.removeCell(i * this.boxSize, j * this.boxSize);
          }
        });
      });
      this.cells = nextCells;
    }
    window.requestAnimationFrame(this.render.bind(this));
  }
}
