import Form from "../components/Form"
import {Helmet} from "react-helmet-async"

function Register() {
    return (
    <>
        <Helmet>
            <title>Register</title>
            <meta name="description" content="Please Create an Account before you're using the App" />
            <link rel="canonical" href="/register" />
        </Helmet>
        <Form route="/api/user/register/" method="register" />
    </>
    )
}

export default Register