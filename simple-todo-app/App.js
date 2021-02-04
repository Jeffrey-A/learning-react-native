import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.setState({ items: [
      "test",
      "test 2",
      "test 3",
      "test 4",
      "test 5",
    ]})
  }

  handlePress = (e) => {
    this.setState({ items: [ ...this.state.items, "new Item"]})
  }
  render() {
    const { items } = this.state;

    return (
      <View style={styles.container}>
        <Button onPress={this.handlePress} title="Add" />
        <ScrollView>
          { items.map( (item, index) => <Text key={`${item}-${index}`}>{item}</Text>)}
        </ScrollView>
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
    marginTop: 50,
  },
});
