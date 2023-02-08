
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
const tool = document.getElementById('tools');
const block = document.getElementById('blocks');

const inventoryBlocks = {
    grass: 0,
    stone: 0,
    wood: 0,
    leaves: 0
};

let currentTool = '';
let currentBlock = '';

tool.addEventListener('click', function (event) {
    const toolClicked = event.target.id;
    console.log(toolClicked);
    if (toolClicked === 'shovel') {
        currentTool = 'shovel';
    }
    else if (toolClicked === 'axe') {
        currentTool = 'axe';
    }
    else if (toolClicked === 'pickaxe') {
        currentTool = 'pickaxe';
    }
});

block.addEventListener('click', function (event) {
    const blockClicked = event.target.id;
    console.log(blockClicked);
    if (blockClicked === 'grass') {
        currentBlock = 'grass';
    }
    else if (blockClicked === 'stone') {
        currentBlock = 'stone';
    }
    else if (blockClicked === 'wood') {
        currentBlock = 'wood';
    }
    else if (blockClicked === 'leaves') {
        currentBlock = 'leaves';
    }
});

grid.addEventListener('click', function (event) {
    console.log(event);
    let blockClicked = event.target;
    if (blockClicked.className === 'grass') {
        if (currentTool === 'shovel') {
            blockClicked.className = 'empty';
            inventoryBlocks.grass++;
        }
    }
    else if (blockClicked.className === 'stone') {
        if (currentTool === 'pickaxe') {
            blockClicked.className = 'empty';
            inventoryBlocks.stone++;
        }
    }
    else if (blockClicked.className === 'wood') {
        if (currentTool === 'axe') {
            blockClicked.className = 'empty';
            inventoryBlocks.wood++;
        }
    }
    else if (blockClicked.className === 'leaves') {
        if (currentTool === 'axe') {
            blockClicked.className = 'empty';
            inventoryBlocks.leaves++;
        }
    }
    else if (blockClicked.className === 'empty') {
        if (currentBlock === 'grass') {
            if (inventoryBlocks.grass > 0) {
                inventoryBlocks.grass--;
                blockClicked.className = 'grass';
            }
        }
        else if (currentBlock === 'stone') {
            if (inventoryBlocks.stone > 0) {
                inventoryBlocks.stone--;
                blockClicked.className = 'stone';
            }
        }
        else if (currentBlock === 'wood') {
            if (inventoryBlocks.wood > 0) {
                inventoryBlocks.wood--;
                blockClicked.className = 'wood';
            }
        }
        else if (currentBlock === 'leaves') {
            if (inventoryBlocks.leaves > 0) {
                inventoryBlocks.leaves--;
                blockClicked.className = 'leaves';
            }
        }
    }
});

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
