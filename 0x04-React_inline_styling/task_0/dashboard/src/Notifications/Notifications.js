import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import close from '../assets/close-icon.png';
import  {getLatestNotification} from '../utils/utils.js';

const Notifications = () => {
    return (
        <div className="Notifications">
            <p style={{display: 'inline', marginRight:'80%'}}>Here is the list of notifications</p>
            <button aria-label='close' onClick={console.log('Close button has been clicked')}>
                <img  src={close} alt="close" sizes='.5x.5px'/>
            </button>
                <ul>
                    <NotificationItem type='default' value='New course available' />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
                </ul>
        </div>
    )
}

export default Notifications
