import { useRouterFunction } from '@/hooks/userouter';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

const index = () => {
    const routerFunction = useRouterFunction();

    return(
    <SafeAreaView style={styles.container}>
    <View style={styles.topRow}>
        <Pressable style={styles.backButton} onPress={() => routerFunction('/')}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCKQaRhGCGXeTqKe2xGD0wH9N3_37Dg_7Mw&s" }}
            style={styles.profileImage}
        />
        <View style={styles.icons}>
            <Ionicons name="notifications-circle" size={32} color="#0077CC" />
            <Ionicons name="settings" size={32} color="#0077CC" />
        </View>
    </View>
    

    {/* Header */}
          <Text style={styles.heading}>Account Management</Text>

    </SafeAreaView>    
    );

}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16 },



    backButton: { marginBottom: 10 },


    topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  
  profileImage: { width: 50, height: 50, borderRadius: 25 },


  icons: { flexDirection: 'column', gap: 10 },



  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BAC',
    marginVertical: 16,
    textAlign: 'center',
  },
});