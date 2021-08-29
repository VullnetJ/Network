import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [rates, setRates] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState(0);
  
  useEffect(() => {
    fetch('https://api.exhangeratesapi.io/latest')
    .then (response => response.json())
    .then(responseJson => setRates(responseJson.rates))
    .catch(error => {
      Alert.alert(error);
    })
  })

  


  const rateConversion = () => {
    const rate = rates[currency];
    setResults((amount/ rate).toFixed(5))
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text> {result} $</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
