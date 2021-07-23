import React, { useRef, useEffect } from "react";
import SideMenu from "./sidebar/asideLeft";
import AsideRight from "./sidebar/asideRight";
import useMenu from "../context/sidemenu";

export default function DashboardLayout({ children }) {
  const {
    rightMenuState,
    leftMenuState,
    setRightMenuState,
    setLeftMenuState,
  } = useMenu();

  const handleClose = () => {
    setRightMenuState(false);
    setLeftMenuState(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3 firstGrid">
          {" "}
          <SideMenu display={leftMenuState} />
        </div>
        <div className="col-lg col-md-9">
          <div
            onClick={() => handleClose()}
            className={`transparent ${
              rightMenuState || leftMenuState ? "show" : ""
            }`}
          >
            {/* <div
              className={`cancelContainer ${
                rightMenuState || leftMenuState ? "show" : ""
              }`}
            >
              X
            </div> */}
          </div>
          <div>{children}</div>
        </div>

        <div
          className={`col-md-3 px-0 third-grid  ${rightMenuState ? "show" : ""}
      `}
        >
          <AsideRight />
        </div>
      </div>
    </div>
  );
}
