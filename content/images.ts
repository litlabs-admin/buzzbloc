/**
 * Every image on the site is a temporary placeholder taken from the Hatch reference
 * (see DESIGN.md section 8). Replace the files in public/images/placeholder or
 * repoint these exports; nothing else imports the files directly.
 */
import heroBg from "@/public/images/placeholder/hero-bg.webp";
import ctaBg from "@/public/images/placeholder/cta-bg.webp";
import darkBg from "@/public/images/placeholder/dark-bg.webp";
import faqPhoto from "@/public/images/placeholder/faq-photo.webp";
import photo1 from "@/public/images/placeholder/photo-1.webp";
import photo2 from "@/public/images/placeholder/photo-2.webp";
import photo3 from "@/public/images/placeholder/photo-3.webp";
import photo4 from "@/public/images/placeholder/photo-4.webp";
import photo5 from "@/public/images/placeholder/photo-5.webp";
import photo6 from "@/public/images/placeholder/photo-6.webp";
import photo7 from "@/public/images/placeholder/photo-7.webp";
import photo8 from "@/public/images/placeholder/photo-8.webp";
import photo9 from "@/public/images/placeholder/photo-9.webp";
import uiChat from "@/public/images/placeholder/ui-chat.webp";
import uiMessages from "@/public/images/placeholder/ui-messages.webp";
import uiDropdown from "@/public/images/placeholder/ui-dropdown.webp";
import uiVoice from "@/public/images/placeholder/ui-voice.webp";
import uiSms from "@/public/images/placeholder/ui-sms.webp";
import uiList from "@/public/images/placeholder/ui-list.webp";
import uiFlow from "@/public/images/placeholder/ui-flow.webp";
import uiWorkspace from "@/public/images/placeholder/ui-workspace.webp";

export const images = {
  heroBg,
  ctaBg,
  darkBg,
  faqPhoto,
  photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9],
  ui: {
    chat: uiChat,
    messages: uiMessages,
    dropdown: uiDropdown,
    voice: uiVoice,
    sms: uiSms,
    list: uiList,
    flow: uiFlow,
    workspace: uiWorkspace,
  },
} as const;
