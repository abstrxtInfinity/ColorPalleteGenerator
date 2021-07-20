

for (let i = 0; i <= 99; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    // box.id = i
    document.querySelector('.container').appendChild(box)

}


const btn = document.querySelector('.btn')
const randomColorBlock = document.querySelectorAll('.box')

function RandomHexColorCode() {
    var chars = "0123456789abcdef"
    var colorLength = 6;
    var color = ""

    for (var i = 0; i < colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColor, randomColor + 1)
    }
    return "#" + color
}
addColor()
function addColor() {
    randomColorBlock.forEach(e => {
        var newColor = RandomHexColorCode()
        e.style.backgroundColor = newColor
        e.style.boxShadow = `5px 5px 10px #cbcbcb, -2px -2px 5px ${newColor}`
        e.innerHTML = `<h4>${newColor}</h4>`
    })
}



// function copyFunction() {

//     randomColorBlock.forEach(e => {
//         e.addEventListener("click", () => {
//             var copyText = e.innerHTML
//             copyText.select()
//             copyText.setSelectionRange(0, 99999)
//             document.execCommand("copy")
//             alert("Copied the text: " + copyText.value)
//         })
//     })
//     /* Get the text field */

// }

// copyFunction()