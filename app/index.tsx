import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*Can create style sheets, which is like CSS in html*/
/*Can have all styles in your sheet with identifierss*/
const style = StyleSheet.create({
  main: {
    //then you write CSS like stuff in here
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    flexDirection: 'column',
  },
});

function HomeScreen() {
  return (
    <View style={style.main}>
      <Text>Home Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
