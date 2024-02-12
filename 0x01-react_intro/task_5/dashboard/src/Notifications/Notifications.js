import React from 'react';
import '.src/Notifications/Notifications.css';
import  {getLatestNotification} from './utils/utils';
import closeIcon from './close-icon.png';

const Notifications = () => {
    return (
        <div className="Notifications">
            <p style={{display: 'inline', marginRight:'80%'}}>Here is the list of notifications</p>
            <button aria-label='close' onClick={console.log('Close button has been clicked')}>
                <img  src={closeIcon} alt="close" sizes='.5x.5px'/>
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
