import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var searchContainerProps = (Search) => {};

var searchContainerDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange () {
      dispatch();
    }
  }
}

var SearchContainer = connect(searchContainerProps, searchContainerDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
