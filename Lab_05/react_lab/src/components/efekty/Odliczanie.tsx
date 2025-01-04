import { useEffect, useState } from "react";

const Odliczanie: React.FC = () => {
    const [czas, setCzas] = useState(15);
    const [wlaczony, setwlaczony] = useState(false);

    useEffect(() => {
        let interval: number;
        if (wlaczony) {
            interval = setInterval(() => {
                setCzas(prevCzas => prevCzas > 0.1 ? prevCzas - 0.1 : (setwlaczony(false), 0))
            }, 100);
        }
        return () => clearInterval(interval);
}, [wlaczony]);

    return (
        <div>
            <p>Czas: {czas.toFixed(1)} sek</p>
            <button onClick={() => setwlaczony(prev => !prev)} disabled={czas===0}>{czas === 0 ? "Odliczanie zakończone" : wlaczony ? "stop" : "start"}</button>
        </div>
    );
}

export default Odliczanie;