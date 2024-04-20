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

export default class SchizophreniaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Image3.jpeg')}
          style={styles.bgImage}>
          <View style={styles.headingContainer}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={styles.titleText1}>MADY-</Text>
              <Text style={styles.titleText2}>TECH</Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={styles.subheading1}>Let's Make</Text>
              <Text style={styles.subheading2}> Life Easier</Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <Image
              style={styles.imageIcon}
              source={require('../assets/disSocial1.jpg')}
            />

            <Text style={styles.contentText}>
              Schizophrenia is a serious mental illness that affects how a person thinks, feels, and behaves. People with schizophrenia may seem like they have lost touch with reality, which can be distressing for them and for their family and friends. Many people who receive treatment can engage in school or work, achieve independence, and enjoy personal relationships.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('DisSocialScreen')}>
            <Text style={styles.buttonText}>Back</Text>
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
  contentContainer: {
    flex: 1.6,
    margin: RFValue(5),
    marginTop: RFValue(40),
    borderRadius: RFValue(15),
    height: '100%',
    padding: RFValue(20),
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  },
  subheading2: {
    fontSize: RFValue(22),
    color: 'white',
    fontStyle: 'italic',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 90,
    
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
    fontSize: RFValue(17),
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:RFValue(10)
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
