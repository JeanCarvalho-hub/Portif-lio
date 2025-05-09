import Image from "next/image";
import { act, useState } from "react";
//stylesheet
import "@/app/styles/projects/project.css"
import "@/app/styles/projects/project-view.css"
import { Mypage, Apirest, Login, InfoMypage, InfoApirest, InfoLogin, Pentester, InfoPentester} from "./image-project";

export default function Projetos() {
    const [active, useActive] = useState(null);

    function changeInfo(index: any) {
        useActive(active === index ? null : index);
    }

    return (
        <div className="project-div">
            <h2 className="title-box">
                Projetos
            </h2>
            <div>
                <ul className="project-list">
                    <li onClick={() => changeInfo(0)}>
                        <div className="div-list">
                            {active === 0 ? (<InfoMypage />) : (<Mypage />)}
                        </div>
                    </li>
                    <li onClick={() => changeInfo(1)}>
                        <div className="div-list">
                            {active === 1 ? (<InfoPentester/>): (<Pentester />)}
                        </div>
                    </li>
                    <li onClick={() => changeInfo(2)}>
                        <div className="div-list">
                            {active === 2 ? (<InfoApirest/>) : (<Apirest />)}
                        </div>
                    </li>
                    <li onClick={() => changeInfo(3)}>
                        <div className="div-list">
                            {active === 3 ? (<InfoLogin/>): (<Login />)}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}