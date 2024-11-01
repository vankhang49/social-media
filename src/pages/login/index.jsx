import {FaEye, FaEyeSlash, FaGooglePlusG} from "react-icons/fa";
import "./LoginPage.scss";
import {TiSocialFacebook} from "react-icons/ti";
import logo from "@/asset/images/logo-social-media.png";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useForm} from "react-hook-form";
import spinner from "@/asset/gifs/Spinner.gif";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

function Index() {
    const [openEye, setOpenEye] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        criteriaMode: "all"
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        const remember = data.rememberMe;
        setIsLoading(true);
        setTimeout( () => {
            try {
                setIsLoading(false);
                localStorage.setItem('isAuthenticated', "authenticated");
                router.push("/").catch(console.error);
                console.log("Đăng nhập thành công!");
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }, 2000)
    }

    return (
        <div id="login">
            <header>

            </header>
            <div className="container">
                <div className="content-wrapper">
                    <div className="login-box">
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                            <div className="flex-head-form">
                                <h1>Sign In</h1>
                                <div className="form-group">
                                    <button className="icon-btn" type='button'><FaGooglePlusG/></button>
                                    <button className="icon-btn" type='button'><TiSocialFacebook/></button>
                                </div>
                            </div>
                            <div className="form-title">
                                <p>or use your email password</p>
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type="email"
                                       {...register("email",{
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Email"/>
                                {errors.email &&
                                    <p style={{color: "red", fontSize: "13px"}}>{errors.email.message}</p>}
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type={openEye ? "text" : "password"}
                                       {...register("password", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Password"/>
                                {openEye ? <FaEye onClick={() => setOpenEye(!openEye)}></FaEye> :
                                    <FaEyeSlash onClick={() => setOpenEye(!openEye)}></FaEyeSlash>}
                                {errors.password &&
                                    <p style={{color: "red", fontSize: "13px"}}>{errors.password.message}</p>}
                            </div>
                            <div className="form-group remember-forgot">
                                <input type="checkbox" {...register("rememberMe")} id="remember-me" name="remember"/>
                                <label htmlFor="remember-me">Remember-me</label>
                                <Link href="/">Forget your Password?</Link>
                            </div>
                            <div className="form-group">
                                <button className="submit-btn" type={"submit"} disabled={isLoading}
                                        style={isLoading ? {background: "#ccc"} : null}>
                                    {isLoading ?
                                        <Image src={spinner} alt="spinner"/>
                                        :
                                        "Log in"
                                    }
                                </button>
                            </div>
                            <Link href={`/`} className={'come-back'}><FaArrowLeftLong/> Back to Home Page</Link>
                        </form>
                    </div>
                    <div className="overlay">
                        <div className="overlay-element">
                            <Image src={logo} alt="logo"/>
                        </div>
                        <div className="overlay-element">
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default Index;