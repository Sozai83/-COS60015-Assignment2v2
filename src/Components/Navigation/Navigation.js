import WithNavList from "./WithNavList"

const Navigation = ({ nav }) => {
    //Renders navigation items that are passed
    return(
    <nav id={nav.id ? nav.id : ''}>
        <ul>
            {nav.items}
        </ul>
    </nav>);
}

//Used withNavList HOC
export default WithNavList(Navigation);