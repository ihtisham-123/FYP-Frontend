import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouterFunction } from '@/hooks/userouter'
import { API_BASE_URL } from '@/utils/api'

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const SignupScreen = () => {
    const routerFunction = useRouterFunction();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (message) setMessage('');
    };


    const validateForm = () => {
        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            setMessage('Please fill in all fields');
            return false;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return false;
        }

        return true;
    };

    const handleSignup = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Account created successfully! Redirecting...');
                setTimeout(() => routerFunction('/login'), 1500);
            } else {
                setMessage(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            setMessage('Network error. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const inputFields: {
        key: keyof FormData;
        placeholder: string;
        secureTextEntry?: boolean;
        keyboardType?: 'default' | 'email-address';
        autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    }[] = [
            { key: 'name', placeholder: 'Enter Your Name', autoCapitalize: 'words' },
            { key: 'email', placeholder: 'Enter Your Email', keyboardType: 'email-address', autoCapitalize: 'none' },
            { key: 'password', placeholder: 'Enter Your Password', secureTextEntry: true },
            { key: 'confirmPassword', placeholder: 'Confirm Your Password', secureTextEntry: true }
        ];


    return (
        <View style={styles.container}>
            <Pressable onPress={() => routerFunction('/')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={20} color="black" />
            </Pressable>

            <Image
                style={styles.logo}
                source={{ uri: "https://via.placeholder.com/150" }}
            />

            <Text style={styles.welcomeTitle}>Join the Revolution</Text>
            <Text style={styles.welcomeSubtitle}>
                Sign up and let AI help you create content that connects, engages, and inspires.
            </Text>

            <View style={styles.tabContainer}>
                <Pressable style={styles.inactiveTab} onPress={() => routerFunction('/login')}>
                    <Text style={styles.inactiveTabText}>Login</Text>
                </Pressable>
                <Pressable style={styles.activeTab}>
                    <Text style={styles.activeTabText}>Signup</Text>
                </Pressable>
            </View>

            {message ? (
                <Text style={[styles.message, { color: message.includes('successfully') ? '#28a745' : '#dc3545' }]}>
                    {message}
                </Text>
            ) : null}

            {inputFields.map(({ key, ...props }) => (
                <TextInput
                    key={key}
                    style={styles.input}
                    value={formData[key]}
                    onChangeText={(value) => updateField(key, value)}
                    {...props}
                />
            ))}

            <Pressable
                style={[styles.signupButton, isLoading && styles.disabledButton]}
                onPress={handleSignup}
                disabled={isLoading}
            >
                <Text style={styles.signupButtonText}>
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                </Text>
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
    disabledButton: {
        opacity: 0.7,
    },
    signupButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
})