import { StyleSheet } from "react-native";
import { colors, fontFamily } from "~/src/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    gap: 16,
    paddingTop: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200]
  },
  header: {
    height: 70,
    gap: 8,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  label: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    color: colors.purple.base
  },
  description: {
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  },
});
