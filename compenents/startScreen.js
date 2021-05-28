import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View, Platform,Image, StatusBar } from 'react-native';
import CustomBtn from './CustomBtn'



const StartScreen = ({onclick}) => {
    return (
        <View style={styles.start}>
                   <Image
                        style={styles.Logo}
                        source={require('../src/imgs/download.png')}
                    />

            <Text style={styles.title}>Hello champion, let's go for a maratone</Text>

      
            <CustomBtn action={onclick}/>  
        </View>
    )
}
export default StartScreen;


const styles = StyleSheet.create({
    start:{
        backgroundColor: '#FFBD33',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color:"white",
        width:'60%',
        textAlign:'center',
        width:300,
        margin:15,
      
    },
    Logo:{
        borderRadius:5,
    },
  
   
})