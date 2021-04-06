import React from "react";
import "./homepage.styles.scss";
export const Homepage = () => {
  return (
    <div class="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Clothes</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jacket</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Shoes</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
