import { supabase } from "../../../lib/supabase";
import { session } from "../../../lib/supabase";

export const getMotherDetails = async(email) => {
    const {data, error} = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .maybeSingle();

    if(error){
        console.error("Error Fetching user data:",error.message);
        return {success: false};
    }
    else{
        return { success: true, firstName: data?.firstName, subscription_plan: data?.subscription_plan, lastName: data?.lastName, user_id: data?.user_id|| "" };
    };
}

export const getMotherHealthDetails = async () => {
    
}

export const getSubscriptionDetails = async (user_id) => {
    const {data, error} = await supabase
    .from("subscription")
    .select("*")
    .eq("user_id", user_id)
    .maybeSingle();

    if(error){
        console.error("Error Fetching user data:",error.message);
        return {success: false};
    }
    else{
        return { success: true, subscription_id: data?.subscription_id, subscription_plan: data?.subscription_plan, start_date: data?.start_date, end_date: data?.end_date|| "" };
    };
}

export const getBMIRecords = async (user_id) => {
    const { data, error } = await supabase
      .from("bmi_details")
      .select("record_id, created_at, bmiValue, height, weight")
      .eq("user_id", user_id)
      .order("created_at", { ascending: true }); // Important for linear charting
  
    if (error) {
      console.error("Error Fetching user data:", error.message);
      return { success: false };
    }
  
    return { success: true, records: data };
  };
  