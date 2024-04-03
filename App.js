import React from "react";
import { useState } from "react";
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    alert(`Đăng nhập thành công với Username là: ${userName} và Password là: ${password}`)
  }

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/logo.jpg')} style={styles.logo} />
        </View>
        <Text style={styles.registerText}>REGISTER</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={userName}
            onChangeText={setUserName}
            placeholder="Username"
          />
          <TextInput
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
export default App;

const styles = StyleSheet.create(
  {
    background: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: width,
      height: height
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    imageContainer: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: height * 0.05
    },
    inputContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    logo: {
      width: width * 0.8,
      height: height * 0.25,
      resizeMode: "contain"
    },
    inputText: {
      width: width * 0.8,
      height: height * 0.05,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 5,
      marginBottom: height * 0.02,
      paddingHorizontal: 10
    },
    button: {
      width: width * 0.8,
      height: height * 0.05,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5
    },
    buttonText: {
      color: "white",
      fontSize: height * 0.02
    },
    registerText: {
      fontSize: height * 0.025,
      fontWeight: 'bold',
      textAlign: 'right',
      width: '100%',
      marginTop: -height * 0.07,
      marginRight: width * 0.05,
      marginBottom: height * 0.01
    }
  }
)
