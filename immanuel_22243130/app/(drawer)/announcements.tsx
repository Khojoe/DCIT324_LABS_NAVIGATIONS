import { StyleSheet, View, Text, FlatList } from 'react-native';

const dummyAnnouncements = [
  { id: '1', title: 'Midsem Exams Schedule', date: 'July 25, 2026', text: 'The mid-semester examination timetable has been published on the departmental board.' },
  { id: '2', title: 'Library Renovation', date: 'July 26, 2026', text: 'The main library will be closed this weekend for essential maintenance and computer upgrades.' },
  { id: '3', title: 'SRC Elections Update', date: 'July 27, 2026', text: 'Voting for the SRC executives will take place online on Friday from 8:00am to 5:00pm.' },
  { id: '4', title: 'Graduation Registration', date: 'July 28, 2026', text: 'Registration for the upcoming November graduation ceremony opens next week Monday.' },
  { id: '5', title: 'Coding Bootcamp Registration', date: 'July 29, 2026', text: 'Sign up for the annual React Native and Expo hands-on training starting next month.' }
];

export default function Announcements() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyAnnouncements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.announcementItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.text}>{item.text}</Text>
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
  announcementItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
});
