import { StyleSheet } from "react-native";
import { colors, fontFamily } from "~/src/theme";

export const styles = StyleSheet.create({
    container: {
        width: "80%",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 99,
        borderColor: colors.gray[300],
        backgroundColor: colors.gray[100],
        padding: 5,
        paddingHorizontal: 8,
    },
    input: {
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
        fontSize: 16,
    }
})