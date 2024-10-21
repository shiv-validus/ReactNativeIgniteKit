// ReactotronConfig.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { trackGlobalErrors } from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.setAsyncStorageHandler(AsyncStorage.setItem)
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(trackGlobalErrors()) // intercept global errors
    .connect(); // let's connect!

  // Clear Reactotron on reload
  Reactotron.clear();
}

export default Reactotron;
