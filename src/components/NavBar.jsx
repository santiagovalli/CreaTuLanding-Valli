import CartWidget from "./CartWidget"

function Navbar() {
    return(
        <nav>

            <section>
                <p>SmartShop</p>
                <p> <CartWidget/> </p>
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
        </nav>
    )
}

export default Navbar