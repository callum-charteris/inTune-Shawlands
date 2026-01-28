import React from 'react';
import { Text, View, StyleSheet } from "react-native";

/*Can create style sheets, which is like CSS in html*/
/*Can have all styles in your sheet with identifierss*/
const style = StyleSheet.create({
  title: {
    //then you write CSS like stuff in here
    color: 'black',
    marginTop: 16,
    borderWidth: 3,
    padding: 3,
    backgroundColor: '#61dafb',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default function Index() {
  return (


    /*a view is basically the UI, the screen the user sees
    the style is self contained in the view tag*/
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",


      }}
    >

      <Text style={style.title}>InTune Shawlands</Text>

    </View>
  );
}
