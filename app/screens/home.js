import { FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GridList from 'react-native-grid-list';

import allTheActions from '../actions/index';

import Background from '../components/Background';

import styled from 'styled-components';

const Test = styled.FlatList`
  width: 100%;
`;

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    actions: PropTypes.object,
    subreddits: PropTypes.array
  };

  componentDidMount() {
    if (!this.props.subreddits[0]) {
      this.props.actions.subreddit.getSubreddit();
    }
  }

  _renderItem = ({ item }) => {
    //console.log(item);
    return (
      <Image
        style={{ width: '100%', height: '100%', borderRadius: 0 }}
        source={{
          uri: item
        }}
      />
    );
  };

  handleLoadMore = () => {
    this.props.actions.subreddit.getSubreddit();
  };

  handlePressButton = () => {
    this.props.actions.subreddit.getSubreddit();
  };

  render() {
    //console.log('ALLLOOOOOO', this.props.subreddits);
    return (
      <Background>
        <GridList
          style={{ paddingTop: 30 }}
          data={this.props.subreddits}
          numColumns={2}
          showSeparator
          separatorBorderColor={'#1b252e'}
          renderItem={this._renderItem}
          keyExtractor={item => item}
          onEndReached={this.handleLoadMore}
        />
      </Background>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    subreddit: bindActionCreators(allTheActions.subreddit, dispatch)
  }
});

const mapStateToProps = state => {
  return {
    subreddits: state.subreddit.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
