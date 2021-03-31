import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBespoke } from '../../actions/bespokeAction';
import style from '../../App.scss'
import BlogContent from './BlogContent';
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import { Col, Row, Container, CardDeck } from "react-bootstrap";
import { withRouter }  from "react-router";
import PropTypes from 'prop-types';


class Bespoke extends Component {

  static async preInitStore(store, url) {
    await store.dispatch(fetchBespoke());
  }


  componentDidMount() {
    const { loading, error, content } = this.props;
    if (loading || error || content) return;

    this.props.fetchBespoke();

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
          <button onClick={this.props.fetchUnicorn}>Retry fetching the detail data</button>
        </div>
      );
    }

    if (!content) {
      return <button onClick={this.props.fetchUnicorn}>Fetch the detail data</button>;
    }



    return <div>

        <Helmet>
            <style>{'body { background-color: #000000; }'}</style>
        </Helmet>

        <Col>

          <CardDeck>
            <div className="app-card-list" id="app-card-list">
            {
              Object
              .keys(content)
              .map(key => <BlogContent key={key} index={key} content={content[key]}
                history = {this.props.history}/>)
              }
          </div>
        </CardDeck>

         </Col>

        </div>

  }
}

const mapStateToProps = state => ({
  ...state.bespokeReducer
});


const mapDispatchToProps = {
  fetchBespoke
};

export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(Bespoke);
