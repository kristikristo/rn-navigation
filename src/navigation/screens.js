import Home from '../screens/Home';
import Cart from '../screens/Cart';
import SideBar from '../screens/Sidebar';
import EmptySidebar from '../screens/EmptySidebarTab';

const screens = {
  Home: {
    id: 'demo.Home',
    title: 'Home',
    generator: () => Home,
  },
  CartScreen: {
    id: 'demo.Cart',
    title: 'Cart',
    generator: () => Cart,
  },
  SidebarScreen: {
    id: 'demo.Sidebar',
    title: 'Sidebar',
    generator: () => SideBar,
  },
  EmptySidebarTab: {
    id: 'demo.EmptySidebarTab',
    title: '',
    generator: () => EmptySidebar,
  }
}

export default screens;