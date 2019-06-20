
import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import homeScreen from './screens/homeScreen'
import {Icon} from 'native-base'; //https://docs.nativebase.io/Components.html#footer-tabs-def-headref


class recipe extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Recipe!</Text>
      </View>
    );
  }
}
class trips extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Recipe!</Text>
      </View>
    );
  }
}
class newRecipe extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>New Recipe!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: homeScreen,
    navigationOptions: () => ({ 
      tabBarIcon:<Icon name="apps" />  
    }),
  },
  Recipe: { 
    screen: recipe, 
    navigationOptions: () => ({ 
      tabBarIcon:<Icon name="camera" />  
    }),
  },
  NewRecipe: { 
    screen: newRecipe, 
    navigationOptions: () => ({ 
      tabBarIcon:<Icon name="navigate" />  
    }),
  },
  Trips: { 
    screen: trips, 
    navigationOptions: () => ({ 
      tabBarIcon:<Icon name="person" />  
    }),
  },
},
{
  defaultNavigationOptions: ({ navigation }) => ({

  }),
  tabBarOptions: {
    showIcon: true 
  },
});

export default createAppContainer(TabNavigator);