import { setBackground,tabBar } from "./pages";
import { createHomePage } from "./pages/home";
import { createMenuPage } from "./pages/menu";
import { createContactPage } from "./pages/contact";
import './styles/style.css'



setBackground();
tabBar();
document.querySelector('.Home').classList.add('tab-selected');
createHomePage();

const removePage = () => {
    let pages=Array.from(document.getElementsByClassName('page'));
    pages.forEach(page => {
        page.remove();
    });
}

const changePage = (tab) => {
    let name= tab.textContent;
    removePage();
    if(name=="Home") {
        createHomePage();
    }
    else if(name=="Menu") {
        createMenuPage();
    }
    else if(name=="Contact") {
        createContactPage();
    }

}

export {changePage};