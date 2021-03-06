import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View } from 'react-native';
import Form from './compenents/form'
import V1 from './compenents/v1'
import StartScreen from './compenents/startScreen' 


export default function App() {


  const [text, onChangeText] = React.useState("");

  const [nam, setNam]= React.useState("");

  const [finalname, setFinalNam] = React.useState(null);

  let putname = (na) => setFinalNam(na);
  let [screen, setScreen] = React.useState(1);





  return (
    

    <View style={styles.container}>
   
           {
          screen == 1?  
          
        <StartScreen onclick={() => setScreen(2)}/>
          : <V1  setFinalName={putname} />
        }



    </View>
  );
}

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
