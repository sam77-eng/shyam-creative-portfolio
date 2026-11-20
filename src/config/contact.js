/**
 * Centralized Contact Configuration for SHYAM.
 * 
 * Confirmed Details:
 * Email: shyambhukya17@gmail.com
 * WhatsApp: +91 9959200960
 * WhatsApp Link: https://wa.me/919959200960
 */

export const CONTACT_CONFIG = {
  name: "Shyam",
  brand: "SHYAM.",
  title: "Independent Creative Developer & Digital Designer",
  location: "Warangal, Telangana, India",

  // Confirmed Contact Details
  email: "shyambhukya17@gmail.com",
  whatsappNumber: "919959200960", // international format without + or spaces
  displayPhone: "+91 9959200960",
  whatsappUrl: "https://wa.me/919959200960",
  mailtoUrl: "mailto:shyambhukya17@gmail.com",

  // Social Links
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },

  availabilityStatus: "AVAILABLE FOR SELECT PROJECTS",
  statusBadge: "Available for Q1/Q2 Projects"
};

/**
 * Checks if the email is a configured real email vs placeholder
 */
export const isEmailConfigured = () => {
  return (
    Boolean(CONTACT_CONFIG.email) &&
    CONTACT_CONFIG.email !== "YOUR_EMAIL_HERE" &&
    CONTACT_CONFIG.email.includes("@") &&
    CONTACT_CONFIG.email.includes(".")
  );
};

/**
 * Checks if WhatsApp number is configured
 */
export const isWhatsAppConfigured = () => {
  return (
    Boolean(CONTACT_CONFIG.whatsappNumber) &&
    CONTACT_CONFIG.whatsappNumber !== "YOUR_WHATSAPP_NUMBER_HERE" &&
    /^\d{7,15}$/.test(CONTACT_CONFIG.whatsappNumber.replace(/\D/g, ""))
  );
};

/**
 * Generate a mailto link with encoded subject and body from the project enquiry form
 */
export const createMailtoLink = (formData = {}) => {
  const subject = encodeURIComponent(
    `Project Enquiry from ${formData.name || 'Client'} - ${formData.service || 'Web Development'}`
  );

  const bodyText = `Hello Shyam,

I would like to discuss a project with you.

--- PROJECT DETAILS ---
Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Company / Business: ${formData.company || 'Not Specified'}
Service Required: ${formData.service || 'Website Design'}
Project Budget: ${formData.budget || 'Undecided / Flexible'}

Project Description & Scope:
${formData.message || 'N/A'}

----------------------
Sent via SHYAM. Creative Developer Portfolio Contact Form`;

  const body = encodeURIComponent(bodyText);
  return `mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`;
};

/**
 * Generate a WhatsApp chat link with pre-filled message
 */
export const createWhatsAppLink = (customMessage) => {
  const cleanNumber = CONTACT_CONFIG.whatsappNumber.replace(/\D/g, "");
  const defaultMessage = "Hello Shyam! I saw your portfolio and would like to discuss a project.";
  const text = encodeURIComponent(customMessage || defaultMessage);

  return `https://wa.me/${cleanNumber}?text=${text}`;
};
