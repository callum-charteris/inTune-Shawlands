import React from 'react';
import { StyleSheet, Text, View } from "react-native";

//importing components
import ImageViewer from '@/components/ImageViewer';

//variables 
const placeHolderImage = require('@/assets/images/teacheroftheyear.jpg');

/*Can create style sheets, which is like CSS in html*/
/*Can have all styles in your sheet with identifierss*/
const style = StyleSheet.create({
  main: {
    //then you write CSS like stuff in here
    backgroundColor: 'white',
    alignItems: "center",
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },

  header: {
    //CSS stuff for the header
    flex: 0.5,
    padding: 10,
    fontSize: 20,
    fontFamily: 'Impact'
  },

  image: {
    //CSS like stuff for the image
    flex: 10,
  },

});

export default function Index() {
  return (


    /*a view is basically the UI, the screen the user sees
    the style is self contained in the view tag*/
    <View style={style.main}>
      <Text style={style.header}>Welcome to InTune Shawlands!</Text>
      <View style={style.image}>
        <ImageViewer imgSource={placeHolderImage} />
      </View>
    </View>
  );
}
