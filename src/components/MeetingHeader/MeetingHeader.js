import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './MeetingHeader.scss';
import { MeetingLink } from 'components';

@cssModules(styles)
export default class MeetingHeader extends Component {
  static propTypes = {
    onMeetingNameChange: PropTypes.func.isRequired,
    meetingLocation: PropTypes.string.isRequired,
    meetingName: PropTypes.string.isRequired
  }
  render() {
    const { props } = this;
    return (
      <div styleName="root">
        <div styleName="linkBlock">
          <MeetingLink location={props.meetingLocation} />
        </div>
        <div styleName="label">
          Action Meeting
        </div>
        <input styleName="name"
               onChange={props.onMeetingNameChange}
               placeholder={props.meetingName}
               type="text"
               value={props.meetingName} />
      </div>
    );
  }
}
