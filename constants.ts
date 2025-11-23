import { BrandInfo } from './types';

export const BRAND_INFO: BrandInfo = {
  name: "Insuremate",
  tagline: "Protecting UAE’s Workforce with Care",
  phone: "+971 58 637 1260",
  email: "info@insuremate.ae",
  address: "Mai Tower, Al Nahda, Dubai, UAE",
  whatsappLink: "https://wa.me/971586371260?text=Hello%20Insuremate%2C%20I%20want%20an%20insurance%20quote.",
  callLink: "tel:+971586371260",
  emailLink: "mailto:info@insuremate.ae",
  socials: {
    facebook: "https://www.facebook.com/share/1A1XSZZJQe/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/insuremate.ae?igsh=cW8wbXZlNnlycTk0&utm_source=qr",
    threads: "https://www.threads.com/@insuremate.ae?invite=0",
    linkedin: "https://www.linkedin.com/company/insuremate-uae/"
  }
};

export const SETUP_STEPS = [
  { id: 'logo', label: 'Brand Logo', description: 'Upload the official Insuremate logo.' },
  { id: 'heroImage', label: 'Hero Section', description: 'Upload insuremate_Hero.png' },
  { id: 'aboutImage', label: 'About Us Section', description: 'Upload insuremate_about.png' },
  { id: 'whyUsImage', label: 'Why Choose Us', description: 'Upload insuremate_why_choose_us.png' },
  { id: 'contactImage', label: 'Contact Us Section', description: 'Upload insuremate_contact_us.png' },
];