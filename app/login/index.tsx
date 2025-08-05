import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'
import { API_BASE_URL } from '@/utils/api'

type LoginResponse = {
    message?: string;
    token?: string;
};

const LoginScreen = () => {
    const routerFunction = useRouterFunction();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const validateForm = (): boolean => {
        if (!email || !password) {
            setMessage('Please enter email and password');
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data: LoginResponse = await response.json();

            if (response.ok) {
                setMessage('Login successful!');
                // Save token if needed: await AsyncStorage.setItem('token', data.token!)
                setTimeout(() => routerFunction('/home'), 1000);
            } else {
                setMessage(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setMessage('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => routerFunction('/')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={20} color="black" />
            </Pressable>

            <Image
                style={styles.logo}
                source={{ uri: "https://via.placeholder.com/150" }}
            />

            <Text style={styles.welcomeTitle}>Welcome Back!</Text>
            <Text style={styles.welcomeSubtitle}>
                Log in to unlock personalized AI insights and take your social media to the next level.
            </Text>

            <View style={styles.tabContainer}>
                <Pressable style={styles.activeTab}>
                    <Text style={styles.activeTabText}>Login</Text>
                </Pressable>
                <Pressable style={styles.inactiveTab} onPress={() => routerFunction('/signup')}>
                    <Text style={styles.inactiveTabText}>Signup</Text>
                </Pressable>
            </View>

            {message ? (
                <Text style={[styles.message, { color: message.includes('successful') ? '#28a745' : '#dc3545' }]}>
                    {message}
                </Text>
            ) : null}

            <Pressable style={styles.socialButton} onPress={() => routerFunction('/EditCaption')}>
                <FontAwesome name="apple" size={20} color="black" />
                <Text style={styles.socialButtonText}>Login with Apple</Text>
            </Pressable>

            <Pressable style={styles.socialButton}>
                <AntDesign name="google" size={20} color="black" />
                <Text style={styles.socialButtonText}>Login with Google</Text>
            </Pressable>

            <TextInput
                placeholder='Enter Your Email'
                style={styles.input}
                value={email}
                onChangeText={(value) => {
                    setEmail(value)
                    if (message) setMessage('')
                }}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder='Enter Your Password'
                style={styles.input}
                value={password}
                onChangeText={(value) => {
                    setPassword(value)
                    if (message) setMessage('')
                }}
                secureTextEntry
            />

            <Pressable style={styles.forgotPasswordContainer} onPress={() => routerFunction('/forget')}>
                <Text style={styles.forgotPasswordText}>Forget Password?</Text>
            </Pressable>

            <Pressable
                style={[styles.loginButton, isLoading && styles.disabledButton]}
                onPress={handleLogin}
                disabled={isLoading}
            >
                <Text style={styles.loginButtonText}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </Text>
            </Pressable>

            <Text style={styles.termsText}>
                By signing up, you agree to our{' '}
                <Text style={styles.linkText}>Term & Condition</Text> and{' '}
                <Text style={styles.linkText}>Privacy policy</Text>
            </Text>
        </View>
    )
}

export default LoginScreen


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

    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        width: "100%",
        height: 45,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#0070C0",
    },

    socialButtonText: {
        color: "#0070C0",
        marginLeft: 10,
        fontWeight: '500',
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

    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },

    forgotPasswordText: {
        color: "black",
        fontWeight: "bold",
    },

    loginButton: {
        backgroundColor: "#FFBE55",
        width: "100%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 20,
    },

    loginButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },

    termsText: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        lineHeight: 20,
    },

    linkText: {
        color: '#0070C0',
        textDecorationLine: 'underline',
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    disabledButton: {
        opacity: 0.7,
    },

})