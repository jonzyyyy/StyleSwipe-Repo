import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import CardDeck from "@/components/tabs/Home/CardDeck";
import redirect from "@/utils/common/redirect";
const cartIcon = require("@/assets/icons/cart-icon.png");

/*
Component to be displayed on the Profile tab

Contains different buttons that redirect to different pages
for users to perform actions related to their profile
*/

export default function Profile() {
  return (
    <View style={styles.container} testID="profile-container">
      <View style={styles.headingContainer}>
        <Text style={styles.titleText}>Profile</Text>
      </View>
      <View style={styles.optionsContainer}>
        {/* Button for redirecting users to a "change email" tab */}
        <Pressable
          style={styles.optionItem}
          onPress={() => redirect("/collection/")}
        >
          <Text style={styles.optionText}>See my collections</Text>
        </Pressable>
        {/* Button for redirecting users to a "change email" tab */}
        <Pressable
          style={styles.optionItem}
          onPress={() => redirect("/profile/newEmail")}
        >
          <Text style={styles.optionText}>Change email address</Text>
        </Pressable>

        {/* Button for redirecting users to a "change password" tab */}
        <Pressable
          style={styles.optionItem}
          onPress={() => redirect("/profile/newPassword")}
        >
          <Text style={styles.optionText}>Change password</Text>
        </Pressable>

        {/* Button for allowing users to wipe their product recommendation algorithm tab */}
        <Pressable style={styles.optionItem}>
          <Text style={styles.optionText}>Wipe algorithm</Text>
        </Pressable>

        {/* Button for signing users out */}
        <Pressable style={styles.optionItem}>
          <Text
            style={styles.optionText}
            onPress={() => redirect("/profile/signOut")}
          >
            Sign out
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 247)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  //Styling for heading containing the title and the filter icon
  headingContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    zIndex: 14,
    height: "14%",
    textAlignVertical: "center",
    alignItems: "flex-end",
    paddingLeft: "4%",
    marginBottom: "4%",
    textAlignVertical: "bottom",
    position: "absolute",
    zIndex: 1,
  },
  titleText: {
    fontFamily: "Satoshi-Black",
    textShadowColor: "white",
    textShadowRadius: 5,
    fontSize: 40,
  },
  optionsContainer: {
    marginTop: "32%",
    width: "90%",
    // borderWidth: 2,
    // borderColor: "black",
    justifyContent: "center",
    gap: 10,
    height: "80%",
  },
  optionItem: {
    width: "100%",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    marginBottom: "5%",
    height: 60,
  },
  optionText: {
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: "black",
    fontFamily: "Satoshi-Regular",
    fontSize: 20,
  },
});
