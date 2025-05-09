import { Metadata } from "next";
//Componentes
import Header from "@/components/Header";
//Styles
import '@/app/styles/global.css'
import '@/app/styles/global-view.css'

export const metadata: Metadata = {
    title: 'Jean Carvalho',
    icons:{
        icon: "/foguete.png"
    },
    other:{
        author: 'Jean Carvalho'
    }
}

export default function RootLayout({children} : {children : React.ReactNode}){
    return(
        <html lang="pt-br">
            <body>
                <Header/>
                {children}
            </body>
        </html>
    );
}