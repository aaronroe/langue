import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Const from '../constants';
import * as SessionWizardActionCreators from '../actions/sessionWizard';


class PracticeWizard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { setSessionType } = this.props;

    setSessionType(Const.SESSION_PRACTICE);
  }

  render() {
    return (
      <div>
        <h2>Language Practice :)</h2>
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
)(PracticeWizard);

