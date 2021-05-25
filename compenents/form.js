
import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View } from 'react-native';


export const form = ({setName,name,setFinalName}) => {
    return (
        <View>

        <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="What's your name !"
                />

       <Button  color="#FF5733" title="Start" onPress={() => setFinalName(name)}/>
        
    </View>
    )
}

