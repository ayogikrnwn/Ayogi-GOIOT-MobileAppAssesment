import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const Input = ({label, value, onChangeText, secureTextEntry}) =>{


  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        // keyboardType={keyboardType}
        // onFocus={onFocusForm}
        // onBlur={onBlurForm}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        // editable={!disable}
        // selectTextOnFocus={!disable}
        // multiline={multiline}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#C6BDBD",
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 6,
    fontFamily: "Nunito-Regular",
  },
});