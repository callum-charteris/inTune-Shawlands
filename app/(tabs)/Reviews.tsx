import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";

/*Can create style sheets, which is like CSS in html*/
/*Can have all styles in your sheet with identifierss*/
const style = StyleSheet.create({
    main: {
        //then you write CSS like stuff in here
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        flex: 1,
    },


});

export default function Index() {
    return (


        /*a view is basically the UI, the screen the user sees
        the style is self contained in the view tag*/
        <View
            style={style.main}
        >
            <Text> Reviews Page</Text>
        </View>
    );
}