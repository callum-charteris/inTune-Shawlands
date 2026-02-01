import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

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

  image: {
    //CSS like stuff for the image
    flex: 1,
    width: '100%'
  },
});

export default function Index() {
  return (


    /*a view is basically the UI, the screen the user sees
    the style is self contained in the view tag*/
    <View style={style.main}>
      <Text>Welcome to InTune Shawlands!</Text>

      <Image
        style={style.image}
        source={require('/home/callum/ReactNative/firstApp/firstApp/assets/images/teacheroftheyear.jpg')}
      />

    </View>
  );
}
