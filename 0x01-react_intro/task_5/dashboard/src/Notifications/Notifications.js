import React from 'react';
import './Notifications.css';
import  {getLatestNotification} from '../utils/utils.js';

const Notifications = () => {
    return (
        <div className="Notifications">
            <p style={{display: 'inline', marginRight:'80%'}}>Here is the list of notifications</p>
            <button aria-label='close' onClick={console.log('Close button has been clicked')}>
                <img  src='./close-icon.png' alt="close" sizes='.5x.5px'/>
            </button>
                <ul>
                    <li data='default'>New course available</li>
                    <li data='urgent'>New resume available</li>
                    <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
        </div>
    )
}

export default Notifications
