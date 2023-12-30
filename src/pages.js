import { createTabs } from "./tabs";

const setBackground = ()=>{
    let body = document.querySelector('body');
    body.classList.add('background');
}

const tabBar = ()=> {
    const tabbar = document.createElement('div');
    tabbar.classList.add('tabbar');

    const logo = document.createElement('div');
    logo.textContent="Konkan-on-plate";
    logo.classList.add('logo');

    tabbar.append(logo);
    document.body.append(tabbar);
    createTabs(tabbar,["Home","Menu","Contact"]);
    
}

export{setBackground,tabBar};