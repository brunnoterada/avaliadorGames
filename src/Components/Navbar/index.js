import './Navbar.css'

const Navbar =()=>{
    return(
        <nav className="nav">
            <a href="/" className="site-title">Site name</a>
            <ul>
                <CustomLink href="/Sobre">Sobre</CustomLink>
                <CustomLink href="/Lista">Lista</CustomLink>

            </ul>
        </nav>
    )

}

function CustomLink({href, children, ...props}){
    const path =window.location.pathname

    return(
        <li className={path===href ? "active":""}>
            <a href={href}{...props}>{children}</a>
        </li>
    )
}
export default Navbar