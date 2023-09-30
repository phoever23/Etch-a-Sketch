const container = document.querySelector(".container");

// a function to create n * n square grid with 640px wide
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const smallContainer = document.createElement("div");   
        smallContainer.classList.add("small-container");
        container.appendChild(smallContainer);
    }
    const smallContainers = document.querySelectorAll(".small-container");
    smallContainers.forEach(smallContainer => {for (let j = 0; j < n; j++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.height = `${640/n-2}px`;
    grid.style.width = `${640/n-2}px`;
    smallContainer.appendChild(grid);
}    
});    
}

// change the background color to black when hovering on the div
function changeBackground(e) {
    e.target.classList.add("grid-hover")
}

function changeGrid(){
    number = parseInt(prompt("Enter the number of squares per side for the new grid (less than 100)"));
    while (number < 0 || number > 100) {
        number = parseInt(prompt("Invalid number. Enter again:"));
    }
    const smallContainers = document.querySelectorAll(".small-container");
    smallContainers.forEach(s => {s.remove()        
    });

    createGrid(number);
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {grid.addEventListener("mouseover",changeBackground)    
});

    
}

let number = 16;
createGrid(number);

const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {grid.addEventListener("mouseover",changeBackground)    
});

const button = document.querySelector("button");

button.addEventListener("click",changeGrid)
