import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import close from '../assets/close-icon.png';
import  {getLatestNotification} from '../utils/utils.js';
import PropTypes from  "prop-types";

const Notifications = (displayDrawer) => {
    return (
        <>
           {displayDrawer ? (
        <div className="'flex-area'">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        <div className="Notifications">
          <div className='close-btn'
            style={{ fontWeight: "bold", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
            aria-label="Close" role='button' tabIndex={0} >
              <img src={close} alt="Close button"/>
          </div>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
        </div>
      ) : (
        <div className="menuItem">
        </div>
      )}
    </>
    )
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications
