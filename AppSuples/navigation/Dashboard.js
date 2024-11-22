import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Shoping from "../screens/Shoping";
const Drawer = createDrawerNavigator();
export default function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Shoping'
        component={Shoping}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
