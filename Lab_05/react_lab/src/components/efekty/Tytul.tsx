import React from "react";
import { useState, useEffect} from "react";


const Tytul: React.FC = () => {
    const [title, setTitle] = useState('zwykly tytul');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <label>Tytuł: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </>
    )
}
export default Tytul;