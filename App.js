import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

const First = () => (
  <Button
    title="Second"
    onPress={() => {
      Actions.push('Second');
    }}
    style={styles.container}
  />
)

const Second = () => (
  <Button
    title="Third"
    onPress={()=>Actions.push('Third')}
    style={styles.container}
  />
)

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="First" component={First}/>
          <Scene key="Second" component={Second} />
          <Stack>
            <Scene key="Third" component={First} />
          </Stack>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#ecf0f1',
  },
})
