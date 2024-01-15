import React from "react";

import "./SpecialMenu.css";
import images from "../../constants/images";
import data from "../../constants/data";
import {SubHeading, MenuItem} from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="p__cormorant app__specialMenu-menu_heading">
          Wine & Bear
        </p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>
      <div className="app__specialMenu-menu_cocktails app__specialMenu-menu_cocktails  flex__center">
        <p className="p__cormorant app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map(item => (
            <MenuItem
              key={item.title}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: "15px"}}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
