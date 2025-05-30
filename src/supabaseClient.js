// src/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fpecqshxpcuzdfjfurxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZWNxc2h4cGN1emRmamZ1cnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MDk5MzUsImV4cCI6MjA2MzE4NTkzNX0.1bdSCsi8ZgcxeohGUuxUBQBdVpHiz0kzsQI51YWswBI';

export const supabase = createClient(supabaseUrl, supabaseKey);