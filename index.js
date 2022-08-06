let container = document.getElementById("container")
container.style['height'] = '100%'
container.style['width'] = '100%'
for(i=0; i < 16; ++i)
{
    let cellRow = document.createElement("div")
    cellRow.classList.add("cellRow")
    let height = Math.ceil(parseInt(container.style['width'])/16).toString()
    cellRow.style['height'] = height
    cellRow.style['width'] = container.style['width']
    for(j=0; j < 16; ++j)
    {
        let cell = document.createElement("div")
        cell.classList.add("cell")
        cell.style['height'] = cellRow.style['height']
        let width = Math.ceil(parseInt(cellRow.style['width'])/16).toString()
        cell.style['width'] = width
        cellRow.appendChild(cell)
    }
    container.appendChild(cellRow)
}