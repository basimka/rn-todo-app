import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';



export default function App() {
  const [todos,setTodos] = useState([])

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

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
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo}/>
        
        
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
