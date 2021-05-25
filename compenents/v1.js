import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View } from 'react-native';



const V1 = ({setFinalName}) => {
    const [nam, setNam]= React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [text, onChangeText] = React.useState("");
    const [data, setdata] = React.useState(false)

    let validateInfo = () => {
       if(nam !== null && email !== null){
         setdata(true);
       }
    }
    return (
     
        <View>
          {
            !data ?
            <>
                    
                  <TextInput
                  style={styles.input}
                  onChangeText={setNam}
                  value={nam}
                  placeholder="Your name"
                  />
                    <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Your email"
                    />
                  
                    <Button  color="#FF5733" title="Start" onPress={validateInfo}/>
                          
              </>
        
            : <Text>Thank you for submiting Mr.{nam}</Text>          
          }
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
  