import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'

const ForgetScreen = () => {
  const [email, setEmail] = useState('')
  const routerFunction = useRouterFunction();

  
   
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable onPress={() => routerFunction('/')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </Pressable>

      {/* Logo */}
      <Image 
        style={styles.logo}
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with your actual logo
      />
      
      {/* Title and Description */}
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>
        Enter your email account to reset password
      </Text>

      {/* Email Input */}
      <TextInput 
        placeholder='Enter Your Email' 
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Illustration */}
      <Image 
        style={styles.illustration}
        source={{ uri: "https://via.placeholder.com/250x250/E0E0E0/999999?text=Forgot+Password" }} // Replace with your actual illustration
      />

      {/* Next Button */}
      <Pressable style={styles.nextButton} onPress={() => routerFunction('/reset')}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </Pressable>
    </View>
  )
}

export default ForgetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '600',
    color: "#0070C0",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#0070C0",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 20,
  },

  emailInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 45,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#0070C0",
  },

  illustration: {
    width: 250,
    height: 250,
    marginBottom: 40,
    resizeMode: 'contain',
  },

  nextButton: {
    backgroundColor: "#FFBE55",
    width: "100%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
})