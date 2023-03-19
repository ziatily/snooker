import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlayersContainer from './components/PlayersContainer';
import ScoresContainer from './components/ScoresContainer';
import BallsContainer from './components/BallsContainer';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

const App = () => {
  return (
    <View style={styles.container}>
      <PlayersContainer />
      <ScoresContainer />
      <BallsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default App;






