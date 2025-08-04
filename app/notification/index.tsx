import { useRouterFunction } from '@/hooks/userouter';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';



  

const index = () => {

  const routerFunction = useRouterFunction();

  const [postReminders, setPostReminders] = useState(false);
  const [trendingTopics, setTrendingTopics] = useState(false);
  const [engagementAlerts, setEngagementAlerts] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('push'); // or 'email'

  

  return (
    <SafeAreaView style={styles.container}>

      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={() => routerFunction('/')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>

      {/* Profile and Icons */}
      <View style={styles.topRow}>
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
      <Text style={styles.heading}>Notification Settings</Text>

      {/* Notification Types */}
      <View style={styles.notificationBox}>
        <View style={styles.sectionHeader}>
          <Ionicons name="notifications" size={24} color="#fff" />
          <Text style={styles.sectionHeaderText}>Notification Types</Text>
        </View>

        {[
          {
            label: 'Post Reminders',
            desc: 'Get reminded about scheduled posts',
            value: postReminders,
            onChange: setPostReminders,
          },
          {
            label: 'Trending Topics',
            desc: 'Daily trending topic suggestions',
            value: trendingTopics,
            onChange: setTrendingTopics,
          },
          {
            label: 'Engagement Alerts',
            desc: 'Notifications for likes and comments',
            value: engagementAlerts,
            onChange: setEngagementAlerts,
          },
          {
            label: 'Weekly Reports',
            desc: 'Summary of your posting activity',
            value: weeklyReports,
            onChange: setWeeklyReports,
          },
        ].map((item, index) => (
          <View key={index} style={styles.toggleRow}>
            <View>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
            <Switch
              value={item.value}
              onValueChange={item.onChange}
              trackColor={{ false: '#ccc', true: '#000' }}
              thumbColor={item.value ? '#FFD700' : '#fff'}
            />
          </View>
        ))}
      </View>

      {/* Delivery Method */}
      <View style={styles.deliveryBox}>
        <Text style={styles.deliveryTitle}>Delivery Method</Text>
        <Pressable
          style={[
            styles.deliveryButton,
            deliveryMethod === 'push' && styles.activeDeliveryButton,
          ]}
          onPress={() => setDeliveryMethod('push')}
        >
          <Text style={styles.deliveryText}>
            {deliveryMethod === 'push' ? '🔵' : '⚪'} Push Notification
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.deliveryButton,
            deliveryMethod === 'email' && styles.activeDeliveryButton,
          ]}
          onPress={() => setDeliveryMethod('email')}
        >
          <Text style={styles.deliveryText}>
            {deliveryMethod === 'email' ? '🔵' : '⚪'} Email Notifications
          </Text>
        </Pressable>
      </View>

      {/* Save Button */}
      <Pressable style={styles.saveButton} onPress={() => routerFunction('/home')}>
        <Text style={styles.saveButtonText}>Save Setting</Text>
      </Pressable>
    </SafeAreaView>
  );
};

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
  notificationBox: {
    backgroundColor: '#FDBA58',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionHeaderText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: { fontWeight: '600', fontSize: 15, color: '#fff' },
  desc: { fontSize: 12, color: '#fff' },
  deliveryBox: {
    backgroundColor: '#FDBA58',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  deliveryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
  },
  deliveryButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  activeDeliveryButton: {
    borderColor: '#0077CC',
    borderWidth: 1.5,
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#FDBA58',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
});

export default index;