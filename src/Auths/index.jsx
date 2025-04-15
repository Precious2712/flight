import LoginPage from "./LoginPage/LoginPage"
import UserSignup from "./userSignup/UserSignup"

export const AuthPage = () => {
    return (
        <>
            <div>
                <UserSignup />
                <LoginPage />
                {/* <input onChange={} type="text" /> */}
            </div>
        </>
    )
}