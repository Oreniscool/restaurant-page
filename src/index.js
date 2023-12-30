import { setBackground,tabBar } from "./pages";
import { homePage, addOrderOptions } from "./pages/home";
import './styles/style.css'



setBackground();
tabBar();
document.querySelector('.Home').classList.add('tab-selected');
homePage();
addOrderOptions();
