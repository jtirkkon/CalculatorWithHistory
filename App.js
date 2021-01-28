import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [result, setResult] = useState(0);
  const [calculations, setCalculations] = useState([]);

  const addition = () => {
    const sum = parseFloat(numberOne) + parseFloat(numberTwo);
    setResult(sum);
    setCalculations([...calculations, {key: `${numberOne} + ${numberTwo} = ${sum}`}]);
    setNumberOne('');
    setNumberTwo('');
  }

  const subtraction = () => {
    const difference = parseFloat(numberOne) - parseFloat(numberTwo);
    setResult(difference);
    setCalculations([...calculations, {key: `${numberOne} - ${numberTwo} = ${difference}`}]);
    setNumberOne('');
    setNumberTwo('');  
  }
  
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.textInputStyle} onChangeText={text => setNumberOne(text)} value={numberOne} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.textInputStyle} onChangeText={text => setNumberTwo(text)} value={numberTwo} keyboardType="number-pad"></TextInput>
      
      <View style={styles.buttonContainer}>
        <View style={{marginRight: 30}}>
          <Button title="+" onPress={addition}></Button>
        </View>
        <Button title="-" onPress={subtraction}></Button>
      </View>

      <Text>History</Text>
      <FlatList data={calculations} renderItem={({item}) => <Text>{item.key}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100
  },
  textInputStyle: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30
  }
});