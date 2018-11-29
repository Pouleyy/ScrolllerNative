import React from 'react';
import { Searchbar } from 'react-native-paper';
import PropTypes from 'prop-types';

export default class SearchBar extends React.PureComponent {
  static propTypes = {
    onSubChange: PropTypes.func
  };

  handleIconPress = subToSeach => {
    this.search.clear();
    this.props.onSubChange(subToSeach);
  };
  render() {
    let subToSeach;
    return (
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
        value={subToSeach}
        onChangeText={query => {
          subToSeach = query;
        }}
        onIconPress={() => this.handleIconPress(subToSeach)}
        ref={search => (this.search = search)}
      />
    );
  }
}
