import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlayerBox = ({ name, score, result }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.playerName}>{name}</Text>
      <View style={styles.scoreResultContainer}>
        <Text style={styles.scoreText}>{score}</Text>
        <Text style={styles.resultText}>Result: {result}</Text>
      </View>
    </View>
  );
};

const PlayersContainer = () => {
  const handleEndGame = () => {
    
  };

  const handleEndFrame = () => {
    
  };

  const handleSwitchPlayer = () => {
    
  };

  const players = [
    { name: 'Player 1 :', score: 0, result: ' ' },
    { name: 'Player 2 :', score: 0, result: ' ' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.playerBoxContainer}>
        <PlayerBox name={players[1].name} score={players[1].score} result={players[1].result} />
        <View style={{flexDirection: 'column', justifyContent: 'center', width: '30%', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{handleEndFrame}} style={styles.button}>
            <Text style={styles.buttonText}>End Frame</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleSwitchPlayer}} style={styles.button}>
            <Text style={styles.buttonText}>Switch Player</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleEndGame}} style={styles.button}>
            <Text style={styles.buttonText}>End Game</Text>
          </TouchableOpacity>
        </View>
        <PlayerBox name={players[0].name} score={players[0].score} result={players[0].result} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
      padding: 20,
    borderRadius: 5,
     marginBottom: 20,
     left:140
  },
  playerBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     marginBottom: 15,
     justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin:20
  
  
  
   
  },
  box: {
    
     padding: 15,
    borderRadius: 5,
    //  width: '20%',
    
  },
  playerName: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    width: 130,
    textAlign: 'center',
    borderBottomWidth: 15,
    borderBottomColor: 'red',
    
  },
  scoreResultContainer: {
    backgroundColor: 'silver',
    justifyContent: 'space-between',
    padding: 30,
    
    
    },
  
  scoreText: {
    fontWeight: 'bold',
    fontSize: 15,
    
  },
  resultText: {
    fontSize: 15,
    
  },
  button: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
    marginBottom: 15,
    position: 'relative',
    
    alignItems: 'center',
    width:130,
  },
  buttonText: {
    
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PlayersContainer;










