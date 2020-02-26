
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,View,TouchableHighlight,NativeModules
} from 'react-native'

import Base64 from 'base64-js'
import Sodium from 'react-native-sodium'
import { encrypt, decrypt } from 'react-native-simple-encryption'


class TestValue extends Component {
    render() {
      return (
        <View style={styles.testContainer}>
          <Text style={styles.testLabel}>{this.props.name}:</Text>
          <Text style={[styles.testResult]}>{this.props.value}</Text>
        </View>
      );
    }

  }

export default class Example extends Component {

  // state: {
  //   sodium_version_string: string,

  //  }

  constructor(props) {
    super(props)
    this.state = {
        encript:encrypt('/AllqhynaA/pvvdMhoILo2YNxQ1MnxtQlOKTR1jZV0I=', 'Hello World'),
        decrypt:decrypt('/AllqhynaA/pvvdMhoILo2YNxQ1MnxtQlOKTR1jZV0I=', 'ZyQAAB5ILgETLUs=')
        
    }
    console.warn(encrypt('/AllqhynaA/pvvdMhoILo2YNxQ1MnxtQlOKTR1jZV0I=', 'Hello World'));
        console.warn(decrypt('/AllqhynaA/pvvdMhoILo2YNxQ1MnxtQlOKTR1jZV0I=', 'ZyQAAB5ILgETLUs='))
  }


  render() {
    return (
      <ScrollView style={{flex:1}}>
        <TouchableHighlight >
          <Text style={styles.welcome}>
            Salted React Native!
          </Text>
        </TouchableHighlight>

        <Text style={{padding:30,fontSize:20}}>encryption:  {this.state.encript}</Text>
        <Text style={{padding:30,fontSize:20}}> Decryption:  {this.state.decrypt}</Text>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:5
  },

  testContainer: {
    flex: 1,
    flexDirection:'row',
    padding:5
  },

  testLabel: {
    flex:4,
    textAlign: 'left',
    color: '#333333',
  },

  testResult: {
    flex:1,
    textAlign: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
})