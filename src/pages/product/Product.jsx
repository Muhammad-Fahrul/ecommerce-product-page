import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Detail from "../../components/detail/Detail";
import { product } from "../../data";
import { useState } from "react";
import PriceEditor from "../../components/priceeditor/PriceEditor";
import "./Product.css";
const Product = () => {
  const [cart, setCart] = useState([]);
  const [currImg, setCurrImg] = useState(product.imgsUrl[0]);
  return (
    <div className="product-container">
      <Navbar cart={cart} />
      <div className="product-wrapper">
        <div className="product-img">
          <img className="product-curr-img" src={currImg}></img>
          <Slider
            imgsUrl={product.imgsUrl}
            currImg={currImg}
            setCurrImg={setCurrImg}
          />
        </div>
        <Detail product={product}>
          <PriceEditor product={product} cart={cart} setCart={setCart} />
        </Detail>
      </div>
    </div>
  );
};

export default Product;
