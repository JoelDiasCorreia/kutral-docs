import { Button, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import React, { useState } from "react";
import { KuDocument } from "@/types/types";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { List, Text } from "react-native-paper";
import {useNavigation} from "expo-router";

export default function DocumentDetailsScreen() {
  const navigation = useNavigation();
  const [doc, setDoc] = useState<KuDocument>({
    id: "1-1",
    name: "Factura 001",
    description: "Factura de enero 2023",
    href: "/facturas/001",
    folderId: "1",
    lastModified: 123123,
    createdAt: 123123,
    size: 2048,
  });
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {
          navigation.goBack();
        }} />
        <Appbar.Content title="Detalle de documento" />
      </Appbar.Header>

      <View style={{ padding: 15, gap: 10 }}>
        <IconSymbol size={28} name="sharedwithyou.circle.fill" color={"white"} />
        {doc ? (
          <>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{doc.name}</Text>
              <Text>{doc.description}</Text>
            </View>
            <View>
              <Text>Última modificación: {new Date(doc.lastModified).toLocaleDateString()}</Text>
              <Text>Tamaño: {doc.size} bytes</Text>
            </View>
          </>
        ) : (
          <Text>No se encontró el documento.</Text>
        )}
        <View style={styles.actions}>
          <Button title={"Abrir documento"} />
          <Button title={"Administrar acceso"} disabled />
          <Button title={"Compartir"} disabled/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    gap: 10,
    padding: 15,
  },
});
