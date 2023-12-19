import "./ListMenu.css";
const ListMenu = ({ display }) => {
  return (
    <>
      <div className={`bg-transparent-dark ${display && "active"}`}></div>
      <ul className={`list-menu-container ${display && "active"}`}>
        <div className="list-menu-wrapper">
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Man</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </div>
      </ul>
    </>
  );
};

export default ListMenu;
