import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {  // Ensure navigation is received here
  const [selectedMood, setSelectedMood] = useState('');

  const moodOptions = [
    { name: 'content', image: require('../Images/content.jpg') },
    { name: 'meh', image: require('../Images/meh.jpg') },
    { name: 'anxious', image: require('../Images/anxious.jpg') },
    { name: 'calm', image: require('../Images/calm.jpg') },
    { name: 'sad', image: require('../Images/sad.jpg') },
    { name: 'excited', image: require('../Images/excited.jpg') },
    { name: 'angry', image: require('../Images/angry.jpg') },
    { name: 'stressed', image: require('../Images/stressed.jpg') },
  ];

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>How are you feeling today?</Text>
      <View style={styles.moodList}>
        {moodOptions.map((mood, index) => (
          <TouchableOpacity key={index} style={styles.moodItem} onPress={() => handleMoodSelection(mood.name)}>
            <Image source={mood.image} style={styles.moodImage} />
            <Text>{mood.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedMood && <Text style={styles.selectedText}>You selected: {selectedMood}</Text>}

      {/* Navigation buttons */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('MoodEntry')}>
        <Text style={styles.navButtonText}>Go to Mood Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('MoodHistory')}>
        <Text style={styles.navButtonText}>View Mood History</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  moodList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  moodItem: {
    margin: 10,
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  moodImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
  navButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Dashboard;
