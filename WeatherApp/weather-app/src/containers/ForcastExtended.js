import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForcastExtended from './../components/ForcastExtended'

class ForcastExtendedContainer extends Component {
  render() {
    if(!this.props.city) return;
    return (
      <ForcastExtended city={this.props.city}></ForcastExtended>
    );
  }
}

ForcastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

const mapStatetoProps = ({ city }) => ({city})


export default connect(null,mapStatetoProps)(ForcastExtendedContainer);