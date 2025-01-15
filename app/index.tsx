import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import HomeScreen from "@/screens/HomeScreen";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <ScrollView>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </ScrollView>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 150,
  },
});
