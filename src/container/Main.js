import React, { Component } from 'react';
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonList from "../component/WebtoonList";

export default class Main extends Component {

  constructor(props) {
    super(props);

    const query = new URLSearchParams(props.location.serach);
    const day = query.get('day');

    this.state = {
      day: day || 'mon',
      webtoonList: []
    }
  }

  componentDidUpdate(prevProps) {
    let prevQuery = new URLSearchParams(prevProps.location.search);
    let prevDay = prevQuery.get('day');

    let query = new URLSearchParams(this.props.location.search);
    let day = query.get('day');

    console.log(prevProps, this.props);
    console.log(prevDay, day);
    if (prevDay !== day) {
      this.setState({
        day
      })
    };
  }
  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = 'dummy/webtoon_list.json';

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          webtoonList: data.data.webtoonList
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Gnb day={ this.state.day }/>
        { this.state.webtoonList.length > 0
          ? (
            <WebtoonList list={
              this.state.webtoonList.filter(webtoon => (
                webtoon.day === this.state.day
              ))
              } />
          )
          : (
            <span>
              Loading...
            </span>
          )
        }
        <Footer />
      </div>
    )
  }
}
