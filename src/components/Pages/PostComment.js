import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComment } from '../../actions/newsComment';
import style from '../../App.scss'
import compose from 'recompose/compose';
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { withRouter }  from "react-router";
import PropTypes from 'prop-types';


class PostComment extends React.Component {


  constructor (props) {
    	super(props);
      this.state = {comments : [], addComment : false};
    }


  static async preInitStore(store, url) {
    await store.dispatch(fetchComment());
  }

    componentDidMount() {
      const { loading, error, content } = this.props;
      if (loading || error || content) return;

      this.props.fetchComment();

    }


handleCommentSubmit(newComment) {
  this.state.addComment = true;
   let comments = this.state.comments;
   let newComments = comments.concat([newComment]);

   console.log('Adding Comments' + newComments.length);
   this.setState({comments : newComments});
 }

  render() {
      let { loading, error, content } = this.props;

      if(!loading && !error && content && !this.state.addComment){
         console.log('Comments' + content.length);
        this.state.comments = content;
      }

    return (
      <Container fluid>
          <div className="comment-parent">
          <button className="like">
          	<i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>

          <button className="dislike">
          <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>

            <h1 className="comment-title">Comment Box</h1>
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            <CommentList comments={this.state.comments} />
        </div>
    </Container>
    );
  }
}


class CommentList extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
    if (this.props.comments) {
    let commentNodes = this.props.comments.reverse().map(function(comment, index) {
      return (
        <Comment key={index} author={comment.author}>{comment.text}</Comment>);
    });
    return (<div className="commentList">{commentNodes}</div>);
    }
    return <></>;
  }


}


class Comment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="comment-list-auther">{this.props.author}</h4>
        </div>
        <div className="comment-list-comment">
          {this.props.children}
        </div>
      </div>
    );
  }

}

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.refs.author.value;
    let text = this.refs.text.value;

    if(!text.trim() || !author.trim()) {
      alert("Please enter your name and comment");
      return;
    }

    this.props.onCommentSubmit({author:author, text:text});

    this.refs.author.value = "";
    this.refs.text.value = "";
  }

  render() {
    return (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="form-group row">
            <div className="col-sm-12">
              <input className="form-control" type="text" placeholder="Your name" ref="author" /><br/>
             </div>
             </div>

             <div className="form-group row">
              <div className="col-sm-12">
              <input className="form-control" type="text" placeholder="Say somthing here..." ref="text" /><br/>
              </div>
              </div>

              <div className="form-group row">
               <div className="offset-sm-1 col-sm-11">
               <input className="btn btn-primary" type="submit" value="Post Comment" />
               </div>
               </div>

          </form>
    );
  }

}

const mapStateToProps = state => ({
  ...state.newsComment
});

const mapDispatchToProps = {
  fetchComment
};


export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(PostComment);
