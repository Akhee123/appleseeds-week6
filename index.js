
// Grid array
// 0. Nothing
// 1. Grass
// 2. Stone
// 3. Wood
// 4. Leaves
const world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const grid = document.getElementById('grid');

const inventoryBlocks = {
    grass: 0,
    stone: 0,
    wood: 0,
    leaves: 0
}

const inventoryTools = {

}

// Generate World
function createWorld(arr, grid) {

    // Making a grid
    grid.style.setProperty('--grid-rows', arr.length);
    grid.style.setProperty('--grid-cols', arr[0].length);

    // Populating the grid
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[0].length; column++) {
            let block = document.createElement('div');
            switch (arr[row][column]) {
                case 0:
                    block.setAttribute('class', 'empty');
                    break;
                case 1:
                    block.setAttribute('class', 'grass');
                    break;
                case 2:
                    block.setAttribute('class', 'stone');
                    break;
                case 3:
                    block.setAttribute('class', 'wood');
                    break;
                case 4:
                    block.setAttribute('class', 'leaves');
                    break;
                default:
                    break;
            }
            grid.appendChild(block);
        }
    }
}

createWorld(world, grid);
