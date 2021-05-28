import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,TouchableOpacity, Text, View } from 'react-native';
import CustomBtn from './CustomBtn'



const V1 = ({setFinalName}) => {
    const [nam, setNam]= React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [text, onChangeText] = React.useState("");
    const [data, setdata] = React.useState(null)

    let validateInfo = () => {
       if(nam !== null && email !== null){
         return setdata(true);
       }
       return setdata(false)
    }
    return (
     
        <View>
          <Text style={styles.title}>Marratone Go</Text>
   


          {
            data == null || !data ?
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
                    {
                      data == false ? <Text style={styles.note}>Please enter a valid informations!</Text> : null
                    }
              
                    <CustomBtn action={validateInfo}/>  
              </>
        
            : data ? <Text>Thank you for submiting Mr.{nam}</Text> : null         
          }
        </View>    
    )
}

export default V1


const styles = StyleSheet.create({
    input: {
 
      width:300,
      padding:12,
      margin: 12,
      borderRadius:50,
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
    note:{
       color:'red',
       fontWeight:'bold',
       alignSelf: "center",
    },
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
    title:{
      fontWeight:'bold',
      fontSize:30,
      color:'red',
      alignSelf: "center",
    
    },
  

  });
  