import { Text, View } from "react-native";

import { styles } from "./styles";

import {
  BudgetStatus,
  StatusContainerColor,
  StatusDotColor,
  StatusLabelColor,
  StatusName,
} from "@/types/BudgetStatus";

type Props = {
  status: BudgetStatus;
};

export function Status({ status }: Props) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: StatusContainerColor[status] },
      ]}
    >
      <View style={[styles.dot, { backgroundColor: StatusDotColor[status] }]} />
      <Text style={[styles.label, { color: StatusLabelColor[status] }]}>
        {StatusName[status]}
      </Text>
    </View>
  );
}
