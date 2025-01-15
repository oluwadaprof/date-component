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
import TimeContainer from "./TimeContainer";
import { Ionicons } from "@expo/vector-icons";
import { TSchedule } from "@/types/type";

type Props = {
  day: string;
};

export default function DayButton({ day }: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [schedules, setSchedules] = useState<TSchedule[]>([]); // State to manage schedules

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const addSchedule = () => {
    const newSchedule: TSchedule = {
      id: Date.now().toString(), // Unique ID based on timestamp
      start: "08:00AM", // Default start time
      end: "05:00PM", // Default end time
    };
    setSchedules((prev) => [...prev, newSchedule]);
  };

  const removeSchedule = (id: string) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
  };
  return (
    <View style={[styles.container, isEnabled && styles.enabledContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>{day}</Text>
        <Switch
          trackColor={{ false: "#D8D8D8", true: "#767577" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="black"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {isEnabled && (
        <View>
          {schedules.map((schedule) => (
            <TimeContainer
              key={schedule.id}
              schedule={schedule}
              onRemove={removeSchedule}
            />
          ))}
          <TouchableOpacity style={styles.addScheduleBtn} onPress={addSchedule}>
            <Ionicons
              name="add"
              size={20}
              style={{ marginRight: 4, fontWeight: "500" }}
            />
            <Text style={{ fontWeight: "500" }}>Add Schedule</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: -7,
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
