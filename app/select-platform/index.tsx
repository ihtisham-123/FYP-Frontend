import { useRouterFunction } from "@/hooks/userouter"
import { SafeAreaView, StyleSheet, View ,Image, Pressable ,Text,TouchableOpacity } from "react-native";
import { Ionicons,FontAwesome5,Entypo} from "@expo/vector-icons";
import CheckBox from "expo-checkbox";



const index=()=>{

const RouterFunction=useRouterFunction();

return(
    <SafeAreaView style={styles.container}>

    
    <View style={styles.topRow}>
        <Pressable style={styles.backButton} onPress={() => RouterFunction('/')}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.profileImage}
        />
    </View>

   
    <Text style={styles.mainHeading}>Select Platform</Text>
    

    <Text style={styles.subHeading}>Choose platforms to post</Text>

    

    {/* Facebook */}
      <View style={styles.platformCard}>
        <FontAwesome5 name="facebook-f" size={24} color="#1877F2" style={styles.icon} />
        <View style={styles.platformText}>
          <Text style={styles.platformName}>Facebook</Text>
          <Text style={styles.status}>Connected and ready to post</Text>
        </View>
        <CheckBox value={true} />
      </View>

      {/* LinkedIn */}
      <View style={styles.platformCard}>
        <FontAwesome5 name="linkedin-in" size={24} color="#0077B5" style={styles.icon} />
        <View style={styles.platformText}>
          <Text style={styles.platformName}>LinkedIn</Text>
          <Text style={styles.status}>Connected and ready to post</Text>
        </View>
        <CheckBox value={true} />
      </View>

      {/* Not connected card */}
      <View style={styles.disabledCard}>
        <Text style={styles.disabledText}>Account not connected</Text>
      </View>

      {/* Estimated Reach */}
      <Text style={styles.estimatedHeading}>Estimated Reach</Text>
      <View style={styles.estimatedBox}>
        <FontAwesome5 name="linkedin-in" size={20} color="#0077B5" style={styles.icon} />
        <Text style={styles.estimatedText}>LinkedIn ~850 people</Text>
      </View>

      <Text style={styles.totalReach}>Total estimated reach: 2.5K people</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.postButton} onPress={() => {}}>
        <Entypo name="paper-plane" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.postText}>Post Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.scheduleButton} onPress={() => {}}>
        <Text style={styles.scheduleText}>Schedule Instead</Text>
      </TouchableOpacity>


    </SafeAreaView>
);
};

export default index;


const styles=StyleSheet.create({
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005BAC',
    textAlign: 'center',
    marginBottom: 20,
  },



  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0077CC',
    textAlign: 'center',
    marginBottom: 10,
  },


platformCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDBF5D',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  platformText: {
    flex: 1,
  },
  platformName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 13,
    color: '#444',
  },
  disabledCard: {
    backgroundColor: '#FDBF5D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledText: {
    fontSize: 14,
    color: '#333',
  },
  estimatedHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#337ab7',
    marginBottom: 10,
  },
  estimatedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDBF5D',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  estimatedText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  totalReach: {
    fontSize: 14,
    color: '#555',
    marginVertical: 15,
    textAlign: 'center',
  },
  postButton: {
    flexDirection: 'row',
    backgroundColor: '#FDBF5D',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  postText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleButton: {
    backgroundColor: '#FDBF5D',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  scheduleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
