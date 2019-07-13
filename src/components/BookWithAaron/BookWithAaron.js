import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../Card/Card.js";

class BookWithAaron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <section id="bookWithAaron" className="bookWithAaron">
          <script id="setmore_script" type="text/javascript" src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"></script><a className="btn" id="Setmore_button_iframe" style="float:none" href="https://my.setmore.com/bookingpage/6d9a98d7dbe4cff093bd1cb116ebd341e7235042">Make an appointment with Aaron</a>
        </section>
      </div>
    );
  }
}

export default BookWithAaron;

