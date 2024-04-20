import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const Settings = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);
  const [securityEnabled, setSecurityEnabled] = useState(true);

  const handlePrivacyToggle = () => {
    setPrivacyEnabled(previousState => !previousState);
  };

  const handleSecurityToggle = () => {
    setSecurityEnabled(previousState => !previousState);
  };

  const handleFeedback = () => {
    console.log('Opening feedback modal or redirecting to feedback page...');
  };

  const handleContactUs = () => {
    console.log('Opening contact us modal or redirecting to contact us page...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.subHeader}>Privacy</Text>
        <View style={styles.switchRow}>
          <Text>Enable Privacy Settings</Text>
          <Switch
            onValueChange={handlePrivacyToggle}
            value={privacyEnabled}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Security</Text>
        <View style={styles.switchRow}>
          <Text>Enable Security Settings</Text>
          <Switch
            onValueChange={handleSecurityToggle}
            value={securityEnabled}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Feedback & Support</Text>
        <Button title="Give Feedback" onPress={handleFeedback} />
        <Button title="Contact Us" onPress={handleContactUs} />
      </View>
    </View>
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
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  section: {
    marginTop: 15,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  }
});

export default Settings;