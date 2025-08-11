import { Animated, View } from "react-native";

import ScrollView = Animated.ScrollView;
import { Appbar, List, Searchbar, Text } from "react-native-paper";
import { useState } from "react";
import { KuFoldersManager } from "@/components/KuFoldersManager";
import { KuFolder } from "@/types/types";

export default function SharedScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [folders, setFolders] = useState<KuFolder[]>([
    {
      id: "1",
      name: "Facturas",
      description: "5 documentos",
      icon: "folder-outline",
      href: "/facturas",

      contents: [],
    },
  ]);

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content title="Compartidos conmigo" />
        <Appbar.Action icon="create" onPress={() => {}} />
      </Appbar.Header>

      <View style={{ padding: 15, gap: 10 }}>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />

        <Text variant="titleMedium">Folders</Text>
        <KuFoldersManager folders={folders} />
      </View>
    </ScrollView>
  );
}
