import { supabase } from "../../../lib/supabase";

export const getEmergencyDetails = async (email) => {
    const { data, error } = await supabase
      .from("emergency_details")
      .select("*")
      .eq("email", email);
  
    if (error) {
      console.error("Error fetching emergency data:", error.message);
      return { success: false, data: [] };
    }
  
    return { success: true, data };
  };
  