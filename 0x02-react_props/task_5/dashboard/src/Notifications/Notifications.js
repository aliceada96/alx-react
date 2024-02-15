import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import close from '../assets/close-icon.png';
import PropTypes from  "prop-types";
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
    return (
        <>
        {displayDrawer ? (
        <div className="'flex-area'">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        <div className="Notifications">
          {<p>Here is the list of notifications</p>}
          <ul>
            {listNotifications && listNotifications.length > 0 ? (
            listNotifications.map(({ id, html, type, value }) => (
              <>
                <NotificationItem key={id} type={type} value={value} html={html} />
              </>
            ))
      ) : (
        <div className="">
          <NotificationItem value="No new notification for now" />
          <div className='close-btn'
            style={{ fontWeight: "bold", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
            aria-label="Close" role='button' tabIndex={0} >
              <img src={close} alt="Close button"/>
          </div>
        </div>
      )}
      </ul>
      </div>
      </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </>
    );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications
