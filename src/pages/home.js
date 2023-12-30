import '../styles/home.css'
const homePage = ()=> {
    const homePage=document.createElement('div');
    homePage.classList.add('home-page');
    document.body.appendChild(homePage);
    addCTA(homePage);
    addInfo(homePage)
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

const addOrderOptions = ()=> {
    const homePage=document.querySelector('.home-page');
    const order = document.createElement('div');
    order.classList.add('order');
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent="Order with";
    const zomato = document.createElement('img');
    const swiggy = document.createElement('img');
    const uberEats = document.createElement('img');
    zomato.src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png";
    uberEats.src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/u36ongiveorvpij36xam";
    swiggy.src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";
    

    //adding to grid
    order.append(text,zomato,swiggy,uberEats);
    homePage.appendChild(order);
}

export {homePage, addOrderOptions};