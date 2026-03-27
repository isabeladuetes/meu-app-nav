import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import MessagesScreen from './screens/MessagesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack navigation: Home -> Perfil
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'HomeTab') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Mensagens') {
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                        } else if (route.name === 'Config') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen
                    name="HomeTab"
                    component={HomeStack}
                    options={{ title: 'Início', headerShown: false }}/>
                <Tab.Screen name="Mensagens" component={MessagesScreen} />
                <Tab.Screen name="Config" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
