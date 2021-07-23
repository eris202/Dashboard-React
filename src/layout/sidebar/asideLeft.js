import React, { useState } from "react";
import Logo from "../../component/elem/logo";
import { menu } from "../../data/menu";

export default function SideMenu({display}) {
  const [activeState, setActiveState] = useState(1);

  const handleClick = (i) => {
    setActiveState(i);
  };

  return (
    <div className={`pl-lg-3 pl-3 mt-4 col-md-2 pr-0 menu-container ${display ? "show" :""}`}>
      <div className="logo">
         <Logo  />
      </div>
     
      <ul className="sidemenu mt-5">
        {menu.map((menuList, i) => {
          return (
            <li key={menuList.key + i}>
              <div className="title mt-4">{menuList.heading}</div>
              <ul>
                {menuList.menu.map((subList, index) => {
                  return (
                    <li
                      className={`d-flex my-3 menu-list ${
                        subList.id === activeState ? "active" : ""
                      } `}
                      onClick={() => handleClick(subList.id)}
                      key={subList.key}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="mr-3">{subList.icon}</div>
                      <div>{subList.name}</div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
