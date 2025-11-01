import { TextInput, View } from "react-native";

import { EvilIcons } from "@expo/vector-icons";

import { colors } from "~/src/theme";

import { styles } from "./styles";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" size={32} color={colors.gray[600]} />
      <TextInput
        style={styles.input}
        placeholder="Título ou cliente"
        placeholderTextColor={colors.gray[500]}
      />
    </View>
  );
}
