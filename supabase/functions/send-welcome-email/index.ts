import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function sendEmail(recipientEmail: string) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not set. Cannot send email.");
    return { success: false, message: "API Key missing" };
  }

  // IMPORTANT: The 'from' email must be a domain or email address verified in your Resend account.
  const FROM_EMAIL = 'noreply@tuple2.dpdns.org'; 

  console.log(`Attempting to send welcome email to: ${recipientEmail} from ${FROM_EMAIL}`);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: '欢迎订阅现代博客！',
        html: '<strong>感谢您的订阅！</strong> 您将第一时间收到我们的最新技术文章。',
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

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Call the email sending function
    const emailResult = await sendEmail(email);

    if (emailResult.success) {
      return new Response(JSON.stringify({ message: 'Welcome email sent successfully' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to send welcome email' }), {
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