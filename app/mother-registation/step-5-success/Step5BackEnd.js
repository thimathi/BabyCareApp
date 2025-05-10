import { supabase } from "../../../lib/supabase"; // adjust path if needed

export const insertSubscriptionInfo = async (formData = {}, user_id) => {
  try {
    const { data, error } = await supabase
      .from("subscription")
      .insert([
        {
          user_id: user_id,
          subscription_plan: formData.subscription_plan || "FREE", // optional override
          // 'date' will use default value (NOW) set in Supabase
        },
      ])
      .select("subscription_id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error };
    }

    console.log("Inserted subscription record:", data);
    return { success: true, user_id: data.user_id, subscription_id: data.subscription_id };

  } catch (e) {
    console.error("Insert exception:", e);
    return { success: false, error: e };
  }
};
