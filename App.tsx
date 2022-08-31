import { useCallback, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import ListView from "./components/ListView";
import SearchBar from "./components/SearchBar";
import { data } from "./data";
import { ListItem, SearchedItem } from "./types";

export default function App() {
  const [searchKey, setSearchKey] = useState(``);
  const [searchedLists, setSearchedLists] = useState<SearchedItem[]>([]);

  const handleSearch = useCallback(() => {
    const results: SearchedItem[] = [];
    const allSorted = Object.values(data).sort((a, b) => b.bananas - a.bananas);

    const index = allSorted.findIndex(
      (tmp) =>
        tmp.name.trim().toLocaleLowerCase() ===
        searchKey.trim().toLocaleLowerCase()
    );
    if (index > -1) {
      const sliced = allSorted.slice(0, 10);
      sliced.map((tmp, idx) => {
        results.push({
          name: tmp.name,
          rank: idx + 1,
          bananaCounts: tmp.bananas,
          isSearched:
            tmp.name.trim().toLocaleLowerCase() ===
            searchKey.trim().toLocaleLowerCase(),
        });
      });

      if (index > 9) {
        results[9].name = allSorted[index].name;
        results[9].bananaCounts = allSorted[index].bananas;
        results[9].isSearched = true;
        results[9].rank = index + 1;
      }

      setSearchedLists(results);
    } else {
      const errorText = `This user name does not exist! Please specify an existing user name!`;
      alert(errorText);
    }
  }, [setSearchKey, data, searchKey]);

  return (
    <View style={styles.container}>
      <SearchBar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        onSearch={handleSearch}
        clearSearchKey={() => setSearchKey(``)}
      />
      {searchedLists.length > 0 && <ListView lists={searchedLists} />}
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
