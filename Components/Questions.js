import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../QuizData'

const Questions = ({index,question}) => {
  return (
    <View>
      <View style={styles.total}>
        <Text style={styles.index}>{index+1}</Text>
        <Text style={styles.length}> / {data.length}</Text>
      </View>
      <Text style={styles.question}>
        {question}
      </Text>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({
  total: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 30
  },
  index: {
    fontSize: 20,
    backgroundColor: 'black',
    borderRadius: 100/2,
    color: 'white',
    width: 35,
    height: 35,
    paddingLeft: 12,
    paddingTop: 3,
    fontFamily: 'NotoSansMed'
  },
  length: {
    fontSize: 20,
    fontFamily: 'NotoSansMed',
    marginTop: 5
  },
  question: {
    fontFamily: 'QuickSandBold',
    fontSize: 20,
    marginTop: 25,
    marginLeft: 15
  }
})