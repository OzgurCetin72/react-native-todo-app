import React from 'react';
import { View ,Text} from "react-native";
import styles from "./TodoHeader.style";

const TodoHeader= ({data}) => {
 
  const filterList = data.filter(item => item.isDone==false)

  return(
    
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.count}>{filterList.length}</Text>
      </View>

    );
}

export default TodoHeader;