import { ImageBackground, View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GridList from 'react-native-grid-list';

import allTheActions from '../actions/index';
import Background from '../components/Background';

class Favorite extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    actions: PropTypes.object,
    favorite: PropTypes.array
  };

  componentDidMount() {
    if (this.props.favorite.length != 0) {
      this.props.actions.favorite.addFavoriteImage();
    }
  }

  _renderItem = ({ item }) => {
    //console.log(item);
    return (
      <ImageBackground
        source={{ uri: item }}
        style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Centered text</Text>
        </View>
      </ImageBackground>
    );
  };

  // handleLoadMore = () => {

  // };

  render() {
    return (
      <Background>
        <GridList
          style={Platform.OS === 'ios' ? { paddingTop: 30 } : { paddingTop: 0 }}
          data={this.props.favorite}
          numColumns={1}
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
    favorite: bindActionCreators(allTheActions.favorite, dispatch)
  }
});

const mapStateToProps = state => {
  return {
    favorite: state.favorite.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
