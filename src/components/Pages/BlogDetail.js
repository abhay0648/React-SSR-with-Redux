import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blogDetailAction';
import style from '../../App.scss'
import BlogDetailContent from './BlogDetailContent';
import PostComment from './PostComment';
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import { Col, Row, Container, CardDeck } from "react-bootstrap";
import { withRouter }  from "react-router";
import PropTypes from 'prop-types';


class BlogDetail extends Component {

  static async preInitStore(store, url) {
    await store.dispatch(fetchBlog());
  }


  componentDidMount() {
    const { loading, error, content } = this.props;
    if (loading || error || content) return;

    this.props.fetchBlog();

  }

  static async preInitStore(store, url) {
    await store.dispatch(fetchBlog());
  }


  componentDidMount() {
    const { loading, error, content } = this.props;
    if (loading || error || content) return;

    this.props.fetchBlog();

  }


  render() {
    let { loading, error, content } = this.props;

    if (loading) {
      return <div>Fetching the detail data...</div>;
    }

    if (error) {
      return (
        <div>
          Could not fetch the detail data
          <br />
          <button onClick={this.props.fetchBlog}>Retry fetching the detail data</button>
        </div>
      );
    }

    if (!content) {
      return <button onClick={this.props.fetchBlog}>Fetch the detail data</button>;
    }



    return <div>

        <Helmet>
            <style>{'body { background-color: #000000; }'}</style>
        </Helmet>

        <Row>

          <CardDeck>
            <div className="app-card-blog" id="app-card-blog">
            <BlogDetailContent key={content.id} index={content.id} content={content}/>
          </div>
        </CardDeck>
        <PostComment/>
         </Row>

        </div>

  }
}

const mapStateToProps = state => ({
  ...state.blogDetailReducer
});


const mapDispatchToProps = {
  fetchBlog
};

export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(BlogDetail);
