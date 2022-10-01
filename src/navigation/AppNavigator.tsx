// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useTheme} from 'native-base';
// import AllStocks from '../screens/AllStocks';
// import StockInfoNew from '../screens/StocksInfoNew';
// import UserProfile from '../screens/UserProfile';
// import AccountDetails from '../screens/AccountDetails';
// import SearchStocks from '../screens/SearchStocks';
// import OrderStocks from '../screens/Order';
// import OrderStatus from '../screens/OrderStatus';
// import Balance from '../screens/Balance';
// import HomeTabs from './TabNavigator';
// import BalanceSuccess from '../screens/Balance/BalanceSuccess';
// import Watchlist from '../screens/WatchList';
// import Notifications from '../screens/Notifications';

// export type NavigationStackParams = {
//   Home: undefined;
//   SearchStocks: undefined;
//   AllStocks: undefined;
//   StockInfoNew: undefined;
//   UserProfile: undefined;
//   AccountDetails: {userDetails: any};
//   OrderStocks: {orderType: string};
//   OrderStatus: {orderDetails: any};
//   Balance: undefined;
//   BalanceSuccess: {balanceDetails: any};
//   Watchlist: undefined;
//   Notifications: undefined;
// };
// const Stack = createNativeStackNavigator<NavigationStackParams>();
// export const AppNavigator = () => {
//   const {colors} = useTheme();
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerBackTitleVisible: false,
//       }}>
//       <Stack.Screen
//         name="Home"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="SearchStocks"
//         component={SearchStocks}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="AllStocks"
//         component={AllStocks}
//         options={{
//           title: 'All Stocks',
//           headerStyle: {
//             backgroundColor: colors.secondary.shade1,
//           },
//           headerTitleStyle: {
//             color: colors.contrast.shade1,
//           },
//         }}
//       />
//       <Stack.Screen
//         name="StockInfoNew"
//         component={StockInfoNew}
//         options={{
//           title: '',
//           headerStyle: {
//             backgroundColor: colors.secondary.shade1,
//           },
//           headerTitleStyle: {
//             color: colors.contrast.shade1,
//           },
//         }}
//       />
//       <Stack.Screen
//         name="UserProfile"
//         component={UserProfile}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="AccountDetails"
//         component={AccountDetails}
//         options={{
//           title: '',
//           headerStyle: {
//             backgroundColor: colors.secondary.shade1,
//           },
//           headerTitleStyle: {
//             color: colors.contrast.shade1,
//           },
//         }}
//       />
//       <Stack.Screen
//         name="OrderStocks"
//         component={OrderStocks}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="OrderStatus"
//         component={OrderStatus}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Balance"
//         component={Balance}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="BalanceSuccess"
//         component={BalanceSuccess}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Watchlist"
//         component={Watchlist}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };
