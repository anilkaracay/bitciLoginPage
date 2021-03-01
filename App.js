import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import ANLInput from "./src/Components/UI/ANLInput";
import ANLButton from "./src/Components/UI/ANLButton";

export default class App extends Component {
  state = {
    passwordIsShowing: false,
  };

  render() {

    return (
      <SafeAreaView>
        <View style={{ margin: 15 }}>
          <ANLInput style={{ marginTop: 3, marginBottom: 15 }}
                    text={"Telefon veya E-Posta adresi"}
          />
          <ANLInput




            secureTextEntry={true}
            text={"Şifre"}
          />
          <TouchableOpacity style={{ alignItems: "flex-end", marginTop: 5 }} onPress={() => alert("şifreyi yenile")}>
            <Text>Şifremi Unuttum</Text>
          </TouchableOpacity>
          <ANLButton style={{ backgroundColor: "#4acb41", marginTop: 25 }}
                     text={"Giriş Yap"}
          />
          <Text style={{ color: "#cdc9c9", textAlign: "center", marginTop: 18 }}>Veya</Text>
          <ANLButton style={{ backgroundColor: "#d6d1d1", marginTop: 15 }}
                     text={"Kayıt Ol"}
          />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
