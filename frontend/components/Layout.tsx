import { View } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <View className='flex-1 bg-white'>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f3f4f6',
          },
          headerTintColor: '#1f2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </View>
  );
}
