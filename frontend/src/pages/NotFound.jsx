import {Helmet} from "react-helmet-async"


function NotFound() {
    return <div>
        <Helmet>
            <title>Nothing found</title>
            <meta name="description" content="Nothing found. Please type in a valid URL." />
            <link rel="canonical" href="/404" />
        </Helmet>
        <h1>404 Not Found</h1>
        <p>The page you're looking for does not exist!</p>
    </div>
}

export default NotFound