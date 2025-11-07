import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend";
import { franc } from "npm:franc"; // ✅ Fixed: named export
import "https://deno.land/x/dotenv/load.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, details } = body;

    // Supabase client
    const supabase = createClient(
      Deno.env.get("VITE_SUPABASE_URL"),
      Deno.env.get("VITE_SUPABASE_ANON_KEY")
    );

    // Save contact message
    await supabase
      .from("contact_messages")
      .insert([{ name, email, phone, details }]);

    // Detect language
    const langCode = franc(`${details}`);
    const isFrench = langCode === "fra";

    // Resend client
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const subject = isFrench
      ? "Nous avons bien reçu votre message — un peu de patience"
      : "We've got your message — hang tight";

    const userBody = isFrench
      ? `
Bonjour ${name},<br><br>
Nous avons bien reçu votre message concernant <strong>${issue}</strong>.<br><br>
Ceci est un message automatique — mais rassurez-vous, cela ne veut pas dire que nous ignorons votre demande.<br>
Nous sommes peut-être en réunion, en plein développement, ou en courte pause.<br><br>
Nous vous répondrons très bientôt avec une solution ou une mise à jour.<br><br>
— <strong>L'équipe Arenox Empire</strong><br>
<i>« Au-delà de l'évolution »</i>
`
      : `
Hey ${name},<br><br>
Got your message about <strong>${issue}</strong>.<br><br>
This is an automated note — doesn't mean we're asleep at the wheel.<br>
It just means we're probably in a meeting, deep in code, or catching a quick break.<br><br>
We'll review your message shortly and get back with a proper fix or update.<br><br>
— <strong>The Arenox Empire Team</strong><br>
<i>"Evolving Beyond"</i>
`;

    const adminBody = `
New contact form submission:<br><br>
<b>Name:</b> ${name}<br>
<b>Email:</b> ${email}<br>
<b>Phone:</b> ${phone || "N/A"}<br>
<b>Issue:</b> ${issue}<br>
<b>Brief:</b> ${brief}<br>
<b>Details:</b> ${details}
`;

    await resend.batch.send([
      // Send email to user
      {
        from: "Arenox Empire <no-reply@mail.arenoxempire.com>",
        to: email,
        subject,
        html: userBody,
      },
      // Send email to admin
      {
        from: "Arenox Empire <no-reply@mail.arenoxempire.com>",
        to: Deno.env.get("ADMIN_EMAIL"),
        subject: `New contact message from ${name}`,
        html: adminBody,
      },
    ]);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
