const changeActive = (activeNav, container)=>{
    const navContainer = document.getElementById(container).getElementsByTagName("li");
    const selectedItem = document.getElementById(`Nav${activeNav}`);
    for(let i = 0; i < navContainer.length; i++){
        navContainer[i].classList.remove('Active')
    }
    selectedItem.classList.add('Active');
}

const scrollToEl = (el, setStatus, footer) =>{
    const selected = footer ? el : el.target.dataset.nav;
    setStatus && setStatus(selected);
    const elementPosition = document.getElementById(selected).getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition,
        behavior: 'auto',
    });
    
}

const selectEl = (el, setStatus, defaultValue) => {
    setStatus(el ? el.target.dataset.nav : defaultValue);
}
		

module.exports = {
    scrollToEl: scrollToEl,
    selectEl: selectEl,
    changeActive: changeActive,
};