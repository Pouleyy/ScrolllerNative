import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Background from '../components/Background';
import ImageList from '../components/ImageList';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <Background>
        <ImageList />
      </Background>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   actions: {
//     subreddit: bindActionCreators(allTheActions.subreddit, dispatch)
//   }
// });

// const mapStateToProps = state => {
//   return {
//     subreddits: state.subreddit.data
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
