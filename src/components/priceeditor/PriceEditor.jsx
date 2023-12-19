import BoxIcon from "../boxIcon/BoxIcon";
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";
import CartIcon from "../../assets/images/icon-cart.svg";
import { useState } from "react";
import "./PriceEditor.css";
const PriceEditor = ({ product, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleClick = (e, id) => {
    e.preventDefault();
    const itemCart = cart.find((item) => item.id === id);

    if (!itemCart) {
      setCart((prev) => [...prev, { ...product, quantity }]);
    } else {
      let newCart;
      newCart = cart.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          item.quantity = item.quantity + quantity;
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      if (quantity > 0) setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="price-editor-container">
      <div className="price-editor-left">
        <span className="price-product">$ {product.price}</span>
        <span className="product-price-discount">0%</span>
        <span className="product-price-total">
          $ {product.price * quantity}
        </span>
      </div>
      <div className="price-editor-center">
        <BoxIcon
          icon={MinusIcon}
          width={15}
          type={"dec"}
          handlePriceEditor={handleQuantity}
        />
        <span className="product-amount">{quantity}</span>
        <BoxIcon
          icon={PlusIcon}
          width={15}
          type={"inc"}
          handlePriceEditor={handleQuantity}
        />
      </div>
      <button
        className="price-editor-right detail-product-button"
        onClick={(e) => handleClick(e, product.id)}
      >
        <BoxIcon icon={CartIcon} width={15} contrast={90} />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default PriceEditor;
