import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Not Props Interface can only be used in TypeScript
// interface Props {
//   title: string;
//   backgroundColor?: string;
//   textColor?: string;
//   onBackPress?: () => void;
//   showBackButton?: boolean;
// }

const DynamicHeader = ({
  title,
  backgroundColor = "#6200ee",
  textColor = "#ffffff",
  onBackPress,
  showBackButton = false,
}) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: textColor }]}>◀</Text>
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    left: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DynamicHeader;
