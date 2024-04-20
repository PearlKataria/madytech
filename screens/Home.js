import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Image4.jpeg')}
          style={styles.bgImage}>
          <View style={styles.headingContainer}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={styles.titleText1}>MADY-</Text>
              <Text style={styles.titleText2}>TECH</Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={styles.subheading1}>Let's Make</Text>
              <Text style={styles.subheading2}> Life Easier....</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={{ flex: 0.5 }}>
              <Text style={styles.contentText}>
                "My intention for today is to prioritize self-care and nurture
                my relationship with myself. I will engage in activities that
                bring me joy and show myself compassion and understanding. I
                commit to treat myself with the same kindness and respect that I
                offer to others."
              </Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.25 }}>
              <View style={{ flex: 0.5 }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Problems
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MentalScreen')
                  }>
                  <Image
                    source={require('../assets/Mental_Health_HP.jpeg')}
                    style={{ height: 130, width: 160 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Medication
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MedicationScreen')
                  }>
                  <Image
                    source={require('../assets/MedicationCrop.jpg')}
                    style={{ height: 130, width: 160, marginLeft: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DiaryScreen')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Soul Scribbles</Text>
              </View>
            </TouchableOpacity>
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
  
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage:{
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  headingContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  titleText1: {
    fontSize: RFValue(45),
    fontWeight: 'bold',
    color: '#efb141',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  titleText2: {
    fontSize: RFValue(45),
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading1: {
    fontSize: RFValue(22),
    color: '#efb141',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading2: {
    fontSize: RFValue(22),
    color: 'white',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  contentContainer: {
    flex: 0.6,
    margin: RFValue(2),
    borderRadius: RFValue(15),
    backgroundColor: '#FFFEF2',
    height: '100%',
    padding: RFValue(20),
  },
  contentText: {
    fontSize: RFValue(18),
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#efb141',
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
