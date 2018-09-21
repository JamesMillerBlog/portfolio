import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import getDevice from './../../components/hocs/getDevice';
import getBrowser from './../../components/hocs/getBrowser';
import getOSVersion from './../../components/hocs/getOSVersion';
import GridContainer from './../../components/locs/GridContainer/GridContainer';
import {
  fetchContent, fetchUpdateUrl, fetchScrolledItem, fetchScrolledHeroIcon
} from './../../actions';
import homePageConfig from './assets/config/homePageConfig';

class Home extends Component {

  componentDidMount() {
    this.props.fetchUpdateUrl('/');
    this.props.fetchScrolledItem(null);
    this.props.fetchScrolledHeroIcon('none');
  }

  render() {
    if (this.props.updateUrl !== '/') return <Redirect to={this.props.updateUrl} />;
    this.props.fetchContent(homePageConfig);
    return <GridContainer />;
  }
}

// map the state of data called from fetchUsers to users[state.users]
const mapStateToProps = (state) => ({
  updateUrl: state.updateUrl
});

export default {
  // take props from admins and pass them into require Auth
  component: compose(
    getDevice, getOSVersion, getBrowser,
    connect(mapStateToProps, {
      fetchContent, fetchUpdateUrl, fetchScrolledItem, fetchScrolledHeroIcon
    })
  )(Home)
};
