import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import React from 'react';
import { AddTodo } from './src/AddTodo';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="ToDo App" />
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
