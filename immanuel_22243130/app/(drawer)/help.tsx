import { StyleSheet, View, Text, ScrollView } from 'react-native';

const faqs = [
  {
    q: 'How do I edit my profile?',
    a: 'Navigate to the Profile tab in the bottom tab bar, tap "Edit Profile", fill in the form, and tap "Save" to apply and return.'
  },
  {
    q: 'Where can I see the class schedule?',
    a: 'You can check your class schedules directly by navigating to the "Timetable" tab in the bottom tab navigator.'
  },
  {
    q: 'How do I view detailed event information?',
    a: 'Go to the Home tab, scroll through the campus news/events Feed, and tap on any event to view the full details on the EventDetails screen.'
  }
];

export default function Help() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>Q: {faq.q}</Text>
          <Text style={styles.answer}>A: {faq.a}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  faqItem: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 16,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 6,
  },
  answer: {
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
  },
});
