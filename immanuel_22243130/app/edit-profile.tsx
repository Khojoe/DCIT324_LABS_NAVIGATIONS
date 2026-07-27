import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

export default function EditProfile() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name?: string; bio?: string; programme?: string }>();

  const [name, setName] = useState(params.name || 'Immanuel');
  const [bio, setBio] = useState(params.bio || 'Computer Science student.');
  const [programme, setProgramme] = useState(params.programme || 'BSc. Computer Science');

  const handleSave = () => {
    router.navigate({
      pathname: '/(drawer)/(tabs)/profile',
      params: { name, bio, programme },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        placeholder="Enter bio"
      />

      <Text style={styles.label}>Programme</Text>
      <TextInput
        style={styles.input}
        value={programme}
        onChangeText={setProgramme}
        placeholder="Enter programme"
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
});
