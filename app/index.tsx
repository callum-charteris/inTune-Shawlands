import { Text, View } from "react-native";

export default function Index() {
  return (

    //a view is basically the UI, the screen the user sees
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
