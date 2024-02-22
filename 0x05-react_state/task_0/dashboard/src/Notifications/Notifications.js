import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import close from '../assets/close-icon.png';
import PropTypes from  "prop-types";
import NotificationItemShape  from './NotificationItemShape.js'

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{ fontWeight: "bold", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
            aria-label="Close"
            onClick={(e) => {
              console.log("Close button has been clicked");
            }}
          >
            <img src={close} alt="close icon" width="10px" />
          </button>
          {listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
          <ul>
            {listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
            {listNotifications.map((val, idx) => {
              return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} />;
            })}
          </ul>
        </div>
      ) : null}
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