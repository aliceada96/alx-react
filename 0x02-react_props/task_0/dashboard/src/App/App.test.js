import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
    });
