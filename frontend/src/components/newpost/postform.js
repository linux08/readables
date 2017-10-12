import React, { Component } from 'react';
import uuid from 'uuid'
import moment from 'moment'
import Form from './form.js'
import Header from '../header'
import Footer from '../footer'
import * as API from '../../utils/API.js'




class PostForm extends Component {


  //handleSubmit, pristine, reset, submitting// 
  handleSubmit(val) {
    val.id = uuid()
    val.timestamp = Date.now()
    console.log(val)
    API.createPost(val).then((res) => console.log(res))
    alert('post entered succesfully')
    window.location.href = "/"
  }
  reset() {

  }
  pristine() {

  }


  render() {


    return (
      <div>
        <Header />
        <h3> NEW POST </h3>
        <Form onSubmit={this.handleSubmit} />
        <br />
        <br />
        <Footer />
      </div>
    );
  }



}

export default PostForm