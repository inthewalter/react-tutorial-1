import React, { Component } from 'react'
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonInfo from "../component/WebtoonInfo";
import EpisodeList from "../component/EpisodeList";


export default class WebtoonHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      webtoonId: parseInt(props.match.params.webtoonId, 10),
      webtoon: {},
      episodeList: []
    }
  }

  componentDidMount() {
    this._getWebtoon();
    this._getEpisodeList();
  }

  _getWebtoon() {
    const apiUrl = '/dummy/webtoon_detail.json';

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          webtoon: data.data.webtoons.find(w => (
            w.id === this.state.webtoonId
          ))
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  _getEpisodeList() {
    const apiUrl = '/dummy/episode_list.json';

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          episodeList: data.data.webtoonEpisodes.filter(episode => (
            episode.webtoonId === this.state.webtoonId
          ))
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Gnb />
        { this.state.webtoon.id
          ? (
            <WebtoonInfo webtoon={this.state.webtoon} />
          ) : (
            <span>Loading...</span>
          )
        }
        { this.state.episodeList.length > 0
          ? (
            <EpisodeList episodes={ this.state.episodeList } />
          ) : (
            <span>Loading...</span>
          )

        }
        <Footer />
      </div>
    )
  }
}
