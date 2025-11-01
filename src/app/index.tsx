import { HomeHeader } from "@/components/HomeHeader";
import { SearchBar } from "@/components/SearchBar";
import { StatusBar, View } from "react-native";
import { Button } from "../components/Button";

import { ButtonType } from "@/types/ButtonType";
import { Budget } from "../components/Budget";
import { List } from "../components/List";
import { BudgetStatus } from "../types/BudgetStatus";

const BudgetItems = [
  {
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    client: "Soluções Tecnológicas Beta",
    status: BudgetStatus.APPROVED,
    value: 22300.00
  },
  {
    id: "2",
    title: "Consultoria em marketing digital",
    client: "Marketing Wizards",
    status: BudgetStatus.DRAFT,
    value: 4000.00
  },
  {
    id: "3",
    title: "Serviços de SEO",
    client: "SEO Masters",
    status: BudgetStatus.SENT,
    value: 3500.00,
    created_at: "",
    updated_at: "",
    discount: "",
    services: [
      {}
    ]
  },
  {
    id: "4",
    title: "Criação de Conteúdo",
    client: "Content Creators",
    status: BudgetStatus.DRAFT,
    value: 2500.00,
    created_at: "",
    updated_at: "",
    discount: "",
    services: [
      {}
    ]
  },
  {
    id: "5",
    title: "Gestão de redes sociais",
    client: "Social Experts",
    status: BudgetStatus.DECLINED,
    value: 1800.00,
    created_at: "",
    updated_at: "",
    discount: "",
    services: [
      {}
    ]
  },
  {
    id: "6",
    title: "Design de interface",
    client: "UI/UX Designers",
    status: BudgetStatus.APPROVED,
    value: 5200.00,
    created_at: "",
    updated_at: "",
    discount: "",
    services: [
      {}
    ]
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1, gap: 22 }}>
      <StatusBar barStyle={"dark-content"} />
      <HomeHeader />
      
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 16}}>
        <SearchBar />
        <Button type={ButtonType.SECONDARY} icon="tune"/>
      </View>

      <List
        data={BudgetItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Budget data={item} onPress={() => console.log('id', item.id)} />}
      />
    
    </View>
  );
}
