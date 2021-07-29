import React, { Component } from 'react'

const SearchContext = React.createContext();

class SearchProvider extends Component {
  //TODO: ficámos no início do heatmap
  state = {
    search: "",
  };

  setSearch = (subreddit) => { 
    this.setState(() => {
      return {search : subreddit}
    })
  }

  render(){
    return (
      <SearchContext.Provider value={{
        ...this.state,
        setSearch : this.setSearch
      }}>
        
        {this.props.children}
  
      </SearchContext.Provider>
    );
  }
}

const SearchConsumer = SearchContext.Consumer;

export {SearchProvider, SearchConsumer}
