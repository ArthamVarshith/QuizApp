import { StyleSheet, Text, TouchableOpacity, View, Animated,Image} from 'react-native'
import React,{useState} from 'react'

const Welcome = ({navigation}) => {

  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const startQuiz = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();
  };


  return (
    <View>
      <Text style={styles.header}>Quiz App</Text>
      <Image source={require('../assets/quiz.png')} style={styles.image}/>
      <Text style={styles.text}>Dive into learning, play and grow {'\n'}with our interactive quizzes!</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Quiz'); startQuiz()}}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 200
    },
    text: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 490,
        fontFamily: 'NotoSansMed',
        fontSize: 19,
        color: 'black'
    },
    header: {
        alignSelf: 'center',
        marginTop: 100,
        fontFamily: 'QuickSandBold',
        fontSize: 30,
        color: 'black'
    },
    button: {
        position: 'absolute',
        marginTop: 580,
        alignSelf: 'center',
        backgroundColor: 'black',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        marginHorizontal: 30,
        marginVertical: 8,
        fontFamily: 'NotoSansMed',
        fontSize: 18
    }
})