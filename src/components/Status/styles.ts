import { StyleSheet } from "react-native";

import { fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 99,
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
});
