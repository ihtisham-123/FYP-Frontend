import { useRouterFunction } from '@/hooks/userouter';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const index = () => {
  const routerFunction = useRouterFunction();

  return (
    // Safe container to prevent content from overlapping with notch or status bar
    <SafeAreaView style={styles.container}>

      {/* Back Button */}
      <Pressable onPress={() => routerFunction('/')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </Pressable>

      {/* Top Section: Profile image and Welcome text + Notifications/Settings */}
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image
            style={styles.image}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCKQaRhGCGXeTqKe2xGD0wH9N3_37Dg_7Mw&s" }}
          />
          <Text style={styles.welcomeTitle}>Welcome Javeria!</Text>
        </View>

        <View style={styles.container3}>
          <Pressable onPress={() => routerFunction('/notification')} style={styles.notfication_btn}>
            <Ionicons name="notifications" size={20} color="white" />
          </Pressable>
          <Pressable onPress={() => routerFunction('/')} style={styles.setting_btn}>
            <Ionicons name="settings" size={20} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Main Actions: Create and Trending buttons */}
      <View style={styles.container4}>
        <Pressable onPress={() => routerFunction('/')} style={styles.container5}>
          <Ionicons name="add" size={20} color="white" />
          <Text style={{ color: "white", fontSize: 15 }}>Create New Post</Text>
        </Pressable>
        <Pressable onPress={() => routerFunction('/')} style={styles.container6}>
          <Ionicons name="trending-up-sharp" size={20} color="white" />
          <Text style={{ color: "white", fontSize: 15 }}>Trending Topics</Text>
        </Pressable>
      </View>

      {/* Stat Cards: Post counts, platforms, schedules */}
      <View style={styles.container7}>
        <View style={styles.card1}>
          <Text style={{ color: "white", fontSize: 15 }}>12</Text>
          <Text style={{ color: "white", fontSize: 15 }}>Post this Month</Text>
        </View>
        <View style={styles.card2}>
          <Text style={{ color: "white", fontSize: 15 }}>3</Text>
          <Text style={{ color: "white", fontSize: 15 }}>Platform</Text>
        </View>
        <View style={styles.card3}>
          <Text style={{ color: "white", fontSize: 15 }}>5</Text>
          <Text style={{ color: "white", fontSize: 15 }}>Schedule</Text>
        </View>
      </View>

      {/* Recent Posts Section */}
      <View style={styles.container8}>
        <Text style={{ color: "#0070C0", fontSize: 25, fontWeight: "bold" }}>Recent Posts</Text>
        <Pressable style={styles.container10}>
          <Text style={{ color: "#66AEE8", fontSize: 15, fontWeight: "bold", textDecorationLine: 'underline' }}>View All</Text>
        </Pressable>

        {/* Post 1 */}
        <Text style={styles.txt}>Beach Sunset at the beach</Text>
        <View style={styles.postMetaContainer}>
          <Text style={styles.social_txt}>Instagram</Text>
          <Text style={styles.hours_txt}>2 hours ago</Text>
        </View>

        {/* Post 2 */}
        <Text style={styles.txt}>Beach Sunset at the beach</Text>
        <View style={styles.postMetaContainer}>
          <Text style={styles.social_txt}>Instagram</Text>
          <Text style={styles.hours_txt}>2 hours ago</Text>
        </View>
      </View>

      {/* Bottom Buttons: Manage & Schedule */}
      <View style={styles.container9}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Manage Account</Text>
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Schedule Post</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};

export default index;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 20,
      paddingTop: 50,
    },
  
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },
  
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
  
    welcomeTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: "#0070C0",
      marginTop: 10,
    },
  
    notfication_btn: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      backgroundColor: "#0070C0",
      marginBottom: 10,
    },
  
    setting_btn: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      backgroundColor: "#0070C0",
    },
  
    container1: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
  
    container2: {
      flexDirection: 'column',
      gap: 10,
    },
  
    container3: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 10,
    },
  
    container4: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      height:"20%"
    },
  
    container5: {
      flex: 1,
      backgroundColor: "#FFBE55",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
      marginRight: 10,
    },
  
    container6: {
      flex: 1,
      backgroundColor: "#FFBE55",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
      marginLeft: 10,
    },
  
    container7: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      height:"16%",
    },
  
    card1: {
      flex: 1,
      backgroundColor: "#FFBE55",
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 19,
      marginRight: 5,
    },
  
    card2: {
      flex: 1,
      backgroundColor: "#FFBE55",
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 5,
    },
  
    card3: {
      flex: 1,
      backgroundColor: "#FFBE55",
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginLeft: 5,
    },
  
    container8: {
      marginBottom: 20,
    },
  
    container10: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  
    txt: {
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 5,
      paddingLeft: 5,
    },
  
    postMetaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 5,
      marginBottom: 10,
    },
  
    social_txt: {
      color: "#66AEE8",
      fontSize: 14,
    },
  
    hours_txt: {
      fontSize: 12,
      color: "gray",
    },
  
    container9: {
      flexDirection: "row",
      justifyContent: 'space-between',
      paddingVertical:40,
    },
  
    loginButton: {
      backgroundColor: "#FFBE55",
      flex: 1,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginHorizontal: 5,
    },
  
    loginButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
  });