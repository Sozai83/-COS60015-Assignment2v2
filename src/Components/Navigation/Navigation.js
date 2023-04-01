import WithNavList from "./WithNavList"

const Navigation = ({ nav }) => {
    return(
    <nav id={nav.id ? nav.id : ''}>
        <ul>
            {nav.items}
        </ul>
    </nav>);
}

export default WithNavList(Navigation);