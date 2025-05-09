import Image from "next/image"

function Mypage() {
    return (
        <>
            <Image src="/projetos/mypage.jpeg" alt="my page" width={300} height={300} className="imagens-projetos"></Image>
            <div className="title-project">
                <span>myPage!</span>
            </div>
        </>
    )
}
function Pentester() {
    return (
        <>
            <Image src="/projetos/pentester.jpg" alt="pentester" width={300} height={300} className="imagens-projetos"></Image>
            <div className="title-project">
                <span>Pentester</span>
            </div>
        </>
    )
}
function Apirest() {
    return (
        <>
            <Image src="/projetos/api-rest.jpeg" alt="api rest" width={300} height={300} className="imagens-projetos"></Image>
            <div className="title-project">
                <span style={{ textTransform: "uppercase" }}>api rest</span>
            </div>
        </>
    );
}
function Login() {
    return (
        <>
            <Image src="/projetos/login.jpeg" alt="autenticação no banco de dados" width={300} height={300} className="imagens-projetos"></Image>
            <div className="title-project">
                <span style={{ textTransform: "uppercase" }}>autenticação</span>
            </div>
        </>
    );
}
function InfoMypage() {
    return (
        <div className="infoProject">
            <h2 className="title-project-info">MyPage!</h2>
            <p>Um pequeno negócio fundada por mim, atuando como freelancer e especializada na criação de sites completos e landing pages profissionais.
                Ofereço soluções personalizadas com hospedagem em VPS própria, garantindo maior desempenho e segurança.</p>
        </div>
    );
};
function InfoApirest() {
    return (
        <div className="infoProject">
            <h2 className="title-project-info" style={{textTransform: 'uppercase'}}>api rest</h2>
            <p>Construção de API REST para gerenciamento de alunos.
                Desenvolvida para registrar e exibir dados de alunos em banco de dados.
                A API conta com autenticação via JWT, uso de middlewares para segurança e validações, e está pronta para ser integrada a uma interface front-end.</p>
        </div>
    );
};

function InfoLogin() {
    return (
        <div className="infoProject">
            <h2 className="title-project-info">Autenticação</h2>
            <p>API de autenticação com integração a bancos de dados SQL e NoSQL
            Desenvolvida para realizar login, cadastro de usuários e configurações personalizadas do usuário. Com suporte a bancos relacionais (SQL) e não relacionais (NoSQL).</p>
        </div>
    );
};
function InfoPentester() {
    return (
        <div className="infoProject">
            <h2 className="title-project-info">Pentester</h2>
            <p>Atuo de forma independente realizando testes de intrusão com foco em identificar e reportar falhas de segurança, como vulnerabilidades em bancos de dados, endpoints e na lógica das aplicações.
            </p>
        </div>
    );
};


export { Mypage, Apirest, Login, InfoMypage, InfoApirest, InfoLogin, Pentester, InfoPentester };