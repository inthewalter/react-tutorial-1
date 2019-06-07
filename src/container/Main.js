import React, { Component } from 'react'

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gnb />
        Main
        <Footer />
      </div>
    )
  }
}
