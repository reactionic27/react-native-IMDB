import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { MovieType } from '../redux/types';

const screenWidth = Dimensions.get('window').width;

type Props = {
  item: MovieType;
};

export function MovieItem(props: Props) {
  const { item } = props;
  return (
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
          {item.original_title || item.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.overview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
