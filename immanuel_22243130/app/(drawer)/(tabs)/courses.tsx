import { StyleSheet, View, Text, FlatList } from 'react-native';

const dummyCourses = [
  { id: '1', code: 'DCIT 324', title: 'Advanced Mobile Application Development', credits: 3 },
  { id: '2', code: 'DCIT 302', title: 'Academic Writing II', credits: 3 },
  { id: '3', code: 'DCIT 304', title: 'Human Computer Interaction', credits: 3 },
  { id: '4', code: 'DCIT 308', title: 'Data Structures and Algorithms', credits: 3 },
  { id: '5', code: 'DCIT 312', title: 'Information Security', credits: 3 },
];

export default function Courses() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.credits}>{item.credits} Credits</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  courseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  code: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  title: {
    fontSize: 15,
    marginVertical: 4,
    color: '#333',
  },
  credits: {
    fontSize: 13,
    color: '#666',
  },
});
