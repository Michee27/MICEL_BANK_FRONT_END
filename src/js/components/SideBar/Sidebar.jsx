import { menuItems } from "./utils/contants";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">MicelBank</div>
      {menuItems.map((item, index) => (
        <a href={item.link} className="menu-item" key={index}>
          <i className={`fas ${item.icon}`}></i>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
