import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./TodoCard.style";

const TodoCard = ({ data,completed, remove}) => {
  const completedItem= () => { completed(data.id) };
  const removeItem= () => { remove(data.id) };
  return (
    <TouchableOpacity 
    onPress={completedItem}
    onLongPress={removeItem}
    >
      <View style={data.isDone ? styles.after_completed_container : styles.before_completed_container }>
        <Text style={data.isDone && styles.after_text}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoCard;
