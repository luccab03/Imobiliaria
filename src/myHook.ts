import { useRef } from "react";

const myHook = (callback = () => {}) => {
    const hasBeenCalled = useRef(false);
    if(hasBeenCalled.current) return;
    callback();
    hasBeenCalled.current = true;
}

export default myHook;
