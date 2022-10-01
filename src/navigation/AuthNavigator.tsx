import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthHome from '../screens/AuthHome';
// import AuthSignIn from '../screens/AuthSignIn';
// import AuthSignUp from '../screens/AuthSignUp';
// import AuthEnterMobile from '../screens/AuthEnterMobile';
// import Header from '../components/Header';
// import AuthEnterOtp from '../screens/AuthEnterOtp';
// import AuthEnterPan from '../screens/AuthEnterPan';
// import AuthSelectOptions from '../screens/AuthSelectOptions';
// import AuthTradingInvestments from '../screens/AuthTradingInvestments';
// import KycParentsName from '../screens/KycParentsName';

export type NavigationStackParams = {
  AuthHome: undefined;
  AuthSignIn: undefined;
  AuthSignUp: undefined;
  AuthEnterMobile: undefined;
  AuthEnterOtp: undefined;
  AuthEnterPan: undefined;
  AuthSelectOptions: undefined;
  AuthTradingInvestments: undefined;
  KycParentsName: undefined;
};

const Stack = createNativeStackNavigator<NavigationStackParams>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthHome"
        component={AuthHome}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="AuthSignIn"
        component={AuthSignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthSignUp"
        component={AuthSignUp}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="AuthEnterMobile"
        component={AuthEnterMobile}
        options={{
          header: () => <Header headerTitle="Enter Mobile Number" />,
        }}
      />
      <Stack.Screen
        name="AuthEnterOtp"
        component={AuthEnterOtp}
        options={{
          header: () => <Header headerTitle="Enter OTP" />,
        }}
      />
      <Stack.Screen
        name="AuthEnterPan"
        component={AuthEnterPan}
        options={{
          header: () => <Header headerTitle="Enter PAN" />,
        }}
      />
      <Stack.Screen
        name="AuthSelectOptions"
        component={AuthSelectOptions}
        options={{
          header: () => <Header headerTitle="Select Options" />,
        }}
      />
      <Stack.Screen
        name="AuthTradingInvestments"
        component={AuthTradingInvestments}
        options={{
          header: () => <Header headerTitle="Trading & Investment" />,
        }}
      />
      <Stack.Screen
        name="KycParentsName"
        component={KycParentsName}
        options={{
          header: () => <Header headerTitle="Details Required to finish KYC" />,
        }}
      /> */}
    </Stack.Navigator>
  );
};
