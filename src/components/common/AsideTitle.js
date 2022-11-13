import React from "react";
import "./asideTitle.scss";

const AsideTitle = ({ title }) => {
  return (
    <div className="AsideTitle_container">
      <div>icon</div>
      <h2>{title}</h2>
    </div>
  );
};

export default AsideTitle;
