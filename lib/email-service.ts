import nodemailer from 'nodemailer';

interface EmailData {
  to?: string;
  from?: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

// Email configuration from environment variables
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  logger: process.env.NODE_ENV === 'development',
  debug: process.env.NODE_ENV === 'development'
};

// Create transporter with Gmail configuration
export let transporter: nodemailer.Transporter;

// Initialize the transporter
export function initializeTransporter() {
  try {
    // Validate required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error('Email credentials not found in environment variables');
    }

    transporter = nodemailer.createTransport(emailConfig);
    console.log('Email transporter initialized with Gmail configuration');
    return true;
  } catch (error) {
    console.error('Failed to initialize email transporter:', error);
    return false;
  }
}

// Initialize on module load
initializeTransporter();
// Send email function
export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: any; messageId?: string }> {
  try {
    // Ensure transporter is initialized
    if (!transporter) {
      const initialized = initializeTransporter();
      if (!initialized) {
        throw new Error('Failed to initialize email transporter');
      }
    }
    
    // Set default from address if not provided
    const mailOptions = {
      from: data.from || process.env.EMAIL_FROM || '"CallMint.tech" <Mohammed.ayaz@azmaoudperfumes.com>',
      to: data.to || process.env.CONTACT_EMAIL || 'Mohammed.ayaz@azmaoudperfumes.com',
      subject: data.subject,
      text: data.text,
      html: data.html,
      replyTo: data.replyTo,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Function to send contact form submission
export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  plan?: string;
  message: string;
}): Promise<{ success: boolean; error?: any; messageId?: string }> {
  const { name, email, phone, company, plan, message } = formData;
  
  // Create HTML content for the email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #0ea5e9; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class="header">
            <h2>🚀 New Contact Form Submission - CallMint.tech</h2>
        </div>
        <div class="content">
            <div class="field"><span class="label">👤 Name:</span> ${name}</div>
            <div class="field"><span class="label">📧 Email:</span> ${email}</div>
            ${phone ? `<div class="field"><span class="label">📱 Phone:</span> ${phone}</div>` : ''}
            ${company ? `<div class="field"><span class="label">🏢 Company:</span> ${company}</div>` : ''}
            ${plan ? `<div class="field"><span class="label">📋 Interested Plan:</span> ${plan}</div>` : ''}
            <div class="field"><span class="label">📅 Date:</span> ${new Date().toLocaleString()}</div>
            <div class="message-box">
                <h3>💬 Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
        </div>
    </body>
    </html>
  `;

  // Create plain text content as fallback
  const textContent = `
🚀 New Contact Form Submission - CallMint.tech

👤 Name: ${name}
📧 Email: ${email}
${phone ? `📱 Phone: ${phone}\n` : ''}
${company ? `🏢 Company: ${company}\n` : ''}
${plan ? `📋 Interested Plan: ${plan}\n` : ''}
📅 Date: ${new Date().toLocaleString()}

💬 Message:
${message}

---
This email was sent from the CallMint.tech contact form.
  `;

  // Send email to your Gmail account
  return sendEmail({
    to: process.env.CONTACT_EMAIL || 'Mohammed.ayaz@azmaoudperfumes.com',
    subject: `🚀 New Lead: ${name} from ${company || 'Unknown Company'} - CallMint.tech`,
    text: textContent,
    html: htmlContent,
    replyTo: email // Set reply-to as the sender's email
  });
}

// Function to send auto-reply to the contact form submitter
export async function sendAutoReply(userEmail: string, userName: string): Promise<{ success: boolean; error?: any; messageId?: string }> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 30px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 8px; }
            .logo { font-size: 28px; font-weight: bold; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; margin-top: 30px; border-radius: 8px; }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo">🤖 CallMint.tech</div>
            <p>AI Agents & Custom AI Systems</p>
        </div>
        <div class="content">
            <h2>Hi ${userName}! 👋</h2>
            <p>Thank you for reaching out to CallMint.tech! We've received your message and are excited to help transform your business with AI-powered call automation.</p>
            
            <h3>What happens next?</h3>
            <ul>
                <li>✅ Our AI specialist will review your inquiry within 2 hours</li>
                <li>📞 We'll schedule a personalized demo tailored to your needs</li>
                <li>🚀 You'll see how our AI agents can revolutionize your business communications</li>
            </ul>
            
            <p>While you wait, feel free to:</p>
            <a href="https://callmint.tech/pricing" class="cta-button">View Our Pricing Plans</a>
            <br>
            <a href="https://calendly.com/your-calendly-link" class="cta-button">Book a Live Demo</a>
            
            <p><strong>Quick Facts about CallMint.tech:</strong></p>
            <ul>
                <li>🎯 3 specialized AI agents: Inbound, Outbound, and Support</li>
                <li>⚡ Lightning-fast deployment in minutes</li>
                <li>🔧 Built with n8n automation, VAPI voice AI, and advanced workflows</li>
                <li>📈 Handle 10,000+ calls daily with 99.9% uptime</li>
                <li>🛡️ Military-grade security and HIPAA-ready</li>
            </ul>
            
            <p>Questions? Simply reply to this email or call us:</p>
            <p>📞 +1 833 722 1177 (Toll-free)<br>
            📱 +1 323 649 8803 (LA Local)</p>
        </div>
        <div class="footer">
            <p><strong>CallMint.tech</strong> - Transform Your Business with AI Agents</p>
            <p>1111 B S Governors Ave STE ###, Dover DE</p>
            <p>© 2025 CallMint.tech. All rights reserved.</p>
        </div>
    </body>
    </html>
  `;

  const textContent = `
Hi ${userName}! 👋

Thank you for reaching out to CallMint.tech! We've received your message and are excited to help transform your business with AI-powered call automation.

What happens next?
✅ Our AI specialist will review your inquiry within 2 hours
📞 We'll schedule a personalized demo tailored to your needs
🚀 You'll see how our AI agents can revolutionize your business communications

While you wait, feel free to:
- View our pricing plans: https://callmint.tech/pricing
- Book a live demo: https://calendly.com/your-calendly-link

Quick Facts about CallMint.tech:
🎯 3 specialized AI agents: Inbound, Outbound, and Support
⚡ Lightning-fast deployment in minutes
🔧 Built with n8n automation, VAPI voice AI, and advanced workflows
📈 Handle 10,000+ calls daily with 99.9% uptime
🛡️ Military-grade security and HIPAA-ready

Questions? Simply reply to this email or call us:
📞 +1 833 722 1177 (Toll-free)
📱 +1 323 649 8803 (LA Local)

---
CallMint.tech - Transform Your Business with AI Agents
1111 B S Governors Ave STE ###, Dover DE
© 2025 CallMint.tech. All rights reserved.
  `;

  return sendEmail({
    to: userEmail,
    subject: `🤖 Thank you for contacting CallMint.tech! Your AI transformation starts here`,
    text: textContent,
    html: htmlContent
  });
}

// Function to send notification email to admin about new contact
export async function sendAdminNotification(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  plan?: string;
  message: string;
}): Promise<{ success: boolean; error?: any; messageId?: string }> {
  const { name, email, phone, company, plan, message } = formData;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #ff6b6b, #ffa726); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
            .urgent { background: #ffebee; border-left: 4px solid #f44336; padding: 15px; margin: 15px 0; }
            .field { margin: 10px 0; padding: 8px; background: white; border-radius: 4px; }
            .label { font-weight: bold; color: #0ea5e9; }
            .cta-button { display: inline-block; background: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 10px 5px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h2>🚨 URGENT: New Lead Alert!</h2>
            <p>Someone just contacted CallMint.tech</p>
        </div>
        <div class="content">
            <div class="urgent">
                <h3>⚡ ACTION REQUIRED: Respond within 2 hours!</h3>
            </div>
            
            <div class="field"><span class="label">👤 Name:</span> <strong>${name}</strong></div>
            <div class="field"><span class="label">📧 Email:</span> <strong>${email}</strong></div>
            ${phone ? `<div class="field"><span class="label">📱 Phone:</span> <strong>${phone}</strong></div>` : ''}
            ${company ? `<div class="field"><span class="label">🏢 Company:</span> <strong>${company}</strong></div>` : ''}
            ${plan ? `<div class="field"><span class="label">💰 Interested Plan:</span> <strong>${plan}</strong> ($${plan === 'Starter' ? '299' : plan === 'Business' ? '499' : 'Custom'}/month)</div>` : ''}
            <div class="field"><span class="label">📅 Received:</span> <strong>${new Date().toLocaleString()}</strong></div>
            
            <div style="background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin: 15px 0;">
                <h3>💬 Message:</h3>
                <p style="font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}" class="cta-button">📧 Reply Now</a>
                ${phone ? `<a href="tel:${phone}" class="cta-button">📞 Call Now</a>` : ''}
                <a href="https://calendly.com/your-calendly-link" class="cta-button">📅 Schedule Demo</a>
            </div>
            
            <div style="background: #e8f5e8; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <h4>📊 Lead Quality Score:</h4>
                <ul>
                    <li>Company provided: ${company ? '✅ Yes (+20 points)' : '❌ No'}</li>
                    <li>Phone provided: ${phone ? '✅ Yes (+15 points)' : '❌ No'}</li>
                    <li>Plan interested: ${plan ? `✅ ${plan} (+25 points)` : '❌ No specific plan'}</li>
                    <li>Message length: ${message.length > 100 ? '✅ Detailed (+10 points)' : message.length > 50 ? '⚠️ Medium' : '❌ Brief'}</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: process.env.CONTACT_EMAIL || 'Mohammed.ayaz@azmaoudperfumes.com',
    subject: `🚨 URGENT LEAD: ${name} from ${company || 'Unknown'} interested in ${plan || 'AI services'}`,
    html: htmlContent
  });
}
