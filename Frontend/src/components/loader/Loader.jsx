import { FadeLoader } from "react-spinners"
import "./loader.css"


export default function Loader(){

    return (
        <div className="loader_container">
            <div>
                <FadeLoader color="#4db5ff" />
            </div>
        </div>
    )
}