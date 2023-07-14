import React, { Component } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: []
    }
  }

  componentDidMount() {
    axios.get('https://o43ys.sse.codesandbox.io/menu')
    .then(res => {
      this.setState({
        menu: res.data
      })
    })
  }

  render() {
    return (
      <section id="menu" className="menu section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>
          <div className="row menu-container">
            {
              this.state.menu.map((item, key) => 
                <MenuItem 
                  id= {item.id}
                  title= {item.title} 
                  price={item.price} 
                  img= {item.thumbnail} 
                  quote= {item.quote}
                />
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;