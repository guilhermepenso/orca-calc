import { ActivityIndicator } from "react-native";

import { colors } from "~/src/theme";
import { styles } from "./styles";

export function Loading() {
  return <ActivityIndicator color={colors.purple.base} style={styles.container} />;
}
