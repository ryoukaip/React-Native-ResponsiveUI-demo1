// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import ResponsiveUI from './components/ResponsiveUI';
import ResponsiveUI_useWindowDimensions from './components/ResponsiveUI_useWindowDimensions';
export default function App() {
  return (
    <SafeAreaView>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <ResponsiveUI_useWindowDimensions/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
