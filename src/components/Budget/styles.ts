import { StyleSheet } from "react-native";
import { colors, fontFamily } from "~/src/theme";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 10,
  },
  content: {
    width: "60%",
    margin: 12,
    padding: 2,
    gap: 12,
  },
  info: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "25%",
    margin: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    color: colors.gray[700],
  },
  client: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  value: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
});
