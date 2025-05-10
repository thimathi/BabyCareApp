import { supabase } from "../../../lib/supabase";

export const insertBMIRecord = async (formData, user_id) => {
    try{
        const {data, error} = await supabase
        .from("bmi_details")
        .insert([
            {
                user_id: user_id,
                height: formData.height,
                weight: formData.weight,
                bmiValue: formData.bmiValue,
                name: formData.name,
                age: formData.age,
                gender: formData.gender,
            },
        ])
        .select("record_id")
        .single();

        if(error){
            console.error("Supabase insertion error", error);
            return {success : false};
        }

        else{
            console.log("Inserted record_id", data.record_id);
            return { success: true, record_id: data.record_id};
        }
    }
    catch (e){
        console.error("Insert exception:", e);
        return { success: false };
    }
};
