import { NavigationStackParams } from './navigation/AppNavigator'
import { NavigationStackParams as AuthNavigationStackParams } from './navigation/AuthNavigator'

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends NavigationStackParams,
        AuthNavigationStackParams {}
  }
}
