import ImageViewer from '@/components/ImageViewer';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

//variables 
const teachOfYear = require('@/assets/images/teacheroftheyear.jpg');
const piano1 = require('@/assets/images/piano.png');
const piano2 = require('@/assets/images/piano-anne-new-photo.jpg');
const chalkboard = require('@/assets/images/chalkboard.png');

/*Can create style sheets, which is like CSS in html*/
/*Can have all styles in your sheet with identifierss*/
const style = StyleSheet.create({
  main: {
    //then you write CSS like stuff in here
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
  },

  header: {
    //CSS stuff for the header
    flex: 0.5,
    padding: 10,
    fontSize: 20,
    fontFamily: 'Impact',
    textAlign: 'center',
  },

  image: {
    //CSS like stuff for the image
    flex: 10,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  photo: {
    flex: 1,
    margin: 5,
  }

});

export default function Index() {
  return (


    /*a view is basically the UI, the screen the user sees
    the style is self contained in the view tag*/
    <View style={style.main}>
      <Text style={style.header}>Welcome to InTune Shawlands!</Text>
      <View style={style.image} >
        <View style={style.row} >
          <View style={style.photo} >
            <ImageViewer imgSource={teachOfYear} />
          </View>

          <View style={style.photo} >
            <ImageViewer imgSource={piano1} />
          </View>
        </View>

        <View style={style.row} >
          <View style={style.photo} >
            <ImageViewer imgSource={chalkboard} />
          </View>
          <View style={style.photo} >
            <ImageViewer imgSource={piano2} />
          </View>
        </View>

      </View>
    </View >
  );
}
