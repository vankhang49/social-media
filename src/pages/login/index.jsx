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
    const [openEyeSingIn, setOpenEyeSingIn] = useState(false);
    const [openEyeSingUp1, setOpenEyeSingUp1] = useState(false);
    const [openEyeSingUp2, setOpenEyeSingUp2] = useState(false);
    const [openRegisterForm, setOpenRegisterForm] = useState(false);

    const router = useRouter();
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: {errors: loginErrors},
        setValue: setLoginValue,
        getValues: getLoginValue
    } = useForm();

    const {
        register: registerForm,
        handleSubmit: handleSubmitRegister,
        formState: {errors: registerError},
        setValue: setRegisterValue,
        getValues: getRegisterValue
    } = useForm({
        criteriaMode: "all"
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmitLogin = async (data) => {
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

    const onSubmitRegister = async (data) => {
        setIsLoading(true);
        setTimeout( () => {
            try {
                setIsLoading(false);

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
            <div className={`container ${openRegisterForm ? "active" : ""}`}>
                <div className="content-wrapper">
                    <div className="form-container register-box">
                        <form onSubmit={handleSubmitRegister(onSubmitRegister)} className="register-form">
                            <div className="flex-head-form">
                                <h1>Sign Up</h1>
                                <div className="form-group">
                                    <button className="icon-btn" type='button'><FaGooglePlusG/></button>
                                    <button className="icon-btn" type='button'><TiSocialFacebook/></button>
                                </div>
                            </div>
                            <div className="form-title">
                                <p>or register with your account</p>
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type="email"
                                       {...registerForm("email", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Email"/>
                                {registerError.email &&
                                    <p style={{color: "red", fontSize: "13px"}}>{registerError.email.message}</p>}
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type={openEyeSingUp1 ? "text" : "password"}
                                       {...registerForm("newPassword", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Password"/>
                                {openEyeSingUp1 ? <FaEye onClick={() => setOpenEyeSingUp1(!openEyeSingUp1)}></FaEye> :
                                    <FaEyeSlash onClick={() => setOpenEyeSingUp1(!openEyeSingUp1)}></FaEyeSlash>}
                                {registerError.newPassword &&
                                    <p style={{color: "red", fontSize: "13px"}}>{registerError.newPassword.message}</p>}
                            </div>
                            <div className="form-group form-confirm-password">
                                <input className='form-input' type={openEyeSingUp2 ? "text" : "password"}
                                       {...registerForm("confirmPassword", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Confirm Password"/>
                                {openEyeSingUp2 ? <FaEye onClick={() => setOpenEyeSingUp2(!openEyeSingUp2)}></FaEye> :
                                    <FaEyeSlash onClick={() => setOpenEyeSingUp2(!openEyeSingUp2)}></FaEyeSlash>}
                                {registerError.confirmPassword &&
                                    <p style={{color: "red", fontSize: "13px"}}>{registerError.confirmPassword.message}</p>}
                            </div>
                            <div className="form-group">
                                <button className="submit-btn" type={"submit"} disabled={isLoading}
                                        style={isLoading ? {background: "#ccc"} : null}>
                                    {isLoading ?
                                        <Image src={spinner} alt="spinner"/>
                                        :
                                        "Sign In"
                                    }
                                </button>
                            </div>
                            <button className="btn-move move-login"
                                    onClick={() => setOpenRegisterForm(false)}
                            >Or Sign In
                            </button>
                            <Link href={`/`} className={'come-back'}><FaArrowLeftLong/> Back to Home Page</Link>
                        </form>
                    </div>
                    <div className="form-container login-box">
                        <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="login-form">
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
                                       {...registerLogin("email", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Email"/>
                                {loginErrors.email &&
                                    <p style={{color: "red", fontSize: "13px"}}>{loginErrors.email.message}</p>}
                            </div>
                            <div className="form-group form-password">
                                <input className='form-input' type={openEyeSingIn ? "text" : "password"}
                                       {...registerLogin("password", {
                                           required: "Do not empty!"
                                       })}
                                       placeholder="Password"/>
                                {openEyeSingIn ? <FaEye onClick={() => setOpenEyeSingIn(!openEyeSingIn)}></FaEye> :
                                    <FaEyeSlash onClick={() => setOpenEyeSingIn(!openEyeSingIn)}></FaEyeSlash>}
                                {loginErrors.password &&
                                    <p style={{color: "red", fontSize: "13px"}}>{loginErrors.password.message}</p>}
                            </div>
                            <div className="form-group remember-forgot">
                                <input type="checkbox" {...registerLogin("rememberMe")} id="remember-me" name="remember"/>
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
                            <button className="btn-move move-register"
                                    onClick={() => setOpenRegisterForm(true)}
                            >Or Sign Up
                            </button>
                            <Link href={`/`} className={'come-back'}><FaArrowLeftLong/> Back to Home Page</Link>
                        </form>
                    </div>

                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="button-move"
                                        onClick={() => setOpenRegisterForm(false)}
                                >Sign In
                                </button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <Image src={logo} alt="logo"/>
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button className="button-move"
                                        onClick={() => setOpenRegisterForm(true)}
                                >Sign Up
                                </button>
                            </div>
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