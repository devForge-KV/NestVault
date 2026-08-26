import ContactInquiry from "../models/ContactInquiry.js";

export const createContactInquiry = async (req, res) => {
  try {
    const { name, email, number, subject, message } = req.body;
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const inquiry = await ContactInquiry.create({
      name,
      email,
      number,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      data: { id: inquiry._id },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
