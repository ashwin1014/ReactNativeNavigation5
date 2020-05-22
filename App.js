import React from 'react';

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import Tab3 from './src/screens/tabs/tab3';

import Detail from './src/screens/detail';
import Feed from './src/screens/feed';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const App = () => {
  const createTopTabs = ({route}) => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab1"
          component={Tab1}
          options={{title: route.params.name}}
        />
        <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    );
  };

  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            title: 'My Feed',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#ccc',
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
        <Stack.Screen name="Top Tabs" children={createTopTabs} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favorites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
