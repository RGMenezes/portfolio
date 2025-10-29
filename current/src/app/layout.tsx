import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const spaceGrotesk = SpaceGrotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "RGMenezes - Portfólio",
    description: "Estudante de Sistemas de Informação no IFF e desenvolvedor com experiência em projetos e freelas. Focado em criar aplicações práticas, bem estruturadas e com código limpo, usando React, TypeScript e MongoDB.",
    keywords: [
        "RGMenezes",
        "Rafael Menezes",
        "Portfólio",
        "Desenvolvedor Full Stack",
        "React",
        "TypeScript",
        "Node.js",
        "TART",
    ],
    authors: [{ name: "Rafael da Gloria Menezes", url: "https://github.com/RGMenezes" }],
    openGraph: {
        title: "RGMenezes - Portfólio",
        description: "Portfólio de Rafael da Gloria Menezes — desenvolvedor full-stack e estudante de Sistemas de Informação no IFF.",
        url: "https://rgmenezes.vercel.app",
        siteName: "RGMenezes",
        locale: "pt_BR",
        type: "website",
    },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                {children}
            </body>
        </html>
    );
}
