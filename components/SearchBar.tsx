import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type SearchBarType = {
  setSearchKey: (text: string) => void;
  searchKey: string;
  onSearch: () => void;
  clearSearchKey: () => void;
};

const SearchBar: React.FC<SearchBarType> = ({
  setSearchKey,
  searchKey,
  onSearch,
  clearSearchKey,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <Icon name="search" size={15} color="lightgray" />
        <TextInput
          placeholder="User name..."
          placeholderTextColor="lightgray"
          style={styles.searchTextInput}
          value={searchKey}
          onChangeText={setSearchKey}
        />
        <TouchableOpacity onPress={clearSearchKey}>
          <Icon name="close" size={15} color="lightgray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={onSearch}>
        <Text style={styles.searchBtnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: `row`,
    paddingVertical: 10,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  rowContent: {
    flexDirection: `row`,
    width: `48%`,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `lightgray`,
    alignItems: `center`,
    padding: 10,
    height: 40,
  },
  searchTextInput: {
    marginLeft: 5,
    width: `100%`,
  },
  searchBtn: {
    width: `48%`,
    height: 40,
    alignItems: `center`,
    justifyContent: `center`,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `lightgray`,
  },
  searchBtnText: {
    color: `#066ff5`,
  },
});
