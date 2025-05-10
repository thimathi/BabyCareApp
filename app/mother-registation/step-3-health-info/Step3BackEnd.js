import { supabase } from "../../../lib/supabase";

export const insertParentInfo = async (formData, user_id) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .update({
            bloodGroup: formData.bloodGroup,
            existingConditions: formData.existingConditions,
            allergies: formData.allergies,
            subscription_plan: "FREE",
            medications: formData.medications,

        })
        .eq("user_id", user_id)
        .select("user_id")
        .single();
  
      if (error) {
        console.error("Supabase update error:", error);
        return { success: false };
      }
  
      console.log("Updated user_id:", data.user_id);
      return { success: true, user_id: data.user_id };
      
    } catch (e) {
      console.error("Update exception:", e);
      return { success: false };
    }
  };