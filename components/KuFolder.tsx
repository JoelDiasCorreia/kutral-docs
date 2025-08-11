import { useState } from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";
import { KuFolder } from "@/types/types";
import { DocumentComponent } from "@/components/KuDocument";

export const KuFolderComponent = ({ folder }: { folder: KuFolder }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasContents = folder.contents && folder.contents.length > 0;
  return (
    <View>
      <List.Item
        title={folder.name}
        description={`${hasContents ? folder.contents.length : 0} documentos`}
        left={(props) => <List.Icon {...props} icon={folder.icon} />}
        onPress={() => {
          // Navigate to the folder's href
          console.log(`Navigating to ${folder.href}`);
          setIsCollapsed((prev) => !prev);
        }}
      />
      {isCollapsed && hasContents && folder.contents?.map((doc, index) => <DocumentComponent doc={doc} key={index} />)}
    </View>
  );
};
