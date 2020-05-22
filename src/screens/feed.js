import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from '../styles/styles';

const Feed = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Button
        title="Go to Feed Item"
        onPress={() =>
          navigation.navigate('Detail', {screenName: 'Details Screen!!'})
        }
      />
    </View>
  );
};

export default Feed;
