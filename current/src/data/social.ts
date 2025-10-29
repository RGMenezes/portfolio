import { IconType } from "react-icons";
import { BiEnvelope } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { RmLogo99Freelas, RmLogoTart } from "@/components/icons";

export interface ISocial{
    name: string;
    url: string;
    icon: IconType;
}

export interface ISocialS{
    whatsapp: ISocial;
    telegram: ISocial;
    instagram: ISocial;
    linkedin: ISocial;
    _99freelas: ISocial;
    github: ISocial;
    tart: ISocial;
    email: ISocial;
}

const social : ISocialS = {
  whatsapp: {
    name: "WhatsApp",
    url: "https://wa.me/qr/R3YUIFPGRP4PJ1",
    icon: FaWhatsapp
  },
  telegram: {
    name: "Telegram",
    url: "https://t.me/+5522998196728",
    icon: FaTelegram
  },
  instagram: {
    name: "Instagram",
    url: "",
    icon: FaInstagram
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rafael-menezes-16b002246/",
    icon: FaLinkedin
  },
  _99freelas: {
    name: "99Freelas",
    url: "https://www.99freelas.com.br/user/RGMenezes",
    icon: RmLogo99Freelas
  },
  github: {
    name: "GitHub",
    url: "https://github.com/RGMenezes",
    icon: FaGithub
  },
  tart: {
    name: "Tart",
    url: "https://tartoficial.vercel.app",
    icon: RmLogoTart
  },
  email: {
    name: "Email",
    url: "mailto:faelgmp@gmail.com",
    icon: BiEnvelope
  }
};


export default social;