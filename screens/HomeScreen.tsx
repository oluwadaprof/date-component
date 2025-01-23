import { View } from "react-native";
import React from "react";
import DayButton from "@/components/DayButton";

export default function HomeScreen() {
  return (
    <View style={{ width: "100%", padding: 35, flex: 1 }}>
      {Days.map((day, index) => (
        <DayButton day={day} key={index} />
      ))}
    </View>
  );
}

const Days = [
  "Monday",
  "Teusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
