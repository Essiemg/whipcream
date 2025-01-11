document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("game-grid");

    const gridSize = 5;
    const blocks = [];
    
    // Generate a random block configuration
    function generateBlocks() {
        grid.innerHTML = ""; // Clear grid
        blocks.length = 0; // Reset block array
        
        // Create grid with some immovable and movable blocks
        for (let i = 0; i < gridSize * gridSize; i++) {
            const block = document.createElement("div");
            block.classList.add("block");

            // Randomly assign some as movable or immovable
            const isMovable = Math.random() > 0.2; // 80% chance of being movable
            if (isMovable) {
                block.classList.add("movable");
            }

            block.innerHTML = isMovable ? "M" : "I";
            block.dataset.index = i;
            blocks.push(block);
            grid.appendChild(block);
        }

        // Place treasure at the end of the grid
        const treasureIndex = gridSize * gridSize - 1;
        blocks[treasureIndex].classList.remove("block");
        blocks[treasureIndex].classList.add("item");
        blocks[treasureIndex].innerHTML = "T";
    }

    // Handle block movement logic
    function moveBlock(index, direction) {
        const block = blocks[index];
        if (!block.classList.contains("movable")) return;

        const newIndex = calculateNewIndex(index, direction);
        if (newIndex !== null && !blocks[newIndex].classList.contains("item")) {
            [blocks[index], blocks[newIndex]] = [blocks[newIndex], blocks[index]];

            // Update DOM
            grid.innerHTML = "";
            blocks.forEach(b => grid.appendChild(b));
        }
    }

    // Calculate new index based on direction of movement
    function calculateNewIndex(index, direction) {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        switch (direction) {
            case "left":
                return col > 0 ? index - 1 : null;
            case "right":
                return col < gridSize - 1 ? index + 1 : null;
            case "up":
                return row > 0 ? index - gridSize : null;
            case "down":
                return row < gridSize - 1 ? index + gridSize : null;
        }
        return null;
    }

    // Add event listener to handle block clicks
    grid.addEventListener("click", function(e) {
        const block = e.target;
        const index = parseInt(block.dataset.index);
        
        if (block.classList.contains("block")) {
            const direction = prompt("Move block (left, right, up, down):");
            moveBlock(index, direction);
        }
    });

    // Reset button
    document.getElementById("reset").addEventListener("click", generateBlocks);

    // Initialize game
    generateBlocks();
});
