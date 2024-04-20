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

export default class DisSocialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Image3.jpeg')}
          style={styles.bgImage}
        >
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
        <View>
          <Text style={styles.contentText}>Consequent Diseases </Text>
          <View style={styles.contentContainer1}>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SchizophreniaScreen')}
            >
              <Text style={styles.contentText1}>* Schizophrenia</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('ObsessiveCompulsiveDisorderScreen')}
            >
              <Text style={styles.contentText1}>
              * Obsessive-compulsive disorder
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('SocialPhobiaScreen')}
              >
              <Text style={styles.contentText1}>* Social Phobia</Text>
            </TouchableOpacity>
            <Text style={styles.contentText1}>* Agoraphobia</Text>
            <Text style={styles.contentText1}>* Depression</Text>
          </View>
        </View>

        <View>
          <Text style={styles.contentText}>Yoga </Text>
          <View style={styles.contentContainer1}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BigToePose')}>
              <Text style={styles.contentText1}>* Big toe pose</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('BoundAnglePose')}>
              <Text style={styles.contentText1}>
              * Bound Angle pose
              </Text>
            </TouchableOpacity>
            <Text style={styles.contentText1}>* Bow Pose</Text>
            <Text style={styles.contentText1}>* Half moon pose</Text>
            <Text style={styles.contentText1}>* Revolved Head to knee pose</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('MentalScreen')}>
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
    backgroundColor: '#3c4d03',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headingContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:RFValue(20)
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
  contentContainer1: {
    flex: 0.98,
    margin: RFValue(2),
    borderRadius: RFValue(15),
    backgroundColor: '#fffef2',
    height: '100%',
    padding: RFValue(20),
  },
  contentText: {
    fontSize: RFValue(30),
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:RFValue(40),
    color : 'yellow'
  },
  contentText1: {
    fontSize: RFValue(18),
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop:RFValue(5)
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
