
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function listLocations() {
  const { data, error } = await supabase.from('locations').select('*');
  if (error) {
    console.error(error);
    return;
  }
  console.log(JSON.stringify(data, null, 2));
}

listLocations();
