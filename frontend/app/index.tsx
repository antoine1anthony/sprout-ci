import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className='flex-1 p-4 bg-white'>
      <View className='space-y-4'>
        <Text className='text-2xl font-bold text-gray-900'>
          Welcome to CI/CD Dashboard
        </Text>

        <View className='bg-gray-50 p-4 rounded-lg'>
          <Text className='text-lg font-semibold text-gray-800 mb-2'>
            Quick Actions
          </Text>
          <View className='space-y-2'>
            <TouchableOpacity className='bg-blue-500 p-3 rounded-lg'>
              <Text className='text-white text-center font-medium'>
                Connect Repository
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className='bg-green-500 p-3 rounded-lg'>
              <Text className='text-white text-center font-medium'>
                View Pipelines
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className='bg-gray-50 p-4 rounded-lg'>
          <Text className='text-lg font-semibold text-gray-800 mb-2'>
            Recent Activity
          </Text>
          <Text className='text-gray-600'>No recent activity</Text>
        </View>
      </View>
    </View>
  );
}
