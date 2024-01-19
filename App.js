import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(123)
  const [todos,setTodos] = useState([])

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo}/>
  )

  if (todoId){
    content = <TodoScreen />
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
        {  content  }
        
        
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
