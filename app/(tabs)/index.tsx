import { Text, View, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import FirstScreen from '@/components/Screens/HomeScreen';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FirstScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
