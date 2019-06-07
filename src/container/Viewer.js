import React, { Component } from 'react'

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";


export default class Viewer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gnb />
        Viewer
        <Footer />
      </div>
    )
  }
}
