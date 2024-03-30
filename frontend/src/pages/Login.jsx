import Form from "../components/Form"

import {Helmet} from "react-helmet-async"

function Login() {
    return (
    <>
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Please Login before you're using the App" />
            <link rel="canonical" href="/login" />
        </Helmet>
        <Form route="/api/token/" method="login" />
    </>
    )
}

export default Login