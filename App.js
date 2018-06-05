import { Navigation } from 'react-native-navigation';
import { AsyncStorage, Platform } from 'react-native';
import { registerScreens } from './src/navigation/registerScreens';
import * as consts from './src/consts';

export default class App {
  constructor() {
    /**
     * 1. Register Screen
     * 2. Set selected tab to 1
     * 3. Initialize the tabbar
     */

    registerScreens();
    
    const initialTabIndex = 0;
    
    this.updateAsyncStorage(initialTabIndex);

    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'demo.Home',
          title: 'Home',
          icon: Platform.OS === 'android' ? require('./data/icons/ic_shopping_cart_white/android.png')
          : require('./data/icons/ic_shopping_cart_white/ios.png'),    
        },
        {
          label: 'Cart',
          screen: 'demo.Cart',
          title: 'Cart',
          icon: Platform.OS === 'android' ? require('./data/icons/ic_shopping_cart_white/android.png')
          : require('./data/icons/ic_shopping_cart_white/ios.png'),
        },
        {
          label: 'Sidebar',
          screen: 'demo.EmptySidebarTab',
          title: '',
          icon: Platform.OS === 'android' ? require('./data/icons/ic_menu_white/android.png')
          : require('./data/icons/ic_menu_white/ios.png'),
        },
      ],
      tabsStyle: {
        tabBarButtonColor: '#ffff00',
        tabBarSelectedButtonColor: '#ff9900',
        tabBarBackgroundColor: '#551A8B',
        initialTabIndex,
      },
      appStyle: {
        orientation: 'portrait',
        bottomTabBadgeTextColor: 'red',
        bottomTabBadgeBackgroundColor: 'green',
        hideBackButtonTitle: true
      },
      drawer: {
        right: {
          screen: 'demo.Sidebar',
          passProps: {},
        },
        style: {
          drawerShadow: true,
          contentOverlayColor: 'rgba(0,0,0,0.25)',
          rightDrawerWidth: 50,
          shouldStretchDrawer: true
        },
        type: 'MMDrawer',
        animationType: 'slide',
        disableOpenGesture: true
      },
    });
  }

  async updateAsyncStorage(index) {
    try {
      await AsyncStorage.setItem(consts.SELECTED_TAB, `${index}`);
    } catch (error) {
      console.log('An error ocurred while saving data');
    }
  }
}