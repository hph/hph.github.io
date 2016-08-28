'use strict';

/**
 * Conway's Game of Life
 */

export default class Game {
  constructor () {
    this.size = 3;
    this.margin = 1;
    this.boxSize = this.size + this.margin;
    this.canvas = document.querySelector('canvas');
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.width / this.boxSize);
    this.rows = Math.floor(this.height / this.boxSize);
    this.context = this.canvas.getContext('2d');
    this.colony = this.getRandomInitialColony();
    this.render = this.render.bind(this);
    window.onmousemove = this.onMouseMove.bind(this);
    window.requestAnimationFrame(this.render);
  }

  addCell (x, y) {
    if (Math.abs(x - this.mouseX) < 20 && Math.abs(y - this.mouseY) < 20) {
      this.context.fillStyle = 'rgba(88,136,176,0.7)';
    } else {
      this.context.fillStyle = 'rgba(255,0,0,0.3';
    }
    this.context.fillRect(x, y, this.size, this.size);
  }

  removeCell (x, y) {
    this.context.clearRect(x, y, this.size, this.size);
  }

  getEmptyColony () {
    return Array(this.columns).fill().map(() => Array(this.rows).fill(0));
  }

  getRandomInitialColony (chance = 0.25) {
    return this.getEmptyColony().map(column => {
      return column.map(cell => Math.random() < chance ? 1 : 0);
    });
  }

  neighbours (x, y) {
    const fx = x === 0 ? this.columns - 1 : x - 1;
    const lx = x === this.columns - 1 ? 0 : x + 1;
    const fy = y === 0 ? this.rows - 1 : y - 1;
    const ly = y === this.rows - 1 ? 0 : y + 1;

    const first = this.colony[fx];
    const second = this.colony[x];
    const third = this.colony[lx];

    return (
      first[fy] + first[y] + first[ly] +
      second[fy] + second[ly] +
      third[fy] + third[y] + third[ly]
    );
  }

  render () {
    if (!document.hasFocus()) {
      return window.requestAnimationFrame(this.render);
    }

    const nextColony = [];
    this.colony.forEach((column, i) => {
      const nextColumn = [];
      column.forEach((cell, j) => {
        const neighbours = this.neighbours(i, j);

        let nextCell = 0;
        if (neighbours === 3 || cell && neighbours === 2) {
          nextCell = 1;
        }
        nextColumn[j] = nextCell;

        if (!cell && nextCell) {
          this.addCell(i * this.boxSize, j * this.boxSize);
        } else if (cell && !nextCell) {
          this.removeCell(i * this.boxSize, j * this.boxSize);
        }
      });
      nextColony.push(nextColumn);
    });
    this.colony = nextColony;
    return window.requestAnimationFrame(this.render);
  }

  onMouseMove (e) {
    const { clientX, clientY } = e;
    const x = Math.floor(clientX / this.boxSize);
    const y = Math.floor(clientY / this.boxSize);
    this.mouseX = clientX - (clientX % this.boxSize);
    this.mouseY = clientY - (clientY % this.boxSize);
    if (!this.colony[x][y]) {
      this.colony[x][y] = 1;
      this.addCell(this.mouseX, this.mouseY);
    }
  }
}
