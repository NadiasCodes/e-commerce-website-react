import React from 'react'
import "./Filter.css"
import arrow_icon from "../Assets/breadcrum_arrow.png";

export default function (props) {
    const {product} = props;
  return (
    <div className="filter">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> 
      {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  );
}
