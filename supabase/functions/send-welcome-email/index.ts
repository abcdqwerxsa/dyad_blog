import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Replace with your actual email sending logic (e.g., Resend, SendGrid API call)
async function sendEmail(recipientEmail: string) {
  // In a real application, you would use Deno.env.get('RESEND_API_KEY')
  // and make a secure API call here.
  
  console.log(`Attempting to send welcome email to: ${recipientEmail}`);

  // --- Placeholder for actual email API call ---
  // Example using Resend (requires RESEND_API_KEY secret)
  /*
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not set.");
    return { success: false, message: "API Key missing" };
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: 'onboarding@yourdomain.com',
      to: recipientEmail,
      subject: '欢迎订阅现代博客！',
      html: '<strong>感谢您的订阅！</strong> 您将第一时间收到我们的最新技术文章。',
    }),
  });

  return { success: res.ok, status: res.status };
  */
  
  // Mock success for demonstration
  return { success: true, message: "Email simulated successfully" };
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
      console.error("Email sending failed:", emailResult);
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