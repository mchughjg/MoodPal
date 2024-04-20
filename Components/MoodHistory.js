import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MoodHistory = () => {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  };

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3, 4, 5, 6, 7, 6, 5],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      }
    ]
  };

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [5, 6, 6, 7],
        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
      }
    ]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mood History</Text>
      <Text style={styles.subHeader}>Weekly Mood History</Text>
      <LineChart
        data={weeklyData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
      <Text style={styles.subHeader}>Monthly Mood History</Text>
      <LineChart
        data={monthlyData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5
  }
});

export default MoodHistory;