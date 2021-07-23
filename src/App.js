// import logo from "./logo.svg";
import "./bootstrap/css/bootstrap.min.css";
import "./App.scss";
import "./_variable/all.scss";
import DashboardLayout from "./layout";
import Thumbnail from "./component/view/thumbnail";
import Input from "./component/elem/input";
import { popularProducts } from "./data/popular-product";
import useMenu from "./context/sidemenu";
import { useEffect } from "react";
import ChartIllustration from "./component/view/chart";

function App() {
  const { rightMenu, leftMenu } = useMenu();

  const handleClick = () => {
    rightMenu();
  };

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-2  px-0 text-left mt-4 d-md-none d-block"
              style={{ maxWidth: "25px" }}
              id="menuToClick"
            >
              <div className="overflow-hidden mt-2"></div>
              <img alt=""
                style={{ width: "20px" }}
                className="img-fluid d-inline-block"
                src="/menu-icon.svg"
                onClick={() => leftMenu()}
              />
            </div>
            <div className="col mx-auto mt-4">
              <Input search placeholder="Search for product" />
            </div>
            <div
              style={{ maxWidth: "25px" }}
              className="col-2 px-0 text-right mt-4 d-lg-none d-block"
              id="menuToClick"
            >
              <div className="overflow-hidden mt-2"></div>
              <img alt=""
                style={{ width: "20px" }}
                className="img-fluid d-inline-block"
                src="/menu.svg"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>

        <Thumbnail title="Overview" />
        <div className="px-4 mt-4 card">
          <h3 className="title mb-0 p-3">
            Income <span className="me-3">Expenses</span>
          </h3>

          <ChartIllustration />
        </div>

        {/* popular product */}
        <div className="my-5 card mx-3">
          <h3 className="title mb-0 p-3">Popular Products</h3>
          <div className="table-responsive">
            <table className="table app-table">
              <thead>
                <tr style={{ borderBottom: "none" }}>
                  <th>Photos</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {popularProducts.map((popular, index) => (
                  <tr>
                    <td>
                      <img alt=""
                        className="img-fluid "
                        style={{ height: "auto", width: "30px" }}
                        src={popular.imgSrc}
                      />
                    </td>
                    <td>
                      <div>{popular.name}</div>
                      <div>{popular.id}</div>
                    </td>
                    <td>{popular.date}</td>
                    <td>{popular.category}</td>
                    <td>{popular.brand}</td>
                    <td className="price">{popular.price}</td>
                    <td>
                      <div>{popular.status[0]}</div>
                      <div>{popular.status[1]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default App;
