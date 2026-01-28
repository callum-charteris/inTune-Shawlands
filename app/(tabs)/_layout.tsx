import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About Me",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Plans"
        options={{
          title: "Plans",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="piano" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="contacts" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Reviews"
        options={{
          title: "Reviews",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="star" color={color} />,
        }}
      />
    </Tabs>
  );
}

