import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ANLButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={[{ alignItems: "center", borderRadius: 5 }, props.style]}>
        <Text style={{ margin: 10 }}>{props.text}</Text>
      </TouchableOpacity>
    </View>

  );
};
export default ANLButton;

const styles = StyleSheet.create({});
