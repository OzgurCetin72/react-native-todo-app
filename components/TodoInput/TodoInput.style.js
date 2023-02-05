import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: "#2f4f4f",
    padding: 5,
    borderRadius: 10,
    
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    padding: 5,
    borderRadius: 5,
  },
  normal_button: {
    backgroundColor: "#808080",
    margin: 10,
    padding: 8,
    borderRadius: 10,
  },

  active_button: {
    backgroundColor: "#ff7f50",
    margin: 10,
    padding: 8,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#dcdcdc",
    fontSize: 15,
  },
});

export default styles;
