import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../../database.types";

export const supabase = createClient<Database>(
  "https://lllmoslobnckitvzjjwg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbG1vc2xvYm5ja2l0dnpqandnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MTUzNDAsImV4cCI6MjA0MzI5MTM0MH0.FQd2TPv9LwnCp7c11Ng9ok5cs3c9xdc6-Q6k_F90Q1g"
);
