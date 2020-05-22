import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from '../styles/styles';

const Detail = ({navigation, route}) => {
  const routeHook = useRoute();

  console.log(routeHook.params);

  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenName}</Text>
      <Button
        title="View Bottom Tabs"
        onPress={() => navigation.navigate('Bottom Tabs')}
      />
      <Button
        title="View Top Tabs"
        onPress={() => navigation.navigate('Top Tabs', {name: 'Param1'})}
      />
    </View>
  );
};

export default Detail;
