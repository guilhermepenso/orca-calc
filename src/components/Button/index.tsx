import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { colors } from "~/src/theme";
import { styles } from "./styles";

import { ButtonType } from "@/types/ButtonType";

type Props = TouchableOpacityProps & {
  type: ButtonType;
  title?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ type, title, icon, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === ButtonType.PRIMARY
          ? { backgroundColor: colors.purple.base }
          : {
              backgroundColor: colors.gray[100],
              borderWidth: 1,
              borderColor: colors.gray[300],
            },
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      {icon && (
        <MaterialIcons
          size={24}
          name={icon}
          style={[
            styles.icon,
            {
              color:
                type === ButtonType.PRIMARY
                  ? colors.white
                  : type === ButtonType.SECONDARY
                  ? colors.purple.base
                  : colors.danger.base,
            },
          ]}
        />
      )}
      {title && (
        <Text
          style={[
            styles.title,
            {
              color:
                type === ButtonType.PRIMARY
                  ? colors.gray[300]
                  : colors.purple.base,
            },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
