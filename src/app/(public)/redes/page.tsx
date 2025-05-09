'use client'
import { motion } from "framer-motion"
import Image from "next/image";
//stylesheet
import '@/app/styles/links/link.css'
import '@/app/styles/links/link-view.css'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};

const itens = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Redes() {
    return (
        <motion.section initial="hidden" animate="show" variants={container}>
            <div>
                <motion.ul variants={container} className="link-ul">
                    <motion.li variants={itens} className="link-li">
                        <a href='#' rel="noreferrer noopener nofollow">
                            <Image src='/github.png' alt="github" width={30} height={30} className="icone-list"/>
                            <div>
                                <h3>Github</h3>
                                <span style={{ fontSize: '0.9rem', color:'rgb(205, 151, 255)'}}>Alguns dos meus projetos</span>
                            </div>
                        </a>
                    </motion.li>
                    <motion.li variants={itens} className="link-li">
                        <a href='#' rel="noreferrer noopener nofollow">
                            <Image src='/linkdlin.png' alt="linkdlin" width={30} height={30} className="icone-list"/>
                            <div>
                                <h3>Linkdlin</h3>
                            </div>
                        </a>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.section>
    )
}