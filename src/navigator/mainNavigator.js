import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial165922Navigator from '../features/Tutorial165922/navigator';
import NotificationList165894Navigator from '../features/NotificationList165894/navigator';
import Settings165893Navigator from '../features/Settings165893/navigator';
import Settings165885Navigator from '../features/Settings165885/navigator';
import UserProfile165883Navigator from '../features/UserProfile165883/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial165922: { screen: Tutorial165922Navigator },
NotificationList165894: { screen: NotificationList165894Navigator },
Settings165893: { screen: Settings165893Navigator },
Settings165885: { screen: Settings165885Navigator },
UserProfile165883: { screen: UserProfile165883Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
