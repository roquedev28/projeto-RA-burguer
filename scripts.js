const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll(){
    menuOptions.forEach( product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <P class="item-price">R$ ${product.price}</P>
            </li>
        `
    })
    list.innerHTML = myLi
}





buttonShowAll.addEventListener('click', showAll)