import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchedItem } from "../types";

const ListView: React.FC<{ lists: SearchedItem[] }> = ({ lists }) => {
  return (
    <View style={styles.container}>
      <TableHeader />
      {lists.length > 0 &&
        lists.map((list, idx) => <TableBody key={idx} item={list} />)}
    </View>
  );
};

export default ListView;

const TableHeader = () => {
  return (
    <View
      style={{
        flexDirection: `row`,
        backgroundColor: `lightgray`,
        alignItems: `center`,
        padding: 10,
      }}
    >
      <CenteredText width="30" value="Name" />
      <CenteredText width="25" value="Rank" />
      <CenteredText width="25" value="Number of bananas" />
      <CenteredText width="25" value="is Searched User?" />
    </View>
  );
};

const TableBody: React.FC<{ item: SearchedItem }> = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: `row`,
        alignItems: `center`,
        padding: 10,
        borderColor: `lightgray`,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      <CenteredText width="30" value={item.name} isSearched={item.isSearched} />
      <CenteredText width="25" value={item.rank} />
      <CenteredText width="25" value={item.bananaCounts} />
      <CenteredText width="25" value={item.isSearched ? `Yes` : `No`} />
    </View>
  );
};

const CenteredText: React.FC<{
  width: string;
  value: string | number;
  isSearched?: boolean;
}> = ({ width, value, isSearched = false }) => (
  <Text
    style={{
      textAlign: `center`,
      width: `${width}%`,
      color: isSearched ? `red` : `black`,
    }}
  >
    {value}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
