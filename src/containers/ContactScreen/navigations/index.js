import { createMaterialTopTabNavigator } from 'react-navigation';
import routes from './routes';
import config from './config';

export default createMaterialTopTabNavigator(routes, config);
