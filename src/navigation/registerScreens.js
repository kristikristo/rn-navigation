import { Navigation } from 'react-native-navigation';
import screens from './screens';

export const registerScreens = () => {
  Object.keys(screens).map((key) => screens[key]).forEach((screen) => {
    Navigation.registerComponent(screen.id, screen.generator);
  })
}