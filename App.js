import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const OptionsMenuAnimation = {
  animation: 'OptionsMenu', 
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

export default function app(){
  return(
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="OptionsMenu" component={OptionsMenu} options={{transitionSpec: {open: OptionsMenuAnimation.config, close: OptionsMenuAnimation.config}}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}>
        <TouchableOpacity style={styles.optionsButton} onPress={() => {
          
        }}>
          <Text style={{fontSize: 30, marginTop: 12}}>──</Text>
          <Text style={{fontSize: 30}}>──</Text>
          <Text style={{fontSize: 30, marginBottom: 12}}>──</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newProp}>
          <Text style={{fontSize: 40}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.cardSpace}>

        </View>
      </View>
    </View>
  );
}

function OptionsMenu({ navigation }){
  return(
    <View>
      <Text>Test</Text>
    </View>
  )
}

function NewProposal({ navigation }){
  return(
    <View>
      <Text>Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavigation: {
    flex: 1,
    borderBottomWidth: 2,
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'row',
  }, 
  bottomView: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsButton: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#eee', 
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 6,
  }, 
  newProp: {
    width: 60, 
    height: 60,
    borderRadius: 15,
    backgroundColor: '#eee',
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  cardSpace: {
    width: '95%',
    height: '95%',
    backgroundColor: '#eee',
    borderRadius: 30,
  },
});
