import { supabase } from "../../../lib/supabase";

export const insertEmergencyDetails = async (
  formData,
  email,
  user_id,
  type
) => {
  try {
    const { data, error } = await supabase
      .from("emergency_details")
      .insert([
        {
          type: type,
          email: email,
          user_id: user_id,
          name: formData.name,
          speciality: formData.speciality,
          address: formData.address,
          contact_number1: formData.contact_number1,
          contact_number2: formData.contact_number2,
          contact_number3: formData.contact_number3,
        },
      ])
      .select("id")
      .single();
    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false };
    }

    console.log("Inserted user_id:", data.user_id);
    return { success: true, user_id: data.user_id };
  } catch (e) {
    console.error("Insert exception:", e);
    return { success: false };
  }
};
