import { useEffect, useState } from "react"
import { useLocation } from "react-router";

export const CurrentPage = () => {
    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState();
    useEffect(() => {
        setCurrentUrlFun();
    }, [location.pathname])

    const setCurrentUrlFun = () => {
        let pathnameArray = location.pathname.split('/')
        setCurrentUrl(pathnameArray[(pathnameArray.length - 1) - 1])
    }

    return {
        currentUrl
    }
}