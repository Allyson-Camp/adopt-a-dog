const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    // from the dogs table, select all items
    const { data, error } = await client
        .from('dogs')
        .select(`*, dog_breeds (name)`);
    if (error) console.error(error);
    // and return the response
    return data;
    
}

export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id
    // and return the response
}
