function otpTemplate({ otp = '' }) {
  return `
    <div style="background-color:#1a1a1a; color: #fff;padding: 24px;max-width: 500px;border-radius: 16px;font-family: 'Google Sans'">
      <h1 style="font-weight:bold; font-size: 32px; margin: 0 0 16px 0;text-decoration: underline;text-align:center;">
        QuickOut
      </h1>
      <p style="margin:0px;font-size:24px;">Hi, Welcome to <b style="font-weight:bold;">QuickOut</b>.</p>
      <p style="margin:16px 0 0 0;font-size:24px;">
        Your OTP is <b style="color: #ffd000;font-weight: bold;font-size:32px;">${otp}</b>
      </p>
    </div>`;
}

export default otpTemplate;
