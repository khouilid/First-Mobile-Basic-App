import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View, Platform, StatusBar } from 'react-native';


const StartScreen = ({onclick}) => {
    return (
        <View style={styles.start}>

            <Text style={styles.title}>Hello this is start screen !</Text>

      
            <Button  color="#FF5733" width="80" title="Start" onPress={onclick}/>
        
            
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
        fontSize: 30,
        color:"white",
        width:'60%',
      
    },
  
   
})