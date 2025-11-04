import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kdvibfnsrfaogkmhynzi.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdmliZm5zcmZhb2drbWh5bnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNzkwNTksImV4cCI6MjA3NzY1NTA1OX0.Q6j7TvqAwyzcQcARHbhUXBHvhwoGsrSCGHtRQAxeyyg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
