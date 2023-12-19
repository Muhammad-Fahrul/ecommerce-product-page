import "./BoxIcon.css";
const BoxIcon = ({
  icon,
  width,
  height,
  display,
  setDisplay,
  contrast,
  handlePriceEditor,
  type,
}) => {
  return (
    <div
      className="icon-container"
      style={{ height: `${height}px`, width: `${width}px` }}
      onClick={() => {
        setDisplay && setDisplay(!display);
        type && handlePriceEditor(type);
      }}
    >
      <img
        className="icon"
        src={icon}
        alt=""
        style={{ filter: `contrast(${contrast})` }}
      />
    </div>
  );
};

export default BoxIcon;
