import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SessionWizardActionCreators from '../actions/sessionWizard';


class LanguageChoiceMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    if (visible) {
      return (
        <Row>
          <h2>Choose a Language to Practice</h2>

        </Row>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sessionType: state.sessionWizard.sessionType,
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...SessionWizardActionCreators}, dispatch),
)(LanguageChoiceMenu);
