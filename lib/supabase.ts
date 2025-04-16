import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Session } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://sapauniiuubdrvkbvuty.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcGF1bmlpdXViZHJ2a2J2dXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzQ4MTUsImV4cCI6MjA2MDIxMDgxNX0.zEhtnBTg15_xErhvCjTSfz1dixw2YH0hH5h94ogCTgk';

let supabase

if (typeof window !== 'undefined') {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })
}

export { supabase }