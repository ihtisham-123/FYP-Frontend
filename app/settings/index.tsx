import { useRouterFunction } from '@/hooks/userouter';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

const index=() => {
    const routerFunction = useRouterFunction();

    return(
    <SafeAreaView style={styles.container}>



    <View style={styles.topRow}>


     {/* Back Button */}
          <Pressable style={styles.backButton} onPress={() => routerFunction('/')}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        
        <Image
                      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCKQaRhGCGXeTqKe2xGD0wH9N3_37Dg_7Mw&s" }}
                      style={styles.profileImage}
        />
    </View>
    


    {/* Header */}
          <Text style={styles.heading}>Settings</Text>

    

        {/* Profile Box */}
    <View style={styles.profileBox}>
      <View style={styles.profileIcon}>
        <Text style={styles.profileInitials}>JA</Text>
      </View>
      <View>
        <Text style={styles.profileName}>Javeria Anwar</Text>
        <Text style={styles.profileEmail}>javeria@email.com</Text>
        <Text style={styles.profilePlan}>Premium Plan  2 accounts connected</Text>
      </View>
    </View>

    {/* Settings Menu */}
    <View style={styles.settingItem}>
      <Ionicons name="person" size={20} color="black" style={styles.icon} />
      <View>
        <Text style={styles.menuTitle}>Profile Settings</Text>
        <Text style={styles.menuDesc}>Edit Your Personal Information</Text>
      </View>
    </View>

    <View style={styles.settingItem}>
      <Ionicons name="notifications" size={20} color="black" style={styles.icon} />
      <View>
        <Text style={styles.menuTitle}>Notifications</Text>
        <Text style={styles.menuDesc}>Manage notification preferences</Text>
      </View>
    </View>

    <View style={styles.settingItem}>
      <Ionicons name="shield-checkmark" size={20} color="black" style={styles.icon} />
      <View>
        <Text style={styles.menuTitle}>Privacy & Security</Text>
        <Text style={styles.menuDesc}>Account Security Settings</Text>
      </View>
    </View>

    <View style={styles.settingItem}>
      <Ionicons name="help-circle" size={20} color="black" style={styles.icon} />
      <View>
        <Text style={styles.menuTitle}>Help & Support</Text>
        <Text style={styles.menuDesc}>Get Help and Contact soon</Text>
      </View>
    </View>

    {/* App Info */}
    <View style={styles.appInfoBox}>
      <Text style={styles.menuTitle}>App Information</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Version</Text>
        <Text style={styles.infoText}>12.0</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Last Update</Text>
        <Text style={styles.infoText}>Dec 15, 2024</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Storage Used</Text>
        <Text style={styles.infoText}>156 MB</Text>
      </View>
    </View>

    {/* Footer Links */}
    <View style={styles.footerLinks}>
      <Text style={styles.linkText}>Terms of Service</Text>
      <Text style={styles.linkText}>Privacy Policy</Text>
      <Text style={styles.linkText}>About</Text>
    </View>

    {/* Logout Button */}
    <Pressable style={styles.logoutButton} onPress={() => routerFunction('/')}>
      <Text style={styles.logoutText}>Logout</Text>
    </Pressable>

  </SafeAreaView>
);

};

export default index;

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#fff', padding: 16 },
backButton: { marginBottom: 10 },
 topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BAC',
    marginVertical: 16,
    textAlign: 'center',
  },

  profileBox: {
  flexDirection: 'row',
  backgroundColor: '#FFB847',
  padding: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginBottom: 16,
},
profileIcon: {
  backgroundColor: '#005BAC',
  width: 50,
  height: 50,
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
},
profileInitials: { color: '#fff', fontWeight: 'bold' },
profileName: { fontWeight: 'bold', fontSize: 16 },
profileEmail: { color: '#444' },
profilePlan: { fontSize: 12, color: '#555' },

settingItem: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#E5E5E5',
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
},
icon: { marginRight: 10 },
menuTitle: { fontWeight: 'bold', color: '#005BAC' },
menuDesc: { fontSize: 12, color: '#444' },

appInfoBox: {
  backgroundColor: '#E5E5E5',
  borderRadius: 10,
  padding: 12,
  marginTop: 10,
  marginBottom: 10,
},
infoRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 4,
},
infoText: {
  fontSize: 13,
  color: '#333',
},

footerLinks: {
  backgroundColor: '#E5E5E5',
  borderRadius: 10,
  padding: 12,
  alignItems: 'center',
  gap: 4,
},
linkText: { color: '#005BAC', fontSize: 14 },

logoutButton: {
  backgroundColor: '#FFB847',
  padding: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 12,
},
logoutText: { color: 'black', fontWeight: 'bold' },

})