import { List } from "react-native-paper";
import { KuFolder } from "@/types/types";
import { View } from "react-native";
import { FC } from "react";
import { KuFolderComponent } from "@/components/KuFolder";

export const KuFoldersManager: FC<{ folders: KuFolder[] }> = (props) => {
  return <View>{props.folders && props.folders.map((folder) => <KuFolderComponent folder={folder} key={folder.id} />)}</View>;
};
