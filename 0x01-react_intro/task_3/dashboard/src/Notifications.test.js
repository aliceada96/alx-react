import React from 'react';
import Notifications from './Notifications'
import { shallow } from 'enzyme';

describe('Notifications', ()=> {
    it('renders without crashing', ()=> {
        const notification = shallow(<Notifications />);
        expect(notification).toBeDefined();
    });

    it('renders 3 items', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('li')).toHaveLength(3);
    });

    it('renders the text Here is the list of notifications', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('p').text()).toBe('This is the list of notifications');
    })
})
