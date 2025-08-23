import { createClient } from '@supabase/supabase-js'
const supabaseUrl='https://hiuhsxwympjeugkiusbd.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdWhzeHd5bXBqZXVna2l1c2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNDM1NTgsImV4cCI6MjA2ODcxOTU1OH0.HV3pMMUyFZWJUvkTPU6gHN_2WWFh_c5vdXA1VlhfKMg';
const tableName = 'keepalive';
const supabaseClient  = supabase.createClient(supabaseUrl, supabaseKey); // اگر از ماژول‌ها استفاده می‌کنید

const YOUR_PASSWORD='Stnail09137155082+';
const tester=()=>{fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
  method: 'POST',
  body: JSON.stringify(),
  headers: {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  }
});};
setInterval(tester,600000);