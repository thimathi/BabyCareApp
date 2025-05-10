import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, SafeAreaView } from "react-native";
import { Ionicons, } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useRouter, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import { insertParentInfo, insertPregnantParentInfo } from "../step-2-pregnancy-info/Step2BackEnd";

export default function Step2PregnancyInfo() {

  const router = useRouter();
  const { user_id } = useLocalSearchParams();

  const [formData, setFormData] = useState({
    haveKids: "yes",
    kidCount: "",
    delivery1: "",
    delivery2: "",
    delivery3: "",
    delivery4: "",
    delivery5: "",
    delivery6: "",
    delivery7: "",
    delivery8: "",
    delivery9: "",
    delivery10: "",
    pregnancyType: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = async () => {
    const response = await insertParentInfo(formData, user_id);
    if (response.success) {
      const userId = response.user_id;
      //router.push({
      //pathname: "./../../mother-registation/step-3-health-info",
      //params: { user_id: userId },
      //});
    } else {
      console.log("Error saving data. Please try again.");
    }

    const response2 = await insertPregnantParentInfo(formData, user_id);
    if (response2.success) {
      const userId = response.user_id;
      router.push({
        pathname: "./../../mother-registation/step-3-health-info",
        params: { user_id: userId },
      });
    } else {
      console.log("Error saving data. Please try again.");
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView >

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("./../step-1-parent-info")} >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Pregnancy Information</Text>
        </View>
        <View style={styles.cardSection}>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Do you have kids section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Do you have children already?</Text>
              <RadioButton.Group
                onValueChange={(value) => handleChange("haveKids", value)}
                value={formData.haveKids}
              >
                <View style={styles.radioGroup}>
                  <View style={styles.radioOption}>
                    <RadioButton value="yes" />
                    <Text style={styles.radioLabel}>Yes</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="no" />
                    <Text style={styles.radioLabel}>No</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            {/* Number of kids (conditional) */}
            {formData.haveKids === "yes" && (
              <View style={styles.formGroup}>
                <Text style={styles.label}>How many children do you have?</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter number"
                  keyboardType="numeric"
                  value={formData.kidCount}
                  onChangeText={(text) => handleChange("kidCount", text)}
                />
              </View>
            )}

            {/* Delivery methods (conditional) */}
            {formData.haveKids === "yes" && formData.kidCount > 0 && (
              <>
                <Text style={styles.sectionTitle}>Previous Delivery Methods</Text>

                {formData.kidCount >= 1 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>First child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery1", value)}
                        value={formData.delivery1}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 2 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Second child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery2", value)}
                        value={formData.delivery2}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 3 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Third child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery3", value)}
                        value={formData.delivery3}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 4 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Fourth child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery4", value)}
                        value={formData.delivery4}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 5 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Fifth child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery5", value)}
                        value={formData.delivery5}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 6 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Sixth child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery6", value)}
                        value={formData.delivery6}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 7 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Seventh child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery7", value)}
                        value={formData.delivery7}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 8 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Eighth child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery8", value)}
                        value={formData.delivery8}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 9 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Ninenth child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery9", value)}
                        value={formData.delivery9}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}

                {formData.kidCount >= 10 && (
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Tenth child delivery method</Text>
                    <View style={styles.pickerContainer}>
                      <RadioButton.Group
                        onValueChange={(value) => handleChange("delivery10", value)}
                        value={formData.delivery10}
                      >
                        <View style={styles.radioGroup}>
                          <View style={styles.radioOption}>
                            <RadioButton value="normal" />
                            <Text style={styles.radioLabel}>Normal</Text>
                          </View>
                          <View style={styles.radioOption}>
                            <RadioButton value="cesarean" />
                            <Text style={styles.radioLabel}>Cesarean</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                )}
              </>
            )}

            {/* Current pregnancy type */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Current Pregnancy Type</Text>
              <RadioButton.Group
                onValueChange={(value) => handleChange("pregnancyType", value)}
                value={formData.pregnancyType}
              >
                <View style={styles.radioGroup}>
                  <View style={styles.radioOption}>
                    <RadioButton value="Single" />
                    <Text style={styles.radioLabel}>Single</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="Twin" />
                    <Text style={styles.radioLabel}>Twin</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="Triple" />
                    <Text style={styles.radioLabel}>Triple</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            {/* Next button */}
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
              activeOpacity={0.8}>
              <Text style={styles.nextButtonText}>Continue</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>
      </ScrollView>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginBottom: 15,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.BLUE1,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  nextButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
