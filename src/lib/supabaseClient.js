import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flclwbhdnuvrhgsbquhx.supabase.co/'
const supabasePublishableKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsY2x3YmhkbnV2cmhnc2JxdWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5ODUwODMsImV4cCI6MjA5MzU2MTA4M30.2YSUu7Cj2rCxBm7sqBmQcf9VWQeqNcCPehNdy7K5ZD4'

export const supabase = createClient(supabaseUrl, supabasePublishableKey)