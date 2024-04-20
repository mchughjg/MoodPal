import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Support = () => {
  const handleContactFormSubmit = () => {
    console.log('Contact form submitted!');
    // Handling form submission logic here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Support</Text>
      <Text style={styles.subHeader}>FAQ</Text>
      <Text>Here are some frequently asked questions:</Text>
      <Text>Question 1: How do I track my mood in the app?</Text>
      <Text>Question 2: Can I track multiple moods in a single day?</Text>
      <Text>Question 3: Is my mood data private and secure?</Text>
      <Text>Question 4: Can I view my mood history over time?</Text>
      <Text>Question 5: How can I set and track daily goals?</Text>
      <Text>Question 6: What if I forget to track my mood for a day?</Text>
      <Text>Question 7: Can I export my mood data?</Text>
      <Text>Question 8: How can I provide feedback or report issues?</Text>

      <Text style={styles.subHeader}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => {}}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => {}}
        required
      />
      <TextInput
        style={styles.textArea}
        placeholder="Message"
        multiline
        numberOfLines={4}
        onChangeText={(text) => {}}
        required
      />
      <Button title="Submit" onPress={handleContactFormSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  textArea: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    height: 100,
    marginTop: 5,
    marginBottom: 15,
  }
});

export default Support;