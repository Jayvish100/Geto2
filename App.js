import React, {useState, useEffect} from 'react';
import {LogBox, TouchableOpacity, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef} from './src/RootNavigation';
import VectorImage from 'react-native-vector-image';
import * as RootNavigation from './src/RootNavigation';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

import OnBoardingScreen from './src/screens/OnBoardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import DashboardScreen from './src/screens/DashboardScreen';
import PledgeScreen from './src/screens/PledgeScreen';
import VoucherScreen from './src/screens/VoucherScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import PledgeDetailsScreen from './src/screens/PledgeDetailsScreen';
import VoucherDetailsScreen from './src/screens/VoucherDetailsScreen';
import Blank from './src/screens/Blank';
import HeaderLeft from './src/components/HeaderLeft';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Dashboard" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard';

  switch (routeName) {
    case 'Dashboard':
      return '';
    case 'Pledge':
      return 'PLEDGES';
    case 'Voucher':
      return 'VOUCHERS';
    case 'Profile':
      return 'PROFILE';
  }
}

function showHeaderLeft(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard';

  switch (routeName) {
    case 'Dashboard':
      return () => <HeaderLeft />;
  }
}

const Stack = createStackNavigator();

function AuthFlowStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function MainFlowTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/DashIcon2.svg')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/DashIcon1.svg')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Pledge"
        component={PledgeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/PledgeIcon2.svg')}
                style={{height: 26, width: 24}}
              />
            ) : (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/PledgeIcon1.svg')}
                style={{height: 26, width: 24}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Voucher"
        component={VoucherScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/VoucherIcon2.svg')}
                style={{height: 28, width: 24}}
              />
            ) : (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/VoucherIcon1.svg')}
                style={{height: 28, width: 24}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Blank}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/ProfileIcon1.svg')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <VectorImage
                source={require('./src/assets/svg/TabBarIcons/ProfileIcon1.svg')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppWithOnBoarding = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlowStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainFlow"
          component={MainFlowTabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: showHeaderLeft(route),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginRight: 15}}
                  onPress={() => RootNavigation.navigate('Scan')}>
                  <VectorImage
                    source={require('./src/assets/svg/TabBarIcons/ScanIcon.svg')}
                    style={{height: 24, width: 24}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 10}}
                  onPress={() => RootNavigation.navigate('Notify')}>
                  <VectorImage
                    source={require('./src/assets/svg/TabBarIcons/NotificationIcon.svg')}
                    style={{height: 24, width: 24}}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'left',
          })}
        />
        <Stack.Screen
          name="Scan"
          component={ScannerScreen}
          options={{
            headerTitle: 'SCAN',
            headerTitleAlign: 'left',
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Notify"
          component={NotificationScreen}
          options={{
            headerTitle: 'NOTIFICATIONS',
            headerTitleAlign: 'left',
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="PledgeDetail"
          component={PledgeDetailsScreen}
          options={{
            headerTitle: 'PLEDGE DETAIL',
            headerTintColor: '#fff',
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Screen
          name="VoucherDetail"
          component={VoucherDetailsScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: 'VOUCHER DETAIL',
          }}
        />
        <Stack.Screen
          name="Prof"
          component={ProfileScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: 'PROFILE',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: 'EDIT PROFILE',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWithoutOnBoarding = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlowStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainFlow"
          component={MainFlowTabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: showHeaderLeft(route),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginRight: 15}}
                  onPress={() => RootNavigation.navigate('Scan')}>
                  <VectorImage
                    source={require('./src/assets/svg/TabBarIcons/ScanIcon.svg')}
                    style={{height: 24, width: 24}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 10}}
                  onPress={() => RootNavigation.navigate('Notify')}>
                  <VectorImage
                    source={require('./src/assets/svg/TabBarIcons/NotificationIcon.svg')}
                    style={{height: 24, width: 24}}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'left',
          })}
        />
        <Stack.Screen
          name="Scan"
          component={ScannerScreen}
          options={{
            headerTitle: 'SCAN',
            headerTitleAlign: 'left',
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Notify"
          component={NotificationScreen}
          options={{
            headerTitle: 'NOTIFICATIONS',
            headerTitleAlign: 'left',
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="PledgeDetail"
          component={PledgeDetailsScreen}
          options={{
            headerTitle: 'PLEDGE DETAIL',
            headerTintColor: '#fff',
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Screen
          name="VoucherDetail"
          component={VoucherDetailsScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: 'VOUCHER DETAIL',
          }}
        />
        <Stack.Screen
          name="Prof"
          component={ProfileScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: 'PROFILE',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: 'EDIT PROFILE',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return <AppWithOnBoarding />;
  } else {
    return <AppWithoutOnBoarding />;
  }
};

export default () => {
  LogBox.ignoreLogs([
    'AsyncStorage has been extracted from react-native core',
    'Sending `onAnimatedValueUpdate` with no listeners registered',
  ]);
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <App />
    </Provider>
  );
};
