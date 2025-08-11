import { List } from "react-native-paper";
import { KuDocument } from "@/types/types";
import { useNavigation } from "expo-router";

export const DocumentComponent = ({ doc }: { doc: KuDocument }) => {
  const navigation = useNavigation();
  return (
    <List.Item
      style={{ paddingLeft: 20 }}
      key={doc.id}
      title={doc.name}
      description={doc.description}
      left={(props) => <List.Icon {...props} icon="file-document-outline" />}
      onPress={() => {
        // Navigate to the document's href
        console.log(`Navigating to ${doc.href}`);
        navigation.navigate(`documentDetails`);
      }}
    />
  );
};
