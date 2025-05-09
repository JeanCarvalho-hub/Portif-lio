'use client'

import Image from "next/image";
import { motion } from "framer-motion";
//componentes
import Projetos from "@/components/projetos";
import Skill from "@/components/skill";
//stylesheet
import "@/app/styles/main/main.css"
import "@/app/styles/main/main-view.css"

export default function Main() {
    return (
        <main>
            <motion.section id="Sobre-mim"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <div className="box-title">
                    <h2 className="title-box">Por trás do código</h2>
                    <div className="text-about-me">
                        <p>
                            Com experiência no desenvolvimento FullStack, atuo criando aplicações web completas, desde interfaces modernas e responsivas até integrações de APIs e bancos de dados.
                            Tenho domínio em tecnologias de front-end e back-end, além de aplicar princípios de hacking ético para tornar os     sistemas mais seguros e confiáveis.
                        </p>
                    </div>
                </div>
            </motion.section>
            <motion.section
                id="habilidades"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <div>
                    <h2 className="title-box">Habilidades</h2>
                </div>
                <Skill />
            </motion.section>
            <motion.section initial={{ opacity: 0, x: 100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1}} viewport={{once: false}}>
                <Projetos />
            </motion.section>
        </main>
    );
};