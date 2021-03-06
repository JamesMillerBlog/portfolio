import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import getDevice from './../../components/hocs/getDevice';
import getBrowser from './../../components/hocs/getBrowser';
import getOSVersion from './../../components/hocs/getOSVersion';
import GridContainer from './../../components/locs/GridContainer/GridContainer';
import servicesPageConfig from './assets/config/servicesPageConfig';
import {
  fetchContent, fetchUpdateUrl, fetchScrolledItem, fetchScrolledHeroIcon, fetchHeroKeyPress
} from './../../actions';

class Services extends Component {
  componentWillMount() {
    this.props.fetchScrolledItem(null);
    this.props.fetchScrolledHeroIcon('none');
    this.props.fetchContent(servicesPageConfig);
    this.props.fetchUpdateUrl('null');
    this.props.fetchHeroKeyPress(false);
  }

  render() {
    return <GridContainer />;
  }
}

export default {
  // take props from admins and pass them into require Auth
  component: compose(
    getDevice, getOSVersion,
    connect(null, {
      fetchContent, fetchUpdateUrl, fetchScrolledItem, fetchScrolledHeroIcon, fetchHeroKeyPress
    })
  )(Services)
};
