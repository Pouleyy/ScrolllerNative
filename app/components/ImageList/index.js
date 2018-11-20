import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GridList from 'react-native-grid-list';

import allTheActions from '../../actions/index';

//import Video from 'react-native-video';

import MediaCard from '../MediaCard';

import styled from 'styled-components';
const LikeTouchableOpacity = styled.TouchableOpacity``;
import Heart from '../../static/images/heart.png';

class ImageList extends React.PureComponent {
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
    return <MediaCard media={item} />;
  };

  handleFavButtonPress = item => {
    console.log('CLICKED', item);
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
      <GridList
        style={Platform.OS === 'ios' ? { paddingTop: 30 } : { paddingTop: 0 }}
        data={this.props.subreddits}
        numColumns={1}
        showSeparator
        separatorBorderColor={'#1b252e'}
        renderItem={this._renderItem}
        keyExtractor={item => item}
        onEndReached={this.handleLoadMore}
      />
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
)(ImageList);
