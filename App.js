import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './pages/Home.page';
import { CheckoutPage } from './pages/Checkout.page';
import Header from './components/header.component';


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false}}>
        <Drawer.Screen name='Home' component={HomePage} />
        <Drawer.Screen name='Checkout' component={CheckoutPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}