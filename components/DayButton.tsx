import {
  StyleSheet,
  Switch,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/constants/Colors";

type Props = {
  day: string;
};

export default function DayButton({ day }: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={[styles.container, isEnabled && styles.enabledContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={{ fontWeight: "600" }}>{day}</Text>
        <Switch
          trackColor={{ false: "#D8D8D8", true: "#767577" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="black"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {isEnabled && (
        <TouchableOpacity style={styles.addScheduleBtn}>
          <Text style={{ textAlign: "center" }}>Add Schedule</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: COLORS.lightGray,
    borderRadius: 18,
    padding: 10,
    marginBottom: 20,
    flexDirection: "column",
  },
  headerWrapper: {
    flexDirection: "row",
    borderColor: "red",
    // borderWidth: 2,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -10
  },
  enabledContainer: {
    height: "auto",
    backgroundColor: "#F8F8F8",
    borderColor: COLORS.lightGray,
    borderWidth: 2,
  },
  addScheduleBtn: {
    backgroundColor: COLORS.lightGray,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
});
