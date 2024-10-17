import Image from "next/image";
import { ShoppingCartOutlined,SearchOutlined } from '@ant-design/icons';


function Navbar() {
  return (
    <section className="navbar">
      <nav className="flex gap-11 ">
        <div className="logo ml-5">
          <Image
            src="/images/BrandName.png"
            alt="logo-image"
            width={145}
            height={32}
          />
        </div>
        <div className="navItems ml-8">
          <ul className="flex gap-5 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul className="nav-2 ml-11 flex gap-9">
            <li >
              <a href="#" className="font-extrabold inline">
                
                Login/Register
              </a>
            </li>
            <li>
              <a href="#">
              <SearchOutlined style={{ fontSize: '30px', height: '20px', width: '20px', color: '#1890ff' }}/>              </a>
            </li>
            <li>
              <a href="#">
              <ShoppingCartOutlined style={{ fontSize: '30px', height: '20px', width: '20px', color: '#1890ff' }} />
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
