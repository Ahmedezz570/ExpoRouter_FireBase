import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Task_1: React.FC = () => {
  const [guess, setGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [hint, setHint] = useState<string>('Lower or higher?');
  const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 100));

  const handleCheck = () => {
    console.log(randomNumber);
    const numericGuess: number = Number(guess);

    if (isNaN(numericGuess) || numericGuess < 0 || numericGuess > 99) {
      setHint('Valid Number');
      return;
    }

    setGuesses((prevGuesses) => [...prevGuesses, guess]);

    if (numericGuess === randomNumber) {
      setHint(`Congratulations! Number = ${numericGuess}`);
      setGuesses([]);
      setRandomNumber(Math.floor(Math.random() * 100));
    } else if (numericGuess > randomNumber) {
      setHint('Lower');
    } else {
      setHint('Higher');
    }

    setGuess('');
  };

  const handleReset = (): void => {
    setGuess('');
    setGuesses([]);
    setHint('Lower or higher?');
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.inputContainer]}>
        <Text style={styles.text}>Enter your guess (0-99):</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your guess"
            keyboardType="numeric"
            value={guess}
            onChangeText={(text: string) => setGuess(text)}
          />
          <TouchableOpacity style={styles.checkButton} onPress={handleCheck}>
            <Text style={styles.buttonText}>CHECK</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.section, styles.guessesContainer]}>
        <Text style={styles.text}>Your guesses:</Text>
        {guesses.map((guessItem, index) => (
          <Text key={index} style={styles.guessText}>{guessItem}</Text>
        ))}
      </View>

      <View style={[styles.section, styles.hintContainer]}>
        <Text style={styles.hintText}>{hint}</Text>
      </View>

      <View style={[styles.section, styles.resetContainer]}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    width: '100%',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 5,
  },
  inputContainer: {
    minHeight: 350,
    alignSelf: 'stretch',
    backgroundColor: '#ff00ff',
  },
  guessesContainer: {
    minHeight: 50,
    alignSelf: 'stretch',
    backgroundColor: '#00ffff',
    padding: 10,
  },
  hintContainer: {
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    minHeight: 200,
    alignSelf: 'stretch',
  },
  resetContainer: {
    minHeight: 50,
    alignSelf: 'stretch',
    backgroundColor: '#00ffff',
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  guessText: {
    color: '#000',
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    padding: 12,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  checkButton: {
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  hintText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  resetButton: {
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
});

export default Task_1;
