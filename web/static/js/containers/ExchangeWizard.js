import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Const from '../constants';
import * as SessionWizardActionCreators from '../actions/sessionWizard';


class ExchangeWizard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { setSessionType } = this.props;

    setSessionType(Const.SESSION_EXCHANGE);
  }

  render() {
    return (
      <div>
        <h2>Language Exchange :)</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...SessionWizardActionCreators}, dispatch),
)(ExchangeWizard);
