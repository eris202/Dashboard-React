import React from "react";
import {
  AvatarIcon,
  BagIcon,
  BoxIcon,
  EditIcon,
  NotificationIcon,
  PeopleIcon,
} from "../../icon";

export default function AsideRight() {
  // mimick  api detials
  const profileDetails = {
    name: "Erisan Akorede",
    img: <AvatarIcon />,
    followers: "2,580",
    products: 218,
  };

  const recentOrders = [
    {
      item_name: "Redmi 4X",
      img: "/headphone.jpg",
      duration: "2 Minute Ago",
      price: "+$80.00",
    },
    {
      item_name: "Acer E1-421",
      img: "/smartphone.jpg",
      duration: "2 Minute Ago",
      price: "+$80.00",
    },
    {
      item_name: "Nikon D3500",
      img: "/headphone.jpg",
      duration: "2 Minute Ago",
      price: "+$80.00",
    },
  ];
  return (
    <div className="mt-4 px-4">
      <div className="w-100 asideContainer">
        <div className="w-100">
          <div className="float-left ">
            <div className="callToAction card p-2">
              <NotificationIcon className="svg" />
            </div>
          </div>

          <div className="float-right">
            <div className="callToAction card p-2">
              {" "}
              <EditIcon className="svg" />
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="avatar text-center mx-auto">{profileDetails.img}</div>
        <div className="name title text-center mt-3">{profileDetails.name}</div>
        <div className="card col overview mt-3 p-2">
          <div className="row ">
            <div className="col pr-2" style={{ borderRight: "2px solid #eee" }}>
              <div className="d-flex">
                <BagIcon />
                <div className="ml-2 wrapper">
                  <div>{profileDetails.products}</div>
                  <div>Products</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <PeopleIcon />
                <div className="ml-2 wrapper">
                  <div>{profileDetails.followers}</div>
                  <div>Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reputation */} <h3 className="title small mt-3">Reputation</h3>
        <div className="reputation-container card p-2 ">
          <div className="d-flex">
            <div className="icon-container mr-2">
              {" "}
              <BoxIcon />
            </div>
            <div className="w-100 summary">
              <div className="float-left">Start Seller</div>
              <div className="float-right">85%</div>
              <div className="clearfix"></div>
              <div className="w-100 reach mt-2">
                <div className="h-100" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent orders */}
        <div className="recent-order-container my-3">
          <div className="w-100 title small ">
            <div className="float-left">Recent orders</div>
            <div className="float-right">See all</div>
          </div>
          <div className="clearfix"></div>
          <div
            className="w-100 card  recent-order-container mt-2 p-2"
            style={{ fontSize: "11px" }}
          >
            {recentOrders.map((soldGoods, index) => {
              return (
                <div key={index}>
                  <div className="w-100 py-2">
                    <div className="float-left d-flex">
                      <div className="mr-2">
                        <img
                          alt=""
                          className="img-fluid"
                          style={{ width: "25px", height: "auto" }}
                          src={soldGoods.img}
                        />
                      </div>
                      <div>
                        <div className="name">{soldGoods.item_name}</div>
                        <div className="duration">{soldGoods.duration}</div>
                      </div>
                    </div>
                    <div className="float-right price">{soldGoods.price}</div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
