import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";

const ANLInput = (props) => {
  return (

    <View>
      <Text style={{ marginBottom: 5 }}>{props.text}</Text>
      <View>
        <TextInput style={[{ borderWidth: 1, borderColor: "#ddd" }, props.style]}
                   secureTextEntry={props.secureTextEntry}>

        </TextInput>

      </View>
    </View>
  )
    ;

};
export default ANLInput;

const styles = StyleSheet.create({});
