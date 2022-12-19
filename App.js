import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import { useState, useCallback } from "react";
import { AppLoading } from "expo";
import Navigator from './routes/HomeStack.js'



export default function App() {
  // const [fontsLoaded, setFontsLoaded]=useState(false)

  // const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
    "Roboto-bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
  <Navigator/>

//   <Stack.Navigator>

// <Stack.Screen name="Home" component={Home} />

//   </Stack.Navigator>
  )


}

const styles = StyleSheet.create({

}); 
