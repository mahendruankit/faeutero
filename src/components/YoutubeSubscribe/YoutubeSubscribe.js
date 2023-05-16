import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YoutubeSubscribe.scss';

export default class YouTubeSubscribe extends Component {
  static propTypes = {
    channelName: PropTypes.string,
    channelid: PropTypes.string.isRequired,
    layout: PropTypes.string,
    count: PropTypes.string,
  };

  static defaultProps = {
    channelName: 'Fae Utero',
    channelid: 'UCg2zJzFO0yrYL7YZ1aHXxkg',
    layout: 'default',
    count: 'default',
  };

  constructor(props) {
    super(props);
    this.youtubeSubscribeNode = React.createRef();

    this.state = {
      initialized: false,
    };
  }

  initialized() {
    this.setState({
      initialized: true,
    });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const youtubescript = document.createElement('script');
    youtubescript.src = 'https://apis.google.com/js/platform.js';
    this.youtubeSubscribeNode.current.parentNode.appendChild(youtubescript);
    this.initialized();
  }

  render() {
    const { layout, count, channelName, channelid } = this.props;

    return (
      <div className='youtubeSubscribe'>
        <div
          ref={this.youtubeSubscribeNode}
          className='g-ytsubscribe'
          data-layout={layout}
          data-count={count}
          data-channel={channelName}
          data-channelid={channelid}
        />
      </div>
    );
  }
}
