import '../styles/menu.css';
import fishCurryImg from '../imgs/menu_items/fish_curry_rice.png';
import prawnKoliwadaImg from '../imgs/menu_items/prawn_koliwada.jpg';
import solkadiImg from '../imgs/menu_items/solkadi.png';

const createMenuPage = () => {
    const menuPage = document.createElement('div');
    menuPage.classList.add('page');
    menuPage.classList.add('menu');
    document.body.appendChild(menuPage);
    createMenuItems();    
}

const createItem= (item) => {
    const menuPage = document.querySelector('.menu');
    //creating DOM elements
    const itemSlot = document.createElement('div');
    const itemImg = document.createElement('img');
    const itemName = document.createElement('div');
    const itemDesc = document.createElement('div');

    //adding classes
    itemSlot.classList.add('item');
    itemImg.classList.add('item-img');
    itemName.classList.add('name');
    itemDesc.classList.add('desc');

    //adding content
    itemImg.src=item.imgSrc;
    itemName.textContent = item.name;
    itemDesc.textContent = item.description;

    //appending
    itemSlot.append(itemImg,itemName,itemDesc);
    menuPage.appendChild(itemSlot);
}

const createMenuItems = () => {
    //Edit menu object to add more items!
    const menu = [{
            name:"Prawn Koliwada",
            description:"Prawn Koliwada is a Konkan-style deep-fried prawn dish that packs a punch of flavors. Marinated in a spicy blend of red chili, garlic, ginger, and other spices, the prawns are coated in a crispy gram flour batter before being deep-fried to perfection. Served with a zesty mint-coriander chutney, this dish is a tantalizing treat for seafood lovers seeking a crunchy and flavorful delight.",
            imgSrc:prawnKoliwadaImg
        },
        {
            name:"Fish curry rice",
            description:"A Konkan classic, Fish Curry Rice is a heartwarming dish that captures the essence of coastal cuisine. Fresh catch-of-the-day fish is simmered in a rich and flavorful coconut-based curry, infused with aromatic spices like mustard seeds, fenugreek, and curry leaves. Served with steamed rice, this dish embodies the traditional flavors of Konkan coastal homes.",
            imgSrc:fishCurryImg
        },
        {
            name:"Solkadi",
            description:"Solkadi is a refreshing and tangy Konkan specialty drink made with kokum (Garcinia indica) and coconut milk. It has a beautiful pink color and is known for its unique blend of sweet, sour, and spicy flavors. This cooling beverage is perfect to kickstart your meal, offering a delightful contrast to the bold and spicy Konkan dishes.",
            imgSrc:solkadiImg
        }
    ];
    //Creating items
    menu.forEach(item => {
        createItem(item);
    });
}

export {createMenuPage};