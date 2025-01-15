import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TSchedule } from "@/types/type";

type TimeContainerProps = {
  schedule: TSchedule;
  onRemove: (id: string) => void; // Function to remove the schedule
};

export default function TimeContainer({
  schedule,
  onRemove,
}: TimeContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTime}>From</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="08:00AM"
        placeholderTextColor="black"
      />
      <Text style={styles.textTime}>To</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="05:00PM"
        placeholderTextColor="black"
      />
      <TouchableOpacity
        style={styles.deleteScheduleBtn}
        onPress={() => onRemove(schedule.id)}
      >
        <Text style={{ textAlign: "center", color: "gray" }}>
          <Ionicons name="close" size={18} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 10,
    alignItems: "center",
  },
  inputStyle: {
    width: "auto",
    height: "auto",
    backgroundColor: "white",
    paddingHorizontal: 7,
    borderColor: COLORS.lightGray,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: -10,
    fontWeight: "600",
  },
  deleteScheduleBtn: {
    backgroundColor: COLORS.lightGray,
    height: 26,
    width: 26,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textTime: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.gray,
  },
});
