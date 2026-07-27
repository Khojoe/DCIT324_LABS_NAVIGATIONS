import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { feedEvents } from './index';

export default function EventDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const event = feedEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Event not found.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{event.title}</Text>
      <Text style={{ color: '#666', marginBottom: 12 }}>{event.date}</Text>
      <Text style={{ marginBottom: 20 }}>{event.description}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
