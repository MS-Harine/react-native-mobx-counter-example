import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { observer } from 'mobx-react';
import Counter from './Counter';

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{Counter.count}</Text>
        <Button
          onPress={() => Counter.countUp()}
          title="+" />
        <Button
          onPress={() => Counter.countDown()}
          title="-" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
