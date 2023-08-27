import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bexhipsslwojoegofzcp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJleGhpcHNzbHdvam9lZ29memNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODk4NDgsImV4cCI6MjAwNzE2NTg0OH0.qAhkbAvy6b28Pv4L9CB8uIbVV0XxUsHv7PpC_q-2d4Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
