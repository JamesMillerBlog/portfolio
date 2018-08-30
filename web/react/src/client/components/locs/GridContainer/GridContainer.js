import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchScrolledItem,
  fetchDeviceType,
  fetchBackgroundPos,
  fetchSiteAnimating
} from './../../../actions';
import ItemContainer from './ItemContainer/ItemContainer';
import Hero from './Hero/Hero';
import Video from './Video/Video';
import './assets/scss';

class GridContainer extends Component {

  constructor() {
    super();
    this.x = 0;
    this.y = 0;
  }

  componentWillMount() {
    if (this.props.deviceType === 'laptop') {
      const that = this;
      setTimeout(() => {
        that.props.fetchSiteAnimating('startAnimating');
        setTimeout(() => that.props.fetchSiteAnimating('finishedAnimating'), 1000);
      }, 500);
    } else this.props.fetchSiteAnimating('finishedAnimating');
  }

  onMouseMove(e) {
    const yMouseAlign = 0.63;
    const xMouseAlign = 0.695;
    const lMouseX = (window.innerWidth * xMouseAlign) - e.screenX;
    const lMouseY = (window.innerHeight * yMouseAlign) - e.screenY;
    const mouse = { x: lMouseX, y: lMouseY };

    this.calcBackgroundMovement(mouse);
  }

  calcBackgroundMovement(mousePos) {
    const speed = 0.1;
    const x = mousePos.x * speed;
    const y = mousePos.y * speed;
    const background = { x, y };
    this.props.fetchBackgroundPos(background);
  }

  setClass() {
    const deviceType = this.props.deviceType;
    const gridContainerClasses = [`grid-container-${deviceType}`];
    if (deviceType === 'laptop') gridContainerClasses.push(`item${this.props.scrolledItem}scroll`);
    return gridContainerClasses;
  }

  renderItems() {
    const items = [];
    // push all content into the items array
    for (let x = 0; x < 9; x++) {
      if (x === 4) items.push(<Hero number={x} key={x} />);
      else items.push(<ItemContainer number={x} key={x} />);
    }
    items.push(<Video key={9} />);
    return items;
  }


  render() {
    const divStyle = {
      marginLeft: `${this.props.backgroundPos.x}px`,
      marginTop: `${this.props.backgroundPos.y}px`
    };
    /** LOGIC FOR DISPLAYING CONTENT CORRECLTY ON DEVICE + BROWSER **/
    return (
        <div className='mouseMovementContainer' onMouseMove={this.onMouseMove.bind(this)} style={divStyle}>
          <div className={this.setClass().join(' ')}>
            {this.renderItems()}
          </div>
        </div>
    );
  }
}

// map the state of data called from fetchUsers to users[state.users]
function mapStateToProps(state) {
  return {
    scrolledItem: state.scrolledItem,
    deviceType: state.deviceType,
    backgroundPos: state.backgroundPos,
    siteAnimating: state.siteAnimating
  };
}

export default connect(mapStateToProps, {
  fetchScrolledItem,
  fetchDeviceType,
  fetchBackgroundPos,
  fetchSiteAnimating
})(GridContainer);
