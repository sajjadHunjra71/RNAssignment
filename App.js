import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Routs from './src/navigation/Routs'

export default function App() {
  return (
    <View style={styles.container}>
      <Routs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
