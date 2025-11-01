import { colors, fontFamily } from "@/theme";
import { BudgetStatus } from "@/types/BudgetStatus";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Status } from "../Status";
import { styles } from "./styles";

export type BudgetProps = {
  id: string;
  title: string;
  client: string;
  status: BudgetStatus;
  value: number;
};

type Props = TouchableOpacityProps & {
  data: BudgetProps;
};

export function Budget({ data, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={{ gap: 16 }}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.client}>{data.client}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Status status={data.status} />
        <View style={styles.value}>
          <Text style={{ fontSize: 12, color: colors.gray[500] }}>R$</Text>
          <Text style={{fontSize: 18, fontFamily: fontFamily.bold}}>
            {data.value.toLocaleString('pt-br',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
