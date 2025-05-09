'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import '@/app/styles/header/header.css'

export default function Header() {
    
    const pathname = usePathname()

    return (
        <header>
            <div className="image-wrapper">
                <Image
                    src="/Eu.png"
                    alt="Uma foto minha"
                    width={150}
                    height={150}
                    className='Profile-photo'
                />
            </div>
            <div style={{textAlign: 'center'}}>
                <h1>
                    Jean Carvalho
                </h1>
                <h2 style={{fontSize: '1em', color: 'rgb(131, 130, 130)'}}>Desenvolvedor FullStack</h2>
            </div>
            <nav>
                <ul className="box-link">
                    <Link href="/" className={`link-styles ${pathname === '/'? 'active': ''}`}>
                        <Image
                            src="/menu.png"
                            alt="Icone de menu"
                            width={15}
                            height={15}
                            className="icones-styles"
                        />
                        <span>Home</span>
                    </Link>
                    <Link href="/redes" className={`link-styles ${pathname === '/redes'? 'active':''}`}>
                    <Image
                        src="/link-alt.png"
                        alt="Icone de link"
                        width={15}
                        height={15}
                        className="icones-styles"
                    />
                    <span>Redes</span>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};
