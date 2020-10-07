// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

//This is an example code to understand AsyncStorage//
import React, { Component } from 'react';
//import react in our code.

import {
  StyleSheet,
  View,
  AsyncStorage, //AsyncStorage ahora viene por defecto en la libreria de react-native
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

export default class ThirdPage extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: '',
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }

  saveValueFunction = () => {
    //function to save the value in AsyncStorage
    if (this.state.textInputData) {
      //To check the input not empty
      AsyncStorage.setItem('key_valor', this.state.textInputData);
      //Setting a data to a AsyncStorage with respect to a key
      this.setState({ textInputData: '' });
      //Resetting the TextInput
      alert('Data Saved');
      //alert to confirm
    } else {
      alert('Please fill data');
      //alert for the empty InputText
    }
  };

  getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('key_valor').then(
      value =>
        //AsyncStorage returns a promise so adding a callback to get the value
        this.setState({ getValue: value })
      //Setting the value in Text
    );
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Ingrese Texto"
          value={this.state.textInputData}
          onChangeText={data => this.setState({ textInputData: data })}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />

        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> GUARDAR </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.getValueFunction} style={styles.button}>
          <Text style={styles.buttonText}> OBTENER </Text>
        </TouchableOpacity>

        <Text style={styles.text}> {this.state.getValue} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop: 60,
  },

  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#808000',
  },

  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808000',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});


