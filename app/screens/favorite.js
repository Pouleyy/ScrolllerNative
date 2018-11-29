import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import allTheActions from '../actions/index';
import Background from '../components/Background';
import MediaCard from '../components/MediaCard';

class Favorite extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    actions: PropTypes.object,
    media: PropTypes.array
  };

  _renderItem = ({ item }) => {
    return <MediaCard media={item} />;
  };

  render() {
    const { media } = this.props;
    const fav = media.filter(x => x.isFavorite);
    return (
      <Background>
        <GridList
          style={Platform.OS === 'ios' ? { paddingTop: 30 } : { paddingTop: 0 }}
          data={fav}
          numColumns={1}
          showSeparator
          separatorBorderColor={'#1b252e'}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      </Background>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    favorite: bindActionCreators(allTheActions.subreddit, dispatch)
  }
});

const mapStateToProps = state => {
  return {
    media: state.favorite.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
