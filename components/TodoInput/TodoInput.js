import React from 'react';
import { View ,Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./TodoInput.style";

const TodoInput= ({value,setValue,onPress,isActive,setIsActive}) => {
 const ChangeText= text =>{
  setValue(text)
  text !== '' ? setIsActive(true) : setIsActive(false);
 }
 
  return(
    
      <View style={styles.container}>
     
       <TextInput style={styles.input}
       placeholder='Yapılacak..'
       value={value}
       onChangeText={ChangeText}
       
       />

       <TouchableOpacity  style={isActive ? styles.active_button : styles.normal_button} onPress={onPress} >
        <Text style={styles.text}>Kaydet</Text>
       </TouchableOpacity>


       </View>
       
     

    );
}

export default TodoInput;