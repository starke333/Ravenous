import React from 'react';
import './SearchBar.css';

let sortByOption = {
  'Best Match' : 'best_match',
  'Higest Rating' : 'rating',
  'Most Reviewed' : 'review_count'
};

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy:'best_match'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
//missing one bind
    this.handleSearch = this.handleSearch.bind(this);
  }
  getSortByClass(sortByOption){
    if(this.state.sortBy=sortByOption){
      return 'active'
    }
    else{
      ''
    }
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event){
    this.setState=({
      term: event.target.value
    });
  }

  handleLocationChange(event){
    this.setState=({
      location: event.target.value
    });
  }

  handleSearch(event){
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  event.preventDefault()
  }

  renderSortByOptions(){
    return Object.keys(sortByOption).map(sortByOption =>{
      let sortByOptionValue = sortByOption[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }



render(){
  return <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
    {this.renderSortByOptions(sortByOption)}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange()} />
    <input placeholder="Where?" onChange={this.handleLocationChange()}/>
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Let&#39;s Go</a>
  </div>
</div>
}

};

export default SearchBar;
