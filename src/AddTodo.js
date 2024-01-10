import React from 'react'
import { View,StyleSheet,TextInput,Button } from 'react-native'

export const AddTodo = ({ onSubmint }) => {

    const pressHandler = () =>{
        onSubmint('Test todo!')
    }
    return(
        <View style = {styles.block}>
            <TextInput />
            <Button title = 'Добавить' onPress={pressHandler}/>

        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        

    }
})
