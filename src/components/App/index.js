import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import {IndexLinkContainer} from 'react-router-bootstrap'
import { fetchGeneral } from '../../actions/general';
import Routing from './Routing';
import routes from '../../utils/routes';
import  "../../App.scss";


class App extends Component {
  /* SERVERSIDE-ONLY:START */
  static async preInitStore(store, url) {
    await store.dispatch(fetchGeneral());
    await Routing.preInitStore(store, url);
  }
  /* SERVERSIDE-ONLY:END */

  componentDidMount() {
    const { loading, error, name } = this.props;
    if (loading || error || name) return;

    this.props.fetchGeneral();
  }

  render() {
    let { loading, error, name } = this.props;

    return (
      <React.Fragment>
        <div>
            {loading ? (
              'Fetching general data...'
            ) : error ? (
              <div>
                Could not fetch the general data
                <br />
                <button onClick={this.props.fetchGeneral}>Retry fetching the general data</button>
              </div>
            ) : (
              <div >
                <Navbar bg="dark" variant="dark" sticky="top">

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <IndexLinkContainer to={routes[0].path}>
                                    <Nav.Link>{routes[0].title}</Nav.Link>
                                    </IndexLinkContainer>

                                    <IndexLinkContainer to={routes[1].path}>
                                    <Nav.Link>{routes[1].title}</Nav.Link>
                                    </IndexLinkContainer>

                                    <IndexLinkContainer to={routes[2].path}>
                                    <Nav.Link>{routes[2].title}</Nav.Link>
                                    </IndexLinkContainer>

                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
               <br />
              <Switch>
              {routes.map((route,index) => (
                <Route key={index} path={route.path} keyProp={route.path} component={route.component} exact={route.exact} />
              ))}
              </Switch>
              </div>
            )}
            </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  name: state.general.name,
  loading: state.general.loading
});

const mapDispatchToProps = {
  fetchGeneral
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
