import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'
const ResetScreen = () => {

    const routerFunction = useRouterFunction();
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleDone = () => {
    // Add password reset logic here
    console.log('Password reset completed')

        routerFunction('/login')

    //shouuld navigate to login page /
    
  }

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
      <Text style={styles.title}>Reset Your Password</Text>
      <Text style={styles.subtitle}>
        Set a new password to regain access to your account securely
      </Text>

      {/* Password Input Fields */}
      <TextInput 
        placeholder='New password' 
        style={styles.passwordInput}
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TextInput 
        placeholder='Confirm your password' 
        style={styles.passwordInput}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Done Button */}
      <Pressable style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </Pressable>
    </View>
  )
}

export default ResetScreen

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
    marginBottom: 40,
    lineHeight: 20,
  },

  passwordInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 45,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#0070C0",
  },

  doneButton: {
    backgroundColor: "#FFBE55",
    width: "100%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },

  doneButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
})