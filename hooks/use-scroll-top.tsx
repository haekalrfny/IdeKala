import { useState,useEffect } from "react";

export default function useScrollTop(threshold=10) {

    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > threshold) {
                setScrolled(true)
            } else {
                setScrolled(true)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    return scrolled;
}
