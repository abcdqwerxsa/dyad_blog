import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client for database access (using service role key for security)
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

async function sendDigestEmail(postTitle: string, postExcerpt: string) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not set. Cannot send email.");
    return { success: false, message: "API Key missing" };
  }

  // 1. Fetch all subscriber emails
  const { data: subscribers, error: subError } = await supabaseAdmin
    .from('subscribers')
    .select('email');

  if (subError) {
    console.error("Error fetching subscribers:", subError);
    return { success: false, message: "Failed to fetch subscribers" };
  }

  const recipientEmails = subscribers.map(s => s.email);
  if (recipientEmails.length === 0) {
    console.log("No subscribers found to send digest.");
    return { success: true, message: "No subscribers" };
  }

  // 2. Prepare email content
  const FROM_EMAIL = 'newsletter@example.com'; 
  const subject = `新文章发布: ${postTitle}`;
  const htmlContent = `
    <h1>${postTitle}</h1>
    <p>${postExcerpt}</p>
    <p>点击链接查看全文: [Link to Post]</p>
    <p>---</p>
    <p>您收到此邮件是因为您订阅了现代博客。</p>
  `;

  // 3. Send email using Resend (Note: Resend supports sending to multiple recipients)
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: recipientEmails, // Send to all subscribers
        subject: subject,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.json();
      console.error("Resend API Error:", errorBody);
    }

    return { success: res.ok, status: res.status };
  } catch (error) {
    console.error("Network or Fetch Error:", error);
    return { success: false, message: "Failed to connect to Resend API" };
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Edge Functions called by database triggers usually don't have an Authorization header
  // We rely on the Service Role Key initialized above for database access.

  try {
    const { record } = await req.json(); // The trigger sends the new record data

    if (!record || !record.title || !record.excerpt) {
      return new Response(JSON.stringify({ error: 'Invalid post data received' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const emailResult = await sendDigestEmail(record.title, record.excerpt);

    if (emailResult.success) {
      return new Response(JSON.stringify({ message: 'Post digest sent successfully' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to send post digest' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});