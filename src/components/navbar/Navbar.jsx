import MenuIcon from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import CartIcon from "../../assets/images/icon-cart.svg";
import AvatarIcon from "../../assets/images/image-avatar.png";
import BoxIcon from "../boxIcon/BoxIcon";
import CartModal from "../cartmodal/CartModal";
import ListMenu from "../listmenu/ListMenu";
import { useState } from "react";
import "./Navbar.css";
const Navbar = ({ cart }) => {
  const [cartDisplay, setCartDisplay] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-item left">
          <div className="navbar-menu-btn">
            {!menuDisplay ? (
              <BoxIcon
                icon={MenuIcon}
                height={15}
                display={menuDisplay}
                setDisplay={setMenuDisplay}
              />
            ) : (
              <BoxIcon
                icon={CloseIcon}
                height={15}
                display={menuDisplay}
                setDisplay={setMenuDisplay}
              />
            )}
          </div>
          <h1 className="navbar-logo-site">sneaker</h1>
          <ListMenu display={menuDisplay} />
        </div>
        <div className="navbar-item right">
          <div className="navbar-cart-badge">
            <span>{cart.length || ""}</span>
            <BoxIcon
              icon={CartIcon}
              height={20}
              contrast={70}
              display={cartDisplay}
              setDisplay={setCartDisplay}
            />
          </div>
          <BoxIcon icon={AvatarIcon} width={28} />
        </div>
      </div>
      <CartModal display={cartDisplay} cart={cart} />
    </div>
  );
};

export default Navbar;
