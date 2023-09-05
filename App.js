import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ForgorPassword from './src/pages/ForgorPasswordPage';
import LoginPageHeineken from './src/pages/Heineken';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPageHeineken/>
    </View>
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
