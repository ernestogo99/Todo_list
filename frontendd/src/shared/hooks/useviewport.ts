import { useEffect, useState } from "react"

export const useViewPort=()=>{
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    const handleResize=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize)
    },[])

    return{
        width,
        height,
        isMobile: width<600,
        isTablet: width<1000 && width>600
    }
}