const inventory = [];

class colorItem {
    constructor(name, color, price) {
        this.name = name;
        this.color = color,
        this.price = price
        this.addToInventory()
    }

    addToInventory () {
        inventory.push(this)
    }
}

new colorItem('Lime Green', 'green', 14.99)
new colorItem('Medium Brown', 'brown', 11.14)
new colorItem('Royal Blue', 'blue', 22.99)
new colorItem('Solid Black', 'black', 4.99)
new colorItem('Solid Cyan', 'cyan', 8.22)
new colorItem('Solid Purple', 'purple', 13.42)
new colorItem('Solid Red', 'red', 21.98)
new colorItem('Solid White', 'white', 21.98)
new colorItem('Solid Yellow', 'yellow', 14.99)



inventory.forEach(item => console.log(item.color))




let indvSquareList = [...(document.getElementsByClassName("indv-color"))]

indvSquareList.forEach(element => {
    color = element.id;
    element.style.backgroundColor = color;
    //console.log(element.id)
    addHover(element);
})

function addHover (element) {
    element.addEventListener("mouseover", (event) => {
       event.target.style.opacity = "0.2"
       let label = document.createElement("label");
       let itemInfo = inventory.filter(item => item.color == element.id)
       label.classList.add("color-label")
       label.textContent = itemInfo[0].name;
       //console.log(itemInfo[0].name)
       element.appendChild(label);
        showItemInfo(element, itemInfo)
    })

    element.addEventListener("mouseout", (event) => {
        event.target.style.opacity = "1.0"
        element.removeChild(element.firstChild)
    })
}

function showItemInfo (element, itemInfo) {
    const infoDisplay = document.querySelector("#info-display");

    infoDisplay.innerHTML = '';

    let space = document.createElement("br")
    let colorLabel = document.createElement("label")
    colorLabel.textContent = itemInfo[0].name
    let priceLabel = document.createElement("label")
    priceLabel.textContent = "$"+itemInfo[0].price

    infoDisplay.appendChild(colorLabel)
    infoDisplay.appendChild(space)
    infoDisplay.appendChild(priceLabel)
}
