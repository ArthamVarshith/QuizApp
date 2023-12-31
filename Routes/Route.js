import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../Screens/Welcome';
import Quiz from '../Screens/Quiz';
import Result from '../Screens/Result';

const Route = () => {

  const Stack=createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name='Quiz' component={Quiz} options={{headerShown: false}}/>
      <Stack.Screen name='Result' component={Result} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Route

const styles = StyleSheet.create({})