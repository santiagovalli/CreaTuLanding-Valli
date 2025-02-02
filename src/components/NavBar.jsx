import CartWidget from "./CartWidget"

function Navbar() {
    return(
        <nav>

            <section className="logo">
                <p>SmartShop</p>
            </section>

            <ul>
                <li>
                    <p>Celulares</p>
                </li>

                <li>
                    <p>Tablets</p>
                </li>

                <li>
                    <p>Smartwacht</p>
                </li>                
            </ul>

            <div className="CartContainer">
                <p> <CartWidget/> </p>
            </div>
        </nav>
    )
}

export default Navbar