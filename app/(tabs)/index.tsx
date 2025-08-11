import { Animated, View } from "react-native";

import ScrollView = Animated.ScrollView;
import { Appbar, List, Searchbar, Text } from "react-native-paper";
import { useState } from "react";
import { KuFolder } from "@/types/types";
import { KuFoldersManager } from "@/components/KuFoldersManager";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const [folders, setFolders] = useState<KuFolder[]>([
    {
      id: "1",
      name: "Facturas",
      description: "5 documentos",
      icon: "folder-outline",
      href: "/facturas",
      contents: [
        {
          id: "1-1",
          name: "Factura 001",
          description: "Factura de enero 2023",
          href: "/facturas/001",
          folderId: "1",
          lastModified: 123123,
          createdAt: 123123,
          size: 2048,
        },
        {
          id: "1-2",
          name: "Factura 002",
          description: "Factura de febrero 2023",
          href: "/facturas/002",
          folderId: "1",
          lastModified: 123123,
          createdAt: 123123,
          size: 2048,
        },
        {
          id: "1-3",
          name: "Factura 003",
          description: "Factura de marzo 2023",
          href: "/facturas/003",
          folderId: "1",
          lastModified: 123123,
          createdAt: 123123,
          size: 2048,
        },
      ],
    },
    {
      id: "2",
      name: "Recibos",
      description: "4 documentos",
      icon: "folder-outline",
      href: "/recibos",
      contents: [],
    },
    {
      id: "3",
      name: "Cheques",
      description: " 5 documentos",
      icon: "folder-outline",
      href: "/cheques",
      contents: [],
    },
    {
      id: "4",
      name: "Contratos",
      description: "2 documentos",
      icon: "folder-outline",
      href: "/contratos",
      contents: [],
    },
    {
      id: "5",
      name: "Impuestos",
      description: "3 documentos",
      icon: "folder-outline",
      href: "/impuestos",
      contents: [],
    },
    {
      id: "6",
      name: "Nóminas",
      description: "6 documentos",
      icon: "folder-outline",
      href: "/nominas",
      contents: [],
    },
    {
      id: "7",
      name: "Seguros",
      description: "1 documento",
      icon: "folder-outline",
      href: "/seguros",
      contents: [],
    },
    {
      id: "8",
      name: "Correspondencia",
      description: "8 documentos",
      icon: "folder-outline",
      href: "/correspondencia",
      contents: [],
    },
    {
      id: "9",
      name: "Informes",
      description: "4 documentos",
      icon: "folder-outline",
      href: "/informes",
      contents: [],
    },
    {
      id: "10",
      name: "Presupuestos",
      description: "2 documentos",
      icon: "folder-outline",
      href: "/presupuestos",
      contents: [],
    },
    {
      id: "11",
      name: "Pagos",
      description: "7 documentos",
      icon: "folder-outline",
      href: "/pagos",
      contents: [],
    },
    {
      id: "12",
      name: "Clientes",
      description: "9 documentos",
      icon: "folder-outline",
      href: "/clientes",
      contents: [],
    },
    {
      id: "13",
      name: "Proveedores",
      description: "3 documentos",
      icon: "folder-outline",
      href: "/proveedores",
      contents: [],
    },
  ]);

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content title="Documentos" />
        <Appbar.Action
          icon="create"
          onPress={() => {
            navigation.navigate("uploadDocument");
          }}
        />
      </Appbar.Header>

      <View style={{ padding: 15, gap: 10 }}>
        <Searchbar placeholder="Buscar documentos o carpetas" onChangeText={setSearchQuery} value={searchQuery} />

        <Text variant="titleMedium">Folders</Text>
        <KuFoldersManager folders={folders} />
      </View>
    </ScrollView>
  );
}
