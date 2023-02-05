import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import TodoHeader from "./components/TodoHeader";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [InputValue, setInputValue] = useState("");
  const [List, setList] = useState([]);
  const [uniqueNumber, setUniqueNumber] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const addItem = () => {
    setList([
      ...List,
      {
        id: uniqueNumber,
        title: InputValue,
        isDone: false,
      },
    ]);
    setInputValue("");
    setUniqueNumber(uniqueNumber + 1);
    setIsActive(false)
  };

  const completedItem = (id) => {
    updateList = List.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setList(updateList);
  };

  const removeItem = (id) => {
    const filterList = List.filter((item) => 
      item.id !== id
    );

    setList(filterList);
  };
  console.log(List);

  const render = ({ item }) => (
    <TodoCard data={item} completed={completedItem} remove={removeItem} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TodoHeader data={List} />
      <FlatList data={List} renderItem={render} />
      <TodoInput
        value={InputValue}
        setValue={setInputValue}
        onPress={addItem}
        isActive={isActive}
        setIsActive={setIsActive}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
    padding: 10,
    paddingTop: 50,
  },
});

export default App;
