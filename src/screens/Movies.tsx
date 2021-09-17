import React, { useState, useEffect, Fragment, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MovieItem } from '../components/MovieItem';
import { GET_ALL_MOVIES_REQUEST } from '../redux/constants';
import { getMovieState } from '../redux/selectors';

export function Movies() {
  const dispatch = useDispatch();
  const { movies } = useSelector(getMovieState);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState('');
  const fetchMore = useCallback(() => setPage(page + 1), [page]);

  useEffect(() => {
    if (query.length > 2) {
      dispatch({ type: GET_ALL_MOVIES_REQUEST, payload: { query } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSearch = (text: string) => {
    setQuery(text);
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.banner} />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={(queryText) => handleSearch(queryText)}
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.list}>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieItem item={item} />}
            onEndReachedThreshold={0.9}
            onEndReached={fetchMore}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 0,
    backgroundColor: '#F1F1F1',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  list: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchView: {
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});
