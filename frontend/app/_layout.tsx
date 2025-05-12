import { Stack } from 'expo-router';
import Layout from '../components/Layout';

export default function RootLayout() {
  return (
    <Layout>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'CI/CD Dashboard',
          }}
        />
      </Stack>
    </Layout>
  );
}
