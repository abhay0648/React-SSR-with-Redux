import React from 'react';
import PropTypes from 'prop-types';
import  "../../App.scss";
import { withRouter } from 'react-router';
import { Alert } from 'react-alert'
import { connect } from 'react-redux';


  class BlogDetailContent extends React.Component {

    routeChange(blog) {
       let path = '/blog_detail';
        this.props.history.push(path);
     }


    render() {
        return (
           <div className="card">
           <div onClick={() => { this.routeChange(this.props.content)}}>
            <CardHeader category={this.props.content.category} image={this.props.content.image}/>
            <CardBody title={this.props.content.title} date={this.props.content.publish_date}
            description={this.props.content.short_description}/>
            </div>
          </div>
      )
  }
}

class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.date}</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.description}</p>
      </div>
    )
  }
}

BlogDetailContent.defaultProps = {
    content: {},
    history: {}
};

BlogDetailContent.propTypes = {
    content: PropTypes.object,
    history : PropTypes.object
};



export default BlogDetailContent;
