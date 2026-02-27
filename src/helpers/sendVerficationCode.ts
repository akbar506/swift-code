import { Resend } from "resend";
import VerificationCodeEmail from "@/components/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  email: string,
  verificationCode: string,
  username?: string
) {
  try {
    await resend.emails.send({
      from: `Swift Code <${process.env.RESEND_EMAIL_FROM}>`,
      to: email,
      subject: `${verificationCode} is your verification code`,
      react: VerificationCodeEmail({ verificationCode, username }),
    });

    return { success: true, message: 'Verification email sent successfully.' };
  } catch (err) {
    console.error("Error sending verification email:", err);
    throw err;
  }
}