import NextIcon from "../../assets/images/icon-next.svg";
import PrevIcon from "../../assets/images/icon-previous.svg";
import BoxIcon from "../boxIcon/BoxIcon";
import "./Slider.css";
const Slider = ({ imgsUrl, currImg, setCurrImg }) => {
  return (
    <div className="slider-container">
      <div className="slider-image-container">
        {imgsUrl.map((url, i) => {
          if (currImg === url) {
            return (
              <img
                className="active"
                key={i}
                src={url}
                alt=""
                onClick={() => setCurrImg(url)}
              />
            );
          } else {
            return (
              <img key={i} src={url} alt="" onClick={() => setCurrImg(url)} />
            );
          }
        })}
      </div>
      <div className="slider-button-container">
        <div className="slider-icon-container">
          <BoxIcon icon={PrevIcon} width={15} height={15} />
        </div>
        <div className="slider-icon-container">
          <BoxIcon icon={NextIcon} width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
