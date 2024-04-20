import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
  TextInput
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DiaryScreen extends Component {
  async addStory() {
    if (this.state.title && this.state.description && this.state.story && this.state.moral) {
      var d = new Date()
      console.log(storyData)
      await firebase
        .database()
        .ref("/posts/" + (Math.random().toString(36).slice(2)))
        .set(storyData)
        .then(function (snapshot) {

        })
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed")
    } else {
      Alert.alert(
        'Error',
        'All fields are required!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/DiaryBackground.jpg')}
          style={styles.bgImage}>

          <View>
            <Image
              source={require('../assets/Diary.jpg')}
              style={{
                width: RFValue(400),
                height: RFValue(600),
                marginLeft: RFValue(6),
                marginTop: RFValue(40),
                borderRadius:RFValue(10)
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', flex: 0.25 }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer1}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C4D03',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headingContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(15),
  },
  titleText1: {
    fontSize: RFValue(45),
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  titleText2: {
    fontSize: RFValue(45),
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  subheading1: {
    fontSize: RFValue(22),
    color: 'black',
    fontStyle: 'italic',
  },
  subheading2: {
    fontSize: RFValue(22),
    color: 'black',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(80),
    marginLeft:RFValue(80)
  },
  buttonContainer1: {
    flex: 0.2,
    justifyContent: 'right',
    alignItems: 'center',
    marginTop: RFValue(40),
    marginLeft:RFValue(220)
  },
  button: {
    backgroundColor: 'black',
    paddingLeft: RFValue(50),
    paddingRight: RFValue(50),
    paddingTop: RFValue(20),
    paddingBottom: RFValue(20),
    borderRadius: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(25),
    fontStyle: 'italic',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});
