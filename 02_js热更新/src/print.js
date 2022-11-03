export default function () {
    let div = document.createElement('div')
    div.setAttribute('id', 'number')
    div.innerText = '1'
    div.addEventListener('click', () => {
        div.innerText = +div.innerText + 1
    })
    document.body.appendChild(div)
}
