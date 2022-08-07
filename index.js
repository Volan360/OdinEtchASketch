row_counts = [10,16,18]

// prevent dragging and dropping
const div = document.querySelector('div')
div.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

div.addEventListener('drop', (e) => {
  e.preventDefault()
})
//check if mouse is down
window.md = 0;  
window.onmousedown = () => {  
  window.md = 1;
  console.log(md)
}  
window.onmouseup = () => {  
  window.md = 0;   
}

//makes the grid and adds cell logic
function make_grid(grid_size, cell_size)
{
    cell_size_with_border = cell_size + 2
    let grid = document.getElementById("grid")
    grid.replaceChildren()
    grid.style['height'] = grid_size.toString() + 'px'
    grid.style['width'] = grid_size.toString() + 'px'
    num_rows = grid.clientHeight / cell_size_with_border
    for(i=0; i < num_rows; ++i)
    {
        for(j=0; j < num_rows; ++j)
        {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            cell.draggable = false
            cell.onmouseover = function (md) {
                if(window.md == 1) {
                    cell.style['background-color'] = 'black'
                }
            }
            cell.style['height'] = cell_size.toString() + 'px'
            cell.style['width'] = cell_size.toString() + 'px'
            grid.appendChild(cell)
        }
    }
}
make_grid(720, 18)

//makes the buttons able to change grid density
let size_buttons = document.getElementById("size_buttons")
for(i of row_counts){
    let button = document.createElement("button")
    button.textContent = i.toString() + 'px'
    button.onclick = () => make_grid(720, parseInt(button.textContent))
    button.classList.add('button-50')
    size_buttons.appendChild(button)
}
