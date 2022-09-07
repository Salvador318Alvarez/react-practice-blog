const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Song Randomizer</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/songs">Songs</a>
                <a href="/add">Add</a>
            </div>
        </nav>
     );
}
 
export default Navbar;