import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View } from 'react-native';



const V1 = ({setFinalName}) => {
    const [nam, setNam]= React.useState("");
    const [text, onChangeText] = React.useState("");
    return (
     
        <View>

        <TextInput
                style={styles.input}
                onChangeText={setNam}
                value={nam}
                placeholder="What's your name !"
                />

        <Button  color="#FF5733" title="Start" onPress={() => setFinalName(nam)}/>
        
        </View>    
    )
}

export default V1


const styles = StyleSheet.create({
    input: {
      height: 40,
      width:200,
      padding:10,
      margin: 12,
      //borderWidth: 1,
      
      backgroundColor:"#f0ffff",
    },
    container: {
      flex: 1,
      backgroundColor: '#FFBD33',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    h1:{
      fontWeight: 'bold',
      fontSize: 30,
    },
  
  });
  