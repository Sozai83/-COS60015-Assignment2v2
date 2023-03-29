import React, { useState, useEffect } from "react";
import '../CSS/layout/navigation.scss';

const withNavList = Component => {
    const NewComponent = ({navItems, navId, selectNav, id, ...props})=>{
        const [navList, setNavList] = useState(null);
        const selectEl = (event)=>{
            selectNav(event);
        }
        //Convert navItems to navList JSX
        useEffect(()=> {
            const items = navItems ? navItems.map(
                (nav,index) => 
                <li key={index} 
                    data-nav={nav.replace(" ", "")}
                    id={`Nav${nav.replace(" ", "")}`}
                    className={props.default === nav.replace(" ", "") ? 'Active' : ''}
                    onClick={selectEl}
                    >
                        {nav.toUpperCase()}
                    </li>
                ) : <li>No list</li>;
            setNavList(items);
        },[navItems]);

         return (
             <Component {...props} nav={{ items: navList, id: navId}}/>
         );      
    }
    return NewComponent;
};

export default withNavList;