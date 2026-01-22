function createGrid(SquarePerSide)
{
    for(let i = 0; i<(SquarePerSide*SquarePerSide); i++)
    {
        const square = document.createElement("div");
            
        square.classList.add("square");

        container.appendChild(square);

        square.addEventListener("mouseenter", () => {

            const currentColor = window.getComputedStyle(square).backgroundColor;
            
            if(currentColor === "rgba(0, 0, 0, 0)")
            {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                square.style.backgroundColor = `rgb(${r},${g},${b})`;
                square.style.opacity = "10%";
            }
            else
            {
                const strCurrentOpacity = window.getComputedStyle(square).opacity;
                const currentOpacity = parseFloat(strCurrentOpacity);
                if(currentOpacity < 1)
                {
                    const newOpacity = (currentOpacity + 0.1).toFixed(1);
                    square.style.opacity = `${newOpacity}`;
                    console.log(newOpacity);
                }
            }
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