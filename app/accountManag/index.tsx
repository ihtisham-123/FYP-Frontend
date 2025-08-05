import { useRouterFunction } from '@/hooks/userouter';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
            <Pressable onPress={()=>routerFunction('/notification')}><Ionicons name="notifications-circle" size={32} color="#0077CC" /></Pressable>
            <Pressable onPress={()=>routerFunction('/settings')}><Ionicons name="settings" size={32} color="#0077CC" /></Pressable>
        </View>
    </View>
    

    {/* Header */}
          <Text style={styles.heading}>Account Management</Text>


     {/* Connect New Account Section */}
    <View style={styles.connectBox}>
        <Ionicons name="add-circle-outline" size={40} color="black" />
        <Text style={styles.connectText}>Connect New Account</Text>
        <Text style={styles.subText}>Add more accounts to expand your reach</Text>
        <Pressable style={styles.addButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Add Account</Text>
        </Pressable>
    </View>


   <Text style={styles.subHeading}>Your Accounts</Text>
    <ScrollView style={styles.scrollArea}>
  <View style={styles.accountCard}>
    <Image
      source={{ uri: "https://i.pravatar.cc/100" }}
      style={styles.accountImage}
    />
    <View style={styles.accountInfo}>
      <Text style={styles.accountName}>Facebook</Text>
      <Text style={styles.username}>@javeria</Text>
      <Text style={styles.followers}>2.5k followers</Text>
    </View>
    <View style={styles.iconsRow}>
      <View style={styles.iconCircle}>
        <Ionicons name="settings" size={18} color="#0077CC" />
      </View>
      <View style={styles.iconCircle}>
        <Ionicons name="trash" size={18} color="#FF3B30" />
      </View>
    </View>
  </View>
   </ScrollView>





<Text style={styles.subHeading}>Account Statistics</Text>
    <View style={styles.statsContainer}>
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Connected</Text>
        </View>
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>5.4k</Text>
            <Text style={styles.statLabel}>Total Reach</Text>
        </View>
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>69%</Text>
            <Text style={styles.statLabel}>Success Rate</Text>
        </View>
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Posts This Month</Text>
        </View>
    </View>


    </SafeAreaView>    
    );

}

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


  icons: { flexDirection: 'column', gap: 10 },



  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BAC',
    marginVertical: 16,
    textAlign: 'center',
  },


   connectBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },

  connectText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },

  subText: {
    fontSize: 12,
    color: '#555',
    marginVertical: 4,
  },

  addButton: {
    backgroundColor: '#FDBA4E',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  scrollArea: {
  marginBottom: 20,
  maxHeight: 130, // adjust height if needed
},

accountCard: {
  backgroundColor: '#f2f2f2',
  padding: 12,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  marginBottom: 10,
},

accountImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
},

accountInfo: {
  flex: 1,
},

accountName: {
  fontWeight: 'bold',
  fontSize: 16,
},

username: {
  color: '#666',
},

followers: {
  color: '#999',
  fontSize: 12,
},

iconsRow: {
  flexDirection: 'row',
  gap: 10,
},

iconCircle: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: '#E6F0FA',
  justifyContent: 'center',
  alignItems: 'center',
},

 subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },

  statBox: {
    backgroundColor: '#FDBA4E',
    padding: 16,
    borderRadius: 10,
    width: '47%',
    marginBottom: 10,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  statLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});