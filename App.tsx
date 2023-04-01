import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Apercu-Bold': require('./src/assets/fonts/Apercu_Bold.otf'),
    Apercu: require('./src/assets/fonts/Apercu_Regular.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Provider store={store}>
      <View className="bg-white flex-1">
        <HomeScreen />
      </View>
    </Provider>
  );
}
