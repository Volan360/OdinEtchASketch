row_counts = [10,16,18]
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
            cell.style['height'] = cell_size.toString() + 'px'
            cell.style['width'] = cell_size.toString() + 'px'
            grid.appendChild(cell)
        }
    }
}
make_grid(720, 18)
let size_buttons = document.getElementById("size_buttons")
for(i of row_counts){
    let button = document.createElement("button")
    button.textContent = i.toString() + 'x' + i.toString()
    button.onclick = () => make_grid(720, parseInt(button.textContent))
    size_buttons.appendChild(button)
}

// container.style['width'] = i.toString() + 'px'
// container.style['height'] = j.toString() + 'px'