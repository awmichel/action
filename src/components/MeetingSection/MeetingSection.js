import React, {PropTypes, Component} from 'react';

export default class MeetingSection extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
  }
  render() {
    const styles = require('./MeetingSection.scss');
    const props = this.props;
    const rootClassName = props.active ? styles.rootActive : styles.root;
    const bulletClassName = props.active ? styles.bulletActive : styles.bullet;
    const headingClassName = props.active ? styles.headingActive : styles.heading;
    return (
      <div className={rootClassName}>
        <div className={bulletClassName}>
          {props.position}
        </div>
        <div className={headingClassName}>
          {props.heading}
        </div>
        <div className={styles.description}>
          {props.description}
        </div>
        <div className="row">
          <div className="col-lg-6">
            {props.children}
          </div>
        </div>
      </div>
    );
  }
}
