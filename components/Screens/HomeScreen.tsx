import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Entypo, Feather } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'


const FirstScreen = () => {

    const routerFunction = useRouterFunction();
  

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        style={styles.logo}
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with your actual logo
      />
      
      {/* App Title */}
      <Text style={styles.title}>AI POST CRAFT</Text>
      <Text style={styles.subtitle}>AI Social Media Posts Generate</Text>

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={() => routerFunction('/login')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      {/* Signup Button */}
      <Pressable style={styles.signupButton} onPress={() => routerFunction('/signup')}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </Pressable>

      {/* Features Grid */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <FontAwesome5 name="robot" size={20} color="white" />
          <Text style={styles.featureText}>AI Caption</Text>
        </View>

        <View style={styles.featureCard}>
          <Entypo name="mobile" size={20} color="white" />
          <Text style={styles.featureText}>Multiple Platform</Text>
        </View>

        <View style={styles.featureCard}>
          <FontAwesome5 name="clock" size={20} color="white" />
          <Text style={styles.featureText}>Smart Scheduling</Text>
        </View>

        <View style={styles.featureCard}>
          <Feather name="trending-up" size={20} color="white" />
          <Text style={styles.featureText}>Trending Topics</Text>
        </View>
      </View>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    paddingHorizontal: 20,
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
    fontSize: 20,
    color: "#0070C0",
    marginBottom: 40,
    textAlign: 'center',
  },

  loginButton: {
    width: "85%",
    height: 50,
    backgroundColor: "#FFBE55",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  loginButtonText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: '600',
  },

  signupButton: {
    width: "85%",
    height: 50,
    backgroundColor: "#FFBE55",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  signupButtonText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: '600',
  },

  featuresContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "center",
    gap: 15,
    maxWidth: 350,
  },

  featureCard: {
    backgroundColor: "#FFBE55",
    width: 150,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  featureText: {
    color: "#ffffff",
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
})