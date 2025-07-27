const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')


function showAll(productArray){
    let myLi = ''
    productArray.forEach( product => {
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
function mapAllItems(){
    const newPrices = menuOptions.map ((product)=>({
        ...product, //Spread Operator
        price: product.price * 0.9,
    }))


    showAll(newPrices)
}

function sumAllItems(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price ,0)

    list.innerHTML = `<li>
    <p>O valor total dos itens é R$ ${totalValue}</p>
    </li>`


}

buttonShowAll.addEventListener('click', () => showAll (menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)