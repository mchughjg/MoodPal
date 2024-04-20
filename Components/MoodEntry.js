import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const MoodEntry = ({ selectedMood }) => {
  const [reason, setReason] = useState('');
  const [activities, setActivities] = useState('');
  const [hoursOfSleep, setHoursOfSleep] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Mood Entry</Text>
      <Text style={styles.subHeader}>Selected Mood: {selectedMood}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Why are you feeling {selectedMood}?</Text>
        <TextInput
          style={styles.textArea}
          value={reason}
          onChangeText={setReason}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>What did you do today?</Text>
        <TextInput
          style={styles.textArea}
          value={activities}
          onChangeText={setActivities}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>How many hours of sleep did you get?</Text>
        <TextInput
          style={styles.input}
          value={hoursOfSleep}
          onChangeText={setHoursOfSleep}
          keyboardType='numeric'
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  textArea: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    minHeight: 80, // To roughly accommodate 4 lines of text
  }
});

export default MoodEntry;