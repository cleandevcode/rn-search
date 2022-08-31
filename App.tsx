import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [searchKey, setSearchKey] = useState(``);
  return (
    <View style={styles.container}>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
