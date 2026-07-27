import { StyleSheet, View, Text } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Connect</Text>
      <Text style={styles.description}>
        A simple student application showcasing drawer, bottom tab, and nested stack navigation patterns in Expo.
      </Text>
      
      <View style={styles.developerInfo}>
        <Text style={styles.developerTitle}>Developer Details</Text>
        <Text style={styles.infoText}>Name: Immanuel</Text>
        <Text style={styles.infoText}>Student ID: 22243130</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  developerInfo: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  developerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    marginVertical: 4,
  },
});
