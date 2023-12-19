import image1Thumb from "../../assets/images/image-product-1-thumbnail.jpg";
import "./CartModal.css";

const CartModal = ({ display, cart }) => {
  return (
    <div className={`cart-container ${display && "active"}`}>
      <h1>Cart</h1>
      <hr />
      <div className="cart-item-list">
        {cart.length ? (
          cart.map((product, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-img-container">
                <img src={image1Thumb} alt="" />
              </div>
              <div className="cart-item-info">
                <h2 className="cart-item-title">Fall Edition</h2>
                <div className="cart-item-price">
                  <span>
                    {product.price} x {product.quantity}
                  </span>
                  <span> = {product.price * product.quantity}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>Cart Masih Kosong</h3>
        )}
      </div>
    </div>
  );
};

export default CartModal;
