export interface BrandAssets {
  logo: string;
  heroImage: string;
  aboutImage: string;
  whyUsImage: string;
  contactImage: string;
}

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsappLink: string;
  callLink: string;
  emailLink: string;
  socials: {
    facebook: string;
    instagram: string;
    threads: string;
    linkedin: string;
  };
}