import { supabase } from "../../../lib/supabase";

export const insertParentInfo = async (formData, user_id) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .update({ image_url: formData.imageUrl })
      .eq("user_id", user_id)
      .select("user_id")
      .single();

    if (error) {
      console.error("Supabase update error:", error.message);
      return { success: false };
    }

    console.log("Updated user_id:", data.user_id);
    return { success: true, user_id: data.user_id };
  } catch (e) {
    console.error("Update exception:", e.message);
    return { success: false };
  }
};
