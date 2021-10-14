// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replace(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(...args));
  }
}

export function pop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}

export function reset() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'AuthFlow'}],
      }),
    );
  }
}

// add other navigation functions that you need and export them

// For Example

// import { StackActions } from '@react-navigation/native';

// export function push(...args) {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(StackActions.push(...args));
//   }
// }
