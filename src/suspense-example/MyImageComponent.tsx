import React, { Suspense } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

// Define the props interface
interface MyImageComponentProps {
  item: string; // Change 'any' to a more specific type
}

const MyImageComponent: React.FC<MyImageComponentProps> = ({ item }) => {

  return (
    <View style={styles.container}>

<Suspense fallback={ <ActivityIndicator size="large" color="red" style={styles.loader} />}>
<FastImage
        style={styles.image}
        source={{
          uri: `https://unsplash.it/400/400?image=${item}`,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
</Suspense>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Center the loader and image
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 2,
    backgroundColor: '#D7FBCB',
  },
  loader: {
    position: 'absolute', // Position loader over the image
  },
});

export default MyImageComponent;
