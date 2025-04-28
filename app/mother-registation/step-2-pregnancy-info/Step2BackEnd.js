import { supabase } from "../../../lib/supabase"; // adjust path as needed

export const insertParentInfo = async (formData, user_id) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .update({
          haveKids: formData.haveKids,
          kidCount: formData.kidCount,
        })
        .eq("user_id", user_id) // make sure you match the user
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
  