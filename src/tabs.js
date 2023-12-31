import { changePage } from ".";
const tab = (tabGroup,name)=> {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.classList.add(name);
    tab.textContent=name;
    tabGroup.appendChild(tab);
}

const underline = (tab,tabs)=> {
    tabs.forEach(tabremove =>{
        tabremove.classList.remove('tab-selected')
    })
    tab.classList.add('tab-selected');
}

const addOnClick = () => {
    const tabs=Array.from(document.getElementsByClassName('tab'));
    tabs.forEach(tab=>{
        tab.addEventListener('click', ()=>{
            underline(tab,tabs);
            changePage(tab);
        })
    })
}

const createTabs = (tabbar,names)=> {
    const tabGroup = document.createElement('div');
    tabGroup.classList.add('tabGroup');
    names.forEach(name => {
        tab(tabGroup,name);
    });
    tabbar.appendChild(tabGroup);
    addOnClick();
}


export {createTabs,underline};