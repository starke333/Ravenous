import React from 'react';
import './SearchBar.css';

let sortByOption = {
  'Best Match' : 'best_match',
  'Higest Rating' : 'rating',
  'Most Reviewed' : 'review_count'
};

class SearchBar extends React.Component{
  renderSortByOptions(){
    return Object.keys(sortByOption).map(sortByOption =>{
      let sortByOptionValue = sortByOption[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
render(){
  return <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
    renderSortByOptions(sortByOption)
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let&#39;s Go</a>
  </div>
</div>
}

};

export default SearchBar;
