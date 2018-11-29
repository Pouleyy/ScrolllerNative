import { Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GridList from 'react-native-grid-list';

import allTheActions from '../../actions/index';

import MediaCard from '../MediaCard';
import SearchBar from '../Searchbar';

class ImageList extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    actions: PropTypes.object,
    media: PropTypes.array
  };

  state = {
    actualSub: ''
  };

  _renderItem = ({ item }) => {
    return <MediaCard media={item} />;
  };

  handleLoadMore = () => {
    this.props.actions.subreddit.getSubreddit(this.state.actualSub);
  };

  onSubChange = newSub => {
    const refresh = true;
    this.setState({ actualSub: newSub });
    this.props.actions.subreddit.getSubreddit(newSub, refresh);
  };

  render() {
    return (
      <View>
        <SearchBar onSubChange={res => this.onSubChange(res)} />
        {!this.props.media[0] ? (
          <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
            PLEASE ENTER A SUB
          </Text>
        ) : (
          <GridList
            data={this.props.media}
            numColumns={1}
            showSeparator
            separatorBorderColor={'#1b252e'}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
            onEndReached={this.handleLoadMore}
          />
        )}
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
