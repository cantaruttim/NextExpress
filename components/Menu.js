import Link from 'next/link';

const Menu = () => (
    <div>
        <nav className='navbar'>
            <div className='max-width'>
                <div className='logo'>
                    <a href='/'>Celke</a>
                </div>
                <ul className='menu'>
                    <li> <a href='/' className='menu-btn'> Home </a> </li>
                    <li> <a href='/sobre' className='menu-btn'> Sobre </a> </li>
                    <li> <a href='/contato' className='menu-btn'> Contato </a> </li>
                </ul>
                <div className='menu-btn'>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
        Menu<br />

    </div>

);

export default Menu;