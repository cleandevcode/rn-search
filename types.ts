export type ListItem = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
};

export type ListType = {
  [key: string]: ListItem;
};

export type SearchedItem = {
  name: string;
  rank: number;
  bananaCounts: number;
  isSearched: boolean;
};
