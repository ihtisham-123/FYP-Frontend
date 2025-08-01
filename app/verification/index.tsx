import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'
const VerificationScreen = () => {

    const routerFunction = useRouterFunction();
  const [code1, setCode1] = useState('')
  const [code2, setCode2] = useState('')
  const [code3, setCode3] = useState('')
  const [code4, setCode4] = useState('')

  // Refs for auto-focus functionality
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)

 
  const handleSendCodeAgain = () => {
    // Add resend code logic here
    console.log('Resend code')
  }

  // Auto-focus to next input
  const handleInputChange = (text, setCode, nextInputRef) => {
    setCode(text)
    if (text.length === 1 && nextInputRef) {
      nextInputRef.current?.focus()
    }
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
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        We have sent a code to your registered email address
      </Text>

      {/* Code Input Container */}
      <View style={styles.codeContainer}>
        <View style={styles.codeInputWrapper}>
          <TextInput
            ref={input1Ref}
            style={styles.codeInput}
            keyboardType='number-pad'
            maxLength={1}
            value={code1}
            onChangeText={(text) => handleInputChange(text, setCode1, input2Ref)}
          />
        </View>

        <View style={styles.codeInputWrapper}>
          <TextInput
            ref={input2Ref}
            style={styles.codeInput}
            keyboardType='number-pad'
            maxLength={1}
            value={code2}
            onChangeText={(text) => handleInputChange(text, setCode2, input3Ref)}
          />
        </View>

        <View style={styles.codeInputWrapper}>
          <TextInput
            ref={input3Ref}
            style={styles.codeInput}
            keyboardType='number-pad'
            maxLength={1}
            value={code3}
            onChangeText={(text) => handleInputChange(text, setCode3, input4Ref)}
          />
        </View>

        <View style={styles.codeInputWrapper}>
          <TextInput
            ref={input4Ref}
            style={styles.codeInput}
            keyboardType='number-pad'
            maxLength={1}
            value={code4}
            onChangeText={(text) => handleInputChange(text, setCode4, null)}
          />
        </View>
      </View>

      {/* Resend Code Section */}
      <View style={styles.resendContainer}>
        <Octicons name="dot" size={20} color="#0070C0" />
        <Pressable onPress={handleSendCodeAgain}>
          <Text style={styles.resendText}>Send code again</Text>
        </Pressable>
      </View>

      {/* Next Button */}
      <Pressable style={styles.nextButton} onPress={() => routerFunction('/forget')}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </Pressable>
    </View>
  )
}

export default VerificationScreen

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

  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },

  codeInputWrapper: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#0070C0",
    justifyContent: "center",
    alignItems: "center",
  },

  codeInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#0070C0",
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },

  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },

  resendText: {
    color: "#0070C0",
    marginLeft: 5,
    fontWeight: '500',
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