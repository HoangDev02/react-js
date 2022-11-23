import LoginForm from "../../compoment/LoginForm";
// import "./styles.scss";
import block from '../../img/blog-img-6-800x778.jpg'


export default function LoginPage(){
    return(
        <div className="background" style={{width: "100%",height: "100%",backgroundImage: "url(" + { block } + ")"}}>
            <LoginForm />
        </div>
    )
}