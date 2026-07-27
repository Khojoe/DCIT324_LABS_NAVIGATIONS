import { StyleSheet, View, Text, FlatList } from 'react-native';

const dummyTimetable = [
  { id: '1', day: 'Monday', time: '09:00 AM - 11:30 AM', course: 'DCIT 324 (Mobile Dev)', venue: 'NNB2' },
  { id: '2', day: 'Tuesday', time: '12:00 PM - 02:30 PM', course: 'DCIT 304 (HCI)', venue: 'Maths Lab 3' },
  { id: '3', day: 'Wednesday', time: '07:30 AM - 09:30 AM', course: 'DCIT 302 (Academic Writing)', venue: 'LG1' },
  { id: '4', day: 'Thursday', time: '02:00 PM - 04:30 PM', course: 'DCIT 308 (Data Structures)', venue: 'JQB14' },
  { id: '5', day: 'Friday', time: '10:00 AM - 12:30 PM', course: 'DCIT 312 (Info Security)', venue: 'CS Lab 2' },
];

export default function Timetable() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyTimetable}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.timetableItem}>
            <View style={styles.header}>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.venue}>Venue: {item.venue}</Text>
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
  timetableItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#007AFF',
  },
  course: {
    fontSize: 15,
    fontWeight: '500',
    color: '#555',
  },
  venue: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
});
