import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div>
            <h1> ERROR, sorry an unexpecetd error occurred. </h1>

            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage
