const container = document.querySelector(".container");

// create 16 small containers vertically
for (let i = 0; i < 16; i++) {   
    const smallContainer = document.createElement("div");
    smallContainer.classList.add("small-container");
    container.appendChild(smallContainer);
}

// create 16 grids inside each small container horizontally
const smallContainers = document.querySelectorAll(".small-container");
smallContainers.forEach(smallContainer => {for (let j = 0; j < 16; j++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    smallContainer.appendChild(grid);
}    
});

