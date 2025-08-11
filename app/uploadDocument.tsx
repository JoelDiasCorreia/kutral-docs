import {Link, Stack, useNavigation} from "expo-router";
import {Button, StyleSheet, View} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Appbar } from "react-native-paper";

export default function UploadDocumentScreen() {
  const navigation = useNavigation();
  return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {
            navigation.goBack();
          }} />
          <Appbar.Content title="Cargar Documento" />
        </Appbar.Header>

        <View style={{ padding: 15, gap: 10 }}>

          <View >
            <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
              Cargar un nuevo documento
            </ThemedText>





            <Button title={"Confirmar"} />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
