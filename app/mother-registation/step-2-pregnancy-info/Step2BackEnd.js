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
  
  export const insertPregnantParentInfo = async (formData, user_id) => {
    try {
      const { data, error } = await supabase
        .from("pregnant_mothers")
        .insert([
          {
            haveKids: formData.haveKids,
            kidCount: formData.kidCount,
            user_id: user_id,
            baby1Delivery: formData.delivery1,
            baby2Delivery: formData.delivery2,
            baby3Delivery: formData.delivery3,
            baby4Delivery: formData.delivery4,
            baby5Delivery: formData.delivery5,
            baby6Delivery: formData.delivery6,
            baby7Delivery: formData.delivery7,
            baby8Delivery: formData.delivery8,
            baby9Delivery: formData.delivery9,
            baby10Delivery: formData.delivery10,
            pregnancyType: formData.pregnancyType
          },
        ])
        .select("pregnant_mother_id")
        .single();
  
      if (error) {
        console.error("Supabase insert error:", error);
        return { success: false };
      }
  
      console.log("Inserted pregnant_mother_id:", data.pregnant_mother_id);
      return { success: true, pregnant_mother_id: data.pregnant_mother_id };
  
    } catch (e) {
      console.error("Insert exception:", e);
      return { success: false };
    }
  };
  