import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';


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
    <View>
      <Navbar title="ToDo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          { todos.map(todo =>{
            return <Text key={todo.id}>{todo.title}</Text>
            }
            ) 
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
