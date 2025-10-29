import { BiSolidStar } from "react-icons/bi";
import { FaArrowRight, FaCog, FaHeart, FaTimes } from "react-icons/fa";
import styles from "./page.module.css";
import A from "@/components/base/A";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";

export default function Home() {
    return (
        <>
            <Header />
            <Section>
                <Text variant="h1">Texto teste</Text>
                <Text variant="h2">Texto teste</Text>
                <Text variant="h3">Texto teste</Text>
                <Text variant="h4">Texto teste</Text>
                <Text variant="p1">Texto teste</Text>
                <Text variant="p2">Texto teste</Text>
                <Text variant="p3">Texto teste</Text>
                <A href="#" variant="text">Link Text</A>
                <A href="#" variant="text" detached>Link Text</A>
                <A href="#" variant="buttonPrimary">Link Button Primary</A>
                <A href="#" detached variant="buttonPrimary" Icon={BiSolidStar} iconPosition="left">IFF</A>
                <A href="#" detached variant="buttonSecondary">Link Button Secondary</A>
                <A href="#" variant="buttonSecondary" Icon={BiSolidStar}>IFF</A>
                <A href="#" detached variant="icon" Icon={BiSolidStar} iconPosition="right">IFF</A>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "30px" }}>
      
                    {/* ---------------------------------- */}
                    {/* 1. VARIANTE BUTTON PRIMARY */}
                    {/* ---------------------------------- */}
                    <h2>1. Primary Buttons (Padrão e Destacado)</h2>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Button variant="buttonPrimary">Botão Primário Padrão</Button>
                        <Button variant="buttonPrimary" detached>Botão Primário Detached</Button>
                        <Button variant="buttonPrimary" Icon={FaHeart} iconPosition="left">Curtir</Button>
                        <Button variant="buttonPrimary" Icon={FaArrowRight}>Avançar</Button>
                    </div>

                    {/* ---------------------------------- */}
                    {/* 2. VARIANTE BUTTON SECONDARY */}
                    {/* ---------------------------------- */}
                    <h2>2. Secondary Buttons (Contorno)</h2>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Button variant="buttonSecondary">Botão Secundário Padrão</Button>
                        <Button variant="buttonSecondary" detached>Botão Secundário Detached</Button>
                        <Button variant="buttonSecondary" Icon={FaHeart} iconPosition="left">Curtir</Button>
                        <Button variant="buttonSecondary" Icon={FaArrowRight}>Avançar</Button>
                    </div>

                    {/* ---------------------------------- */}
                    {/* 3. VARIANTE ICON */}
                    {/* ---------------------------------- */}
                    <h2>3. Icon Buttons (Botão de Ícone)</h2>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        {/* Note: A variante "icon" ignora o 'children' (texto) */}
                        <Button variant="icon" Icon={FaCog} size="medium" />
                        <Button variant="icon" Icon={FaHeart} /> {/* size padrão é small/16px */}
                        <Button variant="icon" Icon={FaTimes} size="large" detached />
                    </div>

                    {/* ---------------------------------- */}
                    {/* 4. MUDANÇA DE TAMANHO (Small, Medium, Large) */}
                    {/* ---------------------------------- */}
                    <h2>4. Tamanhos (Size)</h2>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Button variant="buttonPrimary" size="small">Small</Button>
                        <Button variant="buttonPrimary" size="medium">Medium</Button>
                        <Button variant="buttonPrimary" size="large">Large</Button>
        
                        <Button variant="buttonSecondary" size="small" Icon={FaArrowRight}>Small</Button>
                        <Button variant="buttonSecondary" size="medium" Icon={FaArrowRight}>Medium</Button>
                        <Button variant="buttonSecondary" size="large" Icon={FaArrowRight}>Large</Button>
                    </div>

                </div>
            </Section>
        </>
    );
}
