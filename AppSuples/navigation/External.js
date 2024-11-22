import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Profile from "../screens/Profile";
import Shoping from "../screens/Shoping";
const Stack = createNativeStackNavigator();

export default function Dashboard()
{
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}/>

            <Stack.Screen
            name='Home'
            component={Home}
            options={{headerShown:false}}/>

            <Stack.Screen
            name='Profile'
            component={Profile}
            options={{headerShown:false}}/>

            <Stack.Screen
            name='Shoping'
            component={Shoping}
            options={{headerShown:false}}/>

            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown:false}}/>        
        </Stack.Navigator>
    )
}