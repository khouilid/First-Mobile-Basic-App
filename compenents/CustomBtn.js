import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View, Platform, StatusBar, TouchableOpacity } from 'react-native';

const CustomBtn = ({action}) => {
    return (
        <>
         <TouchableOpacity
            style={styles.btn}
            onPress={action}
            >
            <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity> 
            
        </>
    )
}
const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#FF5733',
        width:300,
        padding:12,
        margin: 12,
        borderRadius:50,
        textAlign:'center',
      },
      btnText:{
        fontWeight:'bold',
        color:'white',
        alignSelf: "center",
      },
    
})


export default CustomBtn
