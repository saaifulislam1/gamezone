import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ReviewDetail from './../screens/ReviewDetail';
import Home from './../screens/Home';
import About from './../screens/About';

const screens = {
    // ReviewDetail: {
    //     screen: ReviewDetail,
    //   },
    Home: {
      screen: Home,
    },
    ReviewDetail: {
      screen: ReviewDetail,
    },
  };
  
  // home stack navigator screens
  const HomeStack = createStackNavigator(screens);
  
  export default createAppContainer(HomeStack);