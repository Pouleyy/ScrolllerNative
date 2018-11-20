import { ImageBackground, View, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GridList from 'react-native-grid-list';

import allTheActions from '../../actions/index';

import Video from 'react-native-video';

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
    let media;

    if (item.endsWith('.webm') || item.endsWith('.mp4')) {
      console.log('video');
      media = (
        <Video
          source={{ uri: item }} // Can be a URL or a local file.
          repeat={true}
          style={{ width: '100%', height: '100%' }}
          resizeMode={'stretch'}
          //style={styles.backgroundVideo}
        />
      );
    } else {
      media = (
        <ImageBackground
          source={{ uri: item }}
          style={{ width: '100%', height: 300 }}
          resizeMode={'stretch'}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}
          >
            <LikeTouchableOpacity
              onPress={() => this.handleFavButtonPress(item)}
            >
              <Image
                source={Heart}
                style={{ width: 25, height: 25, tintColor: 'red' }}
              />
            </LikeTouchableOpacity>
          </View>
        </ImageBackground>
      );
    }
    return media;
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
