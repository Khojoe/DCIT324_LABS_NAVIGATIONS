import { FlatList, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export const feedEvents = [
  { id: '1', title: 'Freshers Orientation', date: 'Aug 1, 2026', description: 'Welcome session for new students at Great Hall, 9am.' },
  { id: '2', title: 'Tech Talk: AI on Campus', date: 'Aug 3, 2026', description: 'A talk on practical AI applications, hosted by the CS Department.' },
  { id: '3', title: 'Inter-Hall Football Finals', date: 'Aug 5, 2026', description: 'The final match of the inter-hall football competition at the Legon Sports Stadium.' },
  { id: '4', title: 'Career Fair 2026', date: 'Aug 8, 2026', description: 'Meet recruiters from top companies at the Business School quad.' },
  { id: '5', title: 'Cultural Night', date: 'Aug 10, 2026', description: 'An evening celebrating Ghanaian and African culture, food, and music.' },
];

export default function Feed() {
  const router = useRouter();

  return (
    <FlatList
      data={feedEvents}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/(drawer)/(tabs)/home/${item.id}`)}
          style={{ marginBottom: 16 }}
        >
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ color: '#666' }}>{item.date}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
