import React, { useState, useEffect, Fragment, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_MOVIES_REQUEST } from '../redux/constants';
import { getMovieState } from '../redux/selectors';

const screenWidth = Dimensions.get('window').width;

export function Movies() {
  const dispatch = useDispatch();
  const { movies } = useSelector(getMovieState);
  const [page, setPage] = useState<number>(1);

  const fetchMore = useCallback(() => setPage(page + 1), [page]);

  useEffect(() => {
    dispatch({ type: GET_ALL_MOVIES_REQUEST });
  }, [dispatch, page]);

  console.log('movies', movies);
  return (
    <Fragment>
      <SafeAreaView style={styles.banner} />
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={styles.imageView}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w400${
                        item.backdrop_path || item.poster_path
                      }`,
                    }}
                    style={styles.avatar}
                  />
                </View>
                <View style={styles.textView}>
                  <Text numberOfLines={1} style={styles.name}>
                    {item.title || 'No Title'}
                  </Text>
                  <Text numberOfLines={2} style={styles.description}>
                    {item.overview}
                  </Text>
                </View>
              </View>
            )}
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
  listItem: {
    height: 96,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  imageView: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    width: screenWidth - 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  description: {
    fontSize: 14,
  },
});
