import React from 'react'
import { View,StyleSheet,TextInput,Button } from 'react-native'

export const AddTodo = props => {
    return(
        <View style = {styles.block}>
            <TextInput />
            <Button title = 'ДОБавить ' />

        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        

    }
})
