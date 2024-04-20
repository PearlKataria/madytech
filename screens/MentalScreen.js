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
  StatusBar,
  Image
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class MentalScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground
          source={require('../assets/Image3.jpeg')}
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
              <Text style={styles.subheading2}> Life Easier</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DisSocialScreen')}>
            <Text style={styles.routeText}>
              Dissocial disorder and delusion
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>
              Intrusive flashbacks and nightmares
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Excess fear and panic</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>
              Feeling of low self worth and guilt
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Poor concentration and sleep</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Appetite/weight fluctuations</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
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
    flex: 0.1,
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
  bgImage: {
    width: '100%',
    height: 700,
    resizeMode: 'cover',
  },

  routeCard: {
    flex: 0.19,
    width: '95%',
    height: '90%',
    marginTop: 30,
    borderRadius: 20,
    marginLeft:RFValue(5),
    borderWidth: 2.5,
  },
  routeText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFDF00',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  headingContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:RFValue(40)
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
