import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MutualFunds from '../screens/MutualFunds/MutualFunds';
import {Box, Text, useTheme} from 'native-base';
import StocksIcon from '../icons/stocks.svg';
import ProfileIcon from '../icons/profile.svg';
import WalletIcon from '../icons/wallet.svg';
import MutualFundsIcon from '../icons/mutualfunds.svg';
import UserProfile from '../screens/UserProfile';
import Balance from '../screens/Balance';

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Stocks') {
            return (
              <Box
                p={'8px'}
                borderRadius={'8px'}
                bg={focused ? 'primary.shade1' : 'secondary.shade1'}>
                <StocksIcon
                  fill={focused ? colors.white : colors.contrast.shade3}
                />
              </Box>
            );
          } else if (route.name === 'MutualFunds') {
            return (
              <Box
                p={'8px'}
                borderRadius={'8px'}
                bg={focused ? 'primary.shade1' : 'secondary.shade1'}>
                <MutualFundsIcon
                  fill={focused ? colors.white : colors.contrast.shade3}
                />
              </Box>
            );
          } else if (route.name === 'Wallet') {
            return (
              <Box
                p={'8px'}
                borderRadius={'8px'}
                bg={focused ? 'primary.shade1' : 'secondary.shade1'}>
                <WalletIcon
                  fill={focused ? colors.white : colors.contrast.shade3}
                />
              </Box>
            );
          } else if (route.name === 'Profile') {
            return (
              <Box
                p={'8px'}
                borderRadius={'8px'}
                bg={focused ? 'primary.shade1' : 'secondary.shade1'}>
                <ProfileIcon
                  fill={focused ? colors.white : colors.contrast.shade3}
                />
              </Box>
            );
          }
        },
        tabBarLabel: ({focused}) => {
          if (route.name === 'Stocks') {
            return (
              <Text
                color={focused ? colors.primary.shade1 : colors.card.shade2}>
                Stocks
              </Text>
            );
          } else if (route.name === 'Wallet') {
            return (
              <Text
                color={focused ? colors.primary.shade1 : colors.card.shade2}>
                Wallet
              </Text>
            );
          } else if (route.name === 'MutualFunds') {
            return (
              <Text
                color={focused ? colors.primary.shade1 : colors.card.shade2}>
                Mutual Funds
              </Text>
            );
          } else if (route.name === 'Wallet') {
            return (
              <Text
                color={focused ? colors.primary.shade1 : colors.card.shade2}>
                Wallet
              </Text>
            );
          } else if (route.name === 'Profile') {
            return (
              <Text
                color={focused ? colors.primary.shade1 : colors.card.shade2}>
                Profile
              </Text>
            );
          }
        },
      })}>
      <Tab.Screen
        name="Stocks"
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.secondary.shade2,
            borderTopWidth: 0,
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="MutualFunds"
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.secondary.shade2,
            borderTopWidth: 0,
          },
        }}
        component={MutualFunds}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.secondary.shade2,
            borderTopWidth: 0,
          },
        }}
        component={Balance}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.secondary.shade2,
            borderTopWidth: 0,
          },
        }}
        component={UserProfile}
      />
    </Tab.Navigator>
  );
};
export default HomeTabs;
