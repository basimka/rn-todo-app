import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import React, { useState } from 'react';
import { AddTodo } from './src/AddTodo';


export default function App() {
  const [todos,setTodos] = useState([])

  const addTodo = title => {
    //const newTodo = {
    //  id: Date.now().toString(),
    //  title
    //}

    setTodos(prev => [
      ...prev,
      {
      id: Date.now().toString(),
      title
    }])
  }

  return (
    <View style={styles.container}>
      <Navbar title="ToDo App" />
      <AddTodo onSubmit={AddTodo}/>
      <View>
        { todos.map(todo =>{
          return <Text key={todo.id}>{todo.title}</Text>
        }) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
