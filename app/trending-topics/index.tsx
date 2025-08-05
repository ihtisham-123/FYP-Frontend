import React from 'react';
import { View, Text, Pressable, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { useRouterFunction } from '@/hooks/userouter';

const index = () => {
    const routerFunction = useRouterFunction();
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <Pressable style={styles.backButton} onPress={() => routerFunction('/')}>
         <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.profileImage}
        />
      </View>

      {/* Heading */}
      <Text style={styles.mainHeading}>Trending Topics</Text>

      {/* Categories */}
      <Text style={styles.categoryHeading}>Categories</Text>
      <View style={styles.categories}>
        <View style={styles.card}>
          <Entypo name="laptop" size={24} color="black" />
          <Text style={styles.cardText}>Technology{'\n'}12 trending</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="fitness" size={24} color="black" />
          <Text style={styles.cardText}>Health &{'\n'}Wellness 8 trending</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome name="briefcase" size={24} color="black" />
          <Text style={styles.cardText}>Business{'\n'}15 trending</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="star" size={24} color="black" />
          <Text style={styles.cardText}>Lifestyle{'\n'}20 trending</Text>
        </View>
      </View>

      {/* Trending Insights */}
      <View style={styles.insightsHeader}>
        <Ionicons name="bulb" size={20} color="#FFD700" />
        <Text style={styles.insightsHeading}>Trending Insights</Text>
      </View>

      <View style={styles.insightBox}>
        <Text style={styles.insightText}>
          Posts with sustainability hashtags get 40% more engagement
        </Text>
      </View>
      <View style={styles.insightBox}>
        <Text style={styles.insightText}>
          AI-related content is trending across all platforms
        </Text>
      </View>
      <View style={styles.insightBox}>
        <Text style={styles.insightText}>
          Best time to post trending content: 6–8 PM
        </Text>
      </View>

      {/* Buttons */}
      <Pressable style={styles.button} onPress={() => routerFunction('/create-new-post')}>
        <Text style={styles.buttonText}>Use Trend</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => routerFunction('/create-new-post')}>
        <Text style={styles.buttonText}>Create Original Post</Text>
      </Pressable>
    </SafeAreaView>
  );
};


export default index;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

   backButton: { marginBottom: 10 },


  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  mainHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BAC',
    textAlign: 'center',
    marginBottom: 20,
  },

  categoryHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#005BAC',
    marginBottom: 10,
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  card: {
    width: '47%',
    backgroundColor: '#FDBA4E',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  cardText: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },

  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },

  insightsHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#005BAC',
  },

  insightBox: {
    backgroundColor: '#FDBA4E',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  insightText: {
    color: '#fff',
    fontSize: 13,
  },

  button: {
    backgroundColor: '#FDBA4E',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 6,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
