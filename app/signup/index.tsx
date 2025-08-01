import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'

const SignupScreen = ({ navigation }: any) => {

     const routerFunction = useRouterFunction();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleLogin = () => {
        // router.push('/login')  
    }

const handleBack = () => {
    // navigation?.navigate("FirstScreen")
}

const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup pressed')
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

        {/* Welcome Text */}
        <Text style={styles.welcomeTitle}>Join the Revolution</Text>
        <Text style={styles.welcomeSubtitle}>
            Sign up and let AI help you create content that connects, engages, and inspires.
        </Text>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
            <Pressable style={styles.inactiveTab} onPress={() => routerFunction('/login')}>
                <Text style={styles.inactiveTabText}>Login</Text>
            </Pressable>
            <Pressable style={styles.activeTab}>
                <Text style={styles.activeTabText}>Signup</Text>
            </Pressable>
        </View>

        {/* Input Fields */}
        <TextInput
            placeholder='Enter Your Name'
            style={styles.input}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
        />

        <TextInput
            placeholder='Enter Your Email'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />

        <TextInput
            placeholder='Enter Your Password'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TextInput
            placeholder='Confirm Your Password'
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
        />

        {/* Signup Button */}
        <Pressable style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
        </Pressable>
    </View>
)
}

export default SignupScreen

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

    welcomeTitle: {
        fontSize: 30,
        fontWeight: '600',
        color: "#0070C0",
        marginBottom: 10,
    },

    welcomeSubtitle: {
        fontSize: 15,
        color: "#0070C0",
        textAlign: "center",
        marginBottom: 30,
        lineHeight: 20,
    },

    tabContainer: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 20,
        borderBottomWidth: 1.5,
        borderColor: '#ccc',
    },

    activeTab: {
        flex: 1,
        borderBottomWidth: 3,
        borderColor: '#0070C0',
        paddingBottom: 10,
        alignItems: "center",
    },

    activeTabText: {
        fontWeight: 'bold',
        color: '#0070C0',
        fontSize: 18,
    },

    inactiveTab: {
        flex: 1,
        paddingBottom: 10,
        alignItems: "center",
    },

    inactiveTabText: {
        fontWeight: 'bold',
        color: '#ccc',
        fontSize: 18,
    },

    input: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: 45,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#0070C0",
    },

    signupButton: {
        backgroundColor: "#FFBE55",
        width: "100%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
    },

    signupButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
})