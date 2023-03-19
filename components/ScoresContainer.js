import React from 'react';
import { View, Text ,ScrollView} from 'react-native';

const HighestScoreBox = ({ name, score }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ color: 'white',padding:15 ,fontSize:15, lineHeight:50 }}>Highest Score : {score}</Text>
      <Text style={{ color: 'white' ,padding:15,fontSize:15, lineHeight:50 }}>{name}</Text>
    </View>
  );
};

const WaitingPlayerBox = ({ name }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ color: 'white',padding:15 ,fontSize:15, lineHeight:50}}>Waiting Players :</Text>
      <Text style={{ color: 'white' ,padding:15 ,fontSize:15, lineHeight:50}}>{name}</Text>
    </View>
  );
};


const ScoresContainer = () => {
  const highestScore = 0 ;
  const highestScoringPlayer = ' ';
  const waitingPlayer = ' ';

  return (
    <View style={{ backgroundColor: 'gray', borderWidth: 1, padding: 50, position: 'absolute', left: 5, top: 50, width:300, height: 300}}>
      <ScrollView>
      <HighestScoreBox name={highestScoringPlayer} score={highestScore} />
      <WaitingPlayerBox name={waitingPlayer} />
      </ScrollView>
    </View>
  );
};


export default ScoresContainer;



