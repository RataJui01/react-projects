import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://shjapjwbozsshokvuvcx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoamFwandib3pzc2hva3Z1dmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MzMxODUsImV4cCI6MjA3MzMwOTE4NX0.ShI_n0tdN72Cxl-IE2gcoE7ZRoFU3ULG-mKiX-Xi8lI";
/*
  Expose supabase key like this is not good if we didnt set RLS.
  So if we activate RLS whoever have this key will allow to do whatever
  we allowed in RLS.
*/
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
