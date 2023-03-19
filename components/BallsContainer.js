import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const BALL_SIZE = 30;

const BallsContainer = () => {
  const [balls, setBalls] = useState([
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'green' },
    { id: 4, color: 'brown' },
    { id: 5, color: 'blue' },
    { id: 6, color: 'pink' },
    { id: 7, color: 'black' },
    { id: 8, color: 'white' },
  ]);

  const handleBallClick = (id) => {
    const updatedBalls = balls.map((ball) => {
      if (ball.id === id) {
        return { ...ball, isClicked: true };
      } else {
        return ball;
      }
    });
    setBalls(updatedBalls);
  };

  return (
    <View style={styles.container}>
      {balls.map((ball) => (
        ball.color !== 'white' &&
        <TouchableOpacity
          key={ball.id}
          style={[styles.ball, { backgroundColor: ball.color }]}
          onPress={() => handleBallClick(ball.id)}
          enabled={ball.isClicked}
        />
      ))}
      <TouchableOpacity
        style={[styles.ball, { backgroundColor: 'white' }]}
        onPress={() => handleBallClick(8)}
        enabled={balls[7].isClicked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom:10,
    position: 'relative',
    left:140
  },
  ball: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE /2,
    marginRight: 13,
    marginLeft: 3,
    borderWidth:1
  },
});

export default BallsContainer;







