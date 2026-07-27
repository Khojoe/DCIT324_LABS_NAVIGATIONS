import { StyleSheet, View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name?: string; bio?: string; programme?: string }>();

  // Default values or parameters passed back
  const name = params.name || 'Immanuel';
  const indexNumber = '22243130';
  const bio = params.bio || 'Computer Science student.';
  const programme = params.programme || 'BSc. Computer Science';
  const level = '300';

  const handleEditProfile = () => {
    router.push({
      pathname: '/edit-profile',
      params: { name, bio, programme },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0).toUpperCase()}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.programme}>{programme}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Index Number:</Text>
          <Text style={styles.value}>{indexNumber}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Level:</Text>
          <Text style={styles.value}>{level}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.value}>{bio}</Text>
        </View>
      </View>

      <Button title="Edit Profile" onPress={handleEditProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  programme: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  detailsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 15,
    color: '#333',
    flex: 1,
    textAlign: 'right',
    marginLeft: 10,
  },
});
