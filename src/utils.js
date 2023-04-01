//Add active to the element selected
//active Nav = elemenet that becomes active i.e. Home  container = id of the element that contains all navigation items
const changeActive = (activeNav, container)=>{
    const navContainer = document.getElementById(container).getElementsByTagName("li");
    const selectedItem = document.getElementById(`Nav${activeNav}`);
    for(let i = 0; i < navContainer.length; i++){
        navContainer[i].classList.remove('Active')
    }
    selectedItem.classList.add('Active');
}

// Scroll to the element passed
const scrollToEl = (el, setStatus, footer) =>{
    //if footer value is true, element will be passed as it is
    const selected = footer ? el : el.target.dataset.nav;
    //setStatus is passed function that can change the useStatus of the navigation
    setStatus && setStatus(selected);
    //Get elememt position
    const elementPosition = document.getElementById(selected).getBoundingClientRect().top;
    //Scroll to the element
    window.scrollTo({
        top: elementPosition,
        behavior: 'auto',
    });
    
}

//change status of the element
const selectEl = (el, setStatus, defaultValue) => {
    setStatus(el ? el.target.dataset.nav : defaultValue);
}
		

module.exports = {
    scrollToEl: scrollToEl,
    selectEl: selectEl,
    changeActive: changeActive,
};