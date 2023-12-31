import { StyleSheet, Text, View ,Animated,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import data from '../QuizData'
import ProgressBar from '../Components/ProgressBar'
import Questions from '../Components/Questions'

const Quiz = ({navigation}) => {

  const allQuestions=data;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };

  
  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled == false) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];

      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOption == correct_option) {
        setScore(score + 1);
      }
    }
  };

  
  const handleNext = (navigation) => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      navigation.navigate("Result", { score: score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
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
      ]),
    ]).start();
  };

  const renderOptions = (navigation) => {
    return (
      <View style={styles.total}>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => validateAnswer(option, navigation)}
              key={index}
              style={[
                { ...styles.optionsText },
                {
                  backgroundColor: isOptionsDisabled
                    ? option == correctOption
                      ? "#7be25b"
                      : option == currentOptionSelected
                      ? "#f0222b" //red
                      : "black" //gray
                    : "black",
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  textAlign: "center",
                  fontFamily: 'QuickSandMed'
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ProgressBar progress={progress} />

          <Questions
            index={currentQuestionIndex}
            question={allQuestions[currentQuestionIndex]?.question}
          />
        </View>
        {renderOptions(navigation)}
      </View>
      <View style={styles.next}>
        <TouchableOpacity
          disabled={!currentOptionSelected}
          onPress={() => handleNext(navigation)}
        >
          <Text style={[styles.Nexttext,{backgroundColor: !currentOptionSelected ? "#00000020" : "#ffffff",}]}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Quiz

const styles = StyleSheet.create({
  scrollView:{
    flex:1,
    backgroundColor: 'white'
  },
  total: {
    marginTop: 40
  },
  optionsText: {
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 20,
    marginRight: 10
  },
  next: {
    marginTop: 20,
  },
  Nexttext: {
    backgroundColor: 'grey',
    color: 'black',
    fontFamily: 'QuickSandBold',
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 20,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2
  },
})