import { supabase } from "../../../lib/supabase";

export const insertAppReview = async (rating, comment, survey, email, user_id) => {
  try {
    const { data, error } = await supabase
      .from("app_reviews")
      .insert([
        {
          rating: rating,
          comment: comment,
          email: email,
          user_id: user_id,
          service_quality: survey.serviceQuality,
          easy_to_use: survey.easyToUse,
          useful_features: survey.usefulFeatures,
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