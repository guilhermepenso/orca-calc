import { Text, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

import { ButtonType } from "@/types/ButtonType";

export function HomeHeader({ rascunhos = 1 }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Orçamentos</Text>
        {rascunhos > 0 && <Text style={styles.description}>Você tem {rascunhos} item em rascunho</Text>}
      </View>

      <Button type={ButtonType.PRIMARY} icon="add" title="Novo"  />
    </View>
  );
}
