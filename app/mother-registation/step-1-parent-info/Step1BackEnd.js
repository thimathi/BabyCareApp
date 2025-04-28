import { supabase } from "../../../lib/supabase"; // adjust path as needed

export const insertParentInfo = async (formData, email) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email: email,
          firstName: formData.first_name,
          lastName: formData.second_name,
          age: formData.age,
          address: formData.address,
          country: formData.country,
          district: formData.district,
          town: formData.town,
          dob: formData.date_of_birth,
          contactNumber: formData.contact_number,
        },
      ])
      .select("user_id")
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
