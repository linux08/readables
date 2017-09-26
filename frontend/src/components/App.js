import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import { fetchCategoryOfAPost } from '../actions/categories.js'

class App extends Component {

  componentDidMount() {
    // console.log('clicked here')
    this.props.click()
  }
  render() {
    console.log(this.props)
    return (
      <div >
        <div className="App">
          <Header />
          <div className="positon-header">
            <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD </i></button>
            <div className="dropdown">
              <select className="header-space btn btn-secondary dropdown-toggle header-space">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <select className="btn btn-secondary dropdown-toggle header-space">
              <option value="volvo">Sort by Timestamp</option>
              <option value="saab">Sort by Date</option>
            </select>
          </div>
          <hr />
          <h4> Posts </h4>
        </div>

        <div className="">
          <div style={{ margin: 30 }}>

            <h1 className="display-3">Title</h1>
            <br />
            <div className="">
              <p className="">Body</p>
              <div className="">

                <p className=""> Category: </p>
                <p className=""> VoteSCore </p>
              </div>
              <div className="divinline">
                <p className="">  Author: </p>
                <p className=""> Comment </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { category: state };
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => dispatch(fetchCategoryOfAPost())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

