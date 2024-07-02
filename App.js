import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './pages/Home.page';
import { CheckoutPage } from './pages/Checkout.page';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Screen name='Home' component={HomePage} />
      <Drawer.Screen name='Checkout' component={CheckoutPage} />
    </NavigationContainer>
  );
}