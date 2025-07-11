// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://okoaavvfkyjohfaiqymu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2FhdnZma3lqb2hmYWlxeW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTk1MzYsImV4cCI6MjA2NzEzNTUzNn0.AsFZvmPX8WrMrE7dB2-946B7U6B1taU3UBgKwx0h1hM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});