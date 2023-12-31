import '../styles/home.css'
import zomatoImg from '../imgs/delivery_partners/Zomato_logo.png'
import swiggyImg from '../imgs/delivery_partners/Swiggy_logo.png'
import uberEatsImg from '../imgs/delivery_partners/uber-eats-logo.png'

const createHomePage = () => {
    const homePage=document.createElement('div');
    homePage.classList.add('page');
    homePage.classList.add('home');
    document.body.appendChild(homePage);
    addCTA(homePage);
    addInfo(homePage);
    addOrderOptions(homePage);
}

const addCTA = (homePage)=> {
    const CTA = document.createElement('div');
    CTA.textContent="Get the best Konkan food here!";
    CTA.classList.add('CTA');
    homePage.appendChild(CTA);
}

const addInfo = (homePage)=> {
    const info =document.createElement('div');
    info.textContent="With the best chefs in konkan cuisine at our disposal you will be completely enthralled by our delicacies!";
    info.classList.add('info');
    homePage.appendChild(info);
}

const addOrderOptions = (homePage)=> {
    const order = document.createElement('div');
    order.classList.add('order');
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent="Order with";
    const zomato = document.createElement('img');
    const swiggy = document.createElement('img');
    const uberEats = document.createElement('img');
    zomato.src=zomatoImg;
    uberEats.src=uberEatsImg;
    swiggy.src=swiggyImg;
    

    //adding to grid
    order.append(text,zomato,swiggy,uberEats);
    homePage.appendChild(order);
}

export {createHomePage};