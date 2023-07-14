import React, { Component } from "react";
import data from "../data/db";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function MenuDetail(props) {
  let { id } = useParams();

  return (
    <section id="menudetail" className="menu-detail">
      {data.menu.map((value, key) => {
        if (value.id === id) {
          return (
            <div className="container">
              <div className="section-title">
                <h2>Menu Detail</h2>
                <p>Check Our Specials</p>
              </div>
              <div className="section-content">
                <div className="row event-item">
                  <div className="col-lg-4">
                    <img src={value.thumbnail} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{value.title}</h3>
                    <div className="price">
                      <p>
                        <span>{value.price}</span>
                      </p>
                    </div>
                    <p className="font-italic">{value.quote}</p>
                    <p>{value.content}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}

export default MenuDetail;
