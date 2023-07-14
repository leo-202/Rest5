import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative text-center text-lg-left"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  Welcome to <span>Restaurantly</span>
                </h1>
                <h2>Delivering great food for more than 18 years!</h2>
                <div className="btns">
                  <Link
                    to="/menu"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="about-img">
                    <img
                      src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/about.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>
                    Voluptatem dignissimos provident quasi corporis voluptates
                    sit assumenda.
                  </h3>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-check-circled" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
