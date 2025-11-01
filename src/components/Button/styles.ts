import { StyleSheet } from "react-native";

import { colors, fontFamily } from "~/src/theme";

export const styles = StyleSheet.create({
  button: {
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 99,
  },
  icon: {
    color: colors.white,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
});
