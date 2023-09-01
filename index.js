let Items = document.getElementById('Items')

let menuItems = [{
        id: 1,
        type: ['BREAKFAST', 'DINNER', 'SNACKS', 'ALL'],
        Title: 'CupCake',
        price: 21.20,
        ingredients: ['juice fruid', 'Checken', 'Cherry', 'Vegetable', 'Milk', 'Potato', 'Chilli', 'Sesame', 'Tomato'],
        imagUrl: 'https://res.cloudinary.com/dspbnevuo/image/upload/v1693407201/menu_1_rrjd4y.jpg'
    },
    {
        id: 2,
        type: ['LUNCH', 'COFFEE', 'ALL'],
        Title: 'CupCake',
        price: 22.80,
        ingredients: ['juice fruid', 'Checken', 'Cherry', 'Vegetable', 'Milk', 'Potato', 'Chilli', 'Sesame', 'Tomato'],
        imagUrl: 'https://res.cloudinary.com/dspbnevuo/image/upload/v1693407202/menu_3_hpdbjk.jpg'
    },
    {
        id: 3,
        type: ['BREAKFAST', 'DINNER', 'SNACKS', 'ALL'],
        Title: 'CupCake',
        price: 23.00,
        ingredients: ['juice fruid', 'Checken', 'Cherry', 'Vegetable', 'Milk', 'Potato', 'Chilli', 'Sesame', 'Tomato'],
        imagUrl: 'https://res.cloudinary.com/dspbnevuo/image/upload/v1693407202/menu_4_dxcotf.jpg'
    },
    {
        id: 4,
        type: ['LUNCH', 'COFFEE', 'ALL'],
        Title: 'CupCake',
        price: 23.00,
        ingredients: ['juice fruid', 'Checken', 'Cherry', 'Vegetable', 'Milk', 'Potato', 'Chilli', 'Sesame', 'Tomato'],
        imagUrl: 'https://res.cloudinary.com/dspbnevuo/image/upload/v1693407202/menu_2_zxq20w.jpg'
    },
    {
        id: 5,
        type: ['BREAKFAST', 'DINNER', 'SNACKS', 'ALL'],
        Title: 'CupCake',
        price: 23.00,
        ingredients: ['juice fruid', 'Checken', 'Cherry', 'Vegetable', 'Milk', 'Potato', 'Chilli', 'Sesame', 'Tomato'],
        imagUrl: 'https://res.cloudinary.com/dspbnevuo/image/upload/v1693407202/menu_5_ukkjew.jpg'
    },
    {
        id: 6,
        type: ['LUNCH', 'COFFEE', 'ALL'],
        Title: 'CupCake',
        price: 23.00,
        ingredients: ['juice fruid', 'Checken', 'Cherry', 'Vegetable', 'Milk', 'Potato', 'Chilli', 'Sesame', 'Tomato'],
        imagUrl: 'https://res.cloudinary.com/dspbnevuo/image/upload/v1693407202/menu_6_yjj59g.jpg'
    },

]





function createItem(item) {
    const listitem = document.createElement("li")
    listitem.classList.add('col-5', "d-flex", "flex-row", "justify-content-evenly", 'align-item-center', "item");
    const imageItem = document.createElement("img");
    imageItem.classList.add("item-image");
    imageItem.src = item.imagUrl
    listitem.appendChild(imageItem)

    const divElement = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = item.Title
    heading.classList.add('item-heading');
    divElement.appendChild(heading);

    const subList = document.createElement("ul");
    subList.classList.add("d-flex", "flex-row", "justify-content-between", 'flex-wrap', 'list-unstyled', "ingredients")

    for (let each of item.ingredients) {
        const subLiElement = document.createElement('li');
        subLiElement.textContent = '-' + each;
        subLiElement.style.color = "black"
        subList.appendChild(subLiElement);
    }
    divElement.appendChild(subList);
    listitem.appendChild(divElement);
    const price = document.createElement('p')

    price.classList.add('price')
    price.textContent = '$' + item.price
    listitem.appendChild(price)


    return listitem
}

function fecthItems(keyword) {
    let idList = [];
    for (let each of menuItems) {
        if (each.ingredients.includes(keyword)) {
            idList.push(each.id);
        }
    }
    return idList;
}
for (let each of menuItems) {
    Items.appendChild(createItem(each))

}

function changeManu(keyword) {
    const testimonials = Array.from(
        document.getElementsByClassName("item")
    );
    const selectedItems = fecthItems(keyword)
    for (let testimonial of testimonials) {
        if (selectedItems.id === testimonial.id) {
            testimonial.style.display = "block";
        } else {
            testimonial.style.display = "none";
        }
    }

}



function onChangeMenu(keyword) {

    changeManu(keyword)
}