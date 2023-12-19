import "./Detail.css";
const Detail = ({ children, product }) => {
  return (
    <div className="detail-container">
      <h1 className="detail-product-title">{product.title}</h1>
      <h2 className="detail-addition-info">{product.addition}</h2>
      <p className="detail-description">{product.desc}</p>
      {children}
    </div>
  );
};

export default Detail;
