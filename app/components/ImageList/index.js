import { Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GridList from 'react-native-grid-list';
import { Searchbar } from 'react-native-paper';

import allTheActions from '../../actions/index';

import MediaCard from '../MediaCard';

class ImageList extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    actions: PropTypes.object,
    media: PropTypes.array
  };
  componentDidMount() {
    if (!this.props.media[0]) {
      this.props.actions.subreddit.getSubreddit();
    }
  }

  _renderItem = ({ item }) => {
    return <MediaCard media={item} />;
  };

  handleLoadMore = () => {
    this.props.actions.subreddit.getSubreddit();
  };

  handlePressButton = () => {
    this.props.actions.subreddit.getSubreddit();
  };

  render() {
    return (
      <View
        style={Platform.OS === 'ios' ? { paddingTop: 30 } : { paddingTop: 0 }}
      >
        <Searchbar
          theme={{
            colors: {
              surface: '#1b252e',
              text: '#FFFFFF',
              placeholder: '#FFFFFF'
            }
          }}
          searchIcon={{ size: 24 }}
          placeholder="Enter a subreddit here"
        />
        <GridList
          data={this.props.media}
          numColumns={1}
          showSeparator
          separatorBorderColor={'#1b252e'}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          onEndReached={this.handleLoadMore}
        />
      </View>
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
    media: state.subreddit.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);
