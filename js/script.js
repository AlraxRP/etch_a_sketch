function createGrid(SquarePerSide)
{
    for(let i = 0; i<(SquarePerSide*SquarePerSide); i++)
    {
        const square = document.createElement("div");
            
        square.classList.add("square");

        container.appendChild(square);

        square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "red";
        });
    }
}


const container = document.querySelector("#container");

const btnChangeSize = document.querySelector("#btnChangeSize");

btnChangeSize.addEventListener("click", () => {

    let newSize = prompt("Enter new grid size:",16);

    if(newSize <= 100)
    {
        while(container.firstChild)
        {
            container.removeChild(container.firstChild);
        }

        createGrid(newSize);

        for(let square of container.children)
        {
            square.style.flexBasis = `calc(100% / ${newSize})`;
        }
    }
    else
    {
        alert("Size to big, the grid can be only 100 squares or less per side");
    }

});

createGrid(16);