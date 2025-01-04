import { useEffect, useState } from "react";
import Komentarz from "./Komentarz";

interface Komentarz {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
    }
}

const Komentarze = () => {
    const [komentarze, setKomentarze] = useState<Komentarz[]>([]);
    
    useEffect(() => {
        fetch('https://dummyjson.com/comments')
        .then((response) => response.json())
        .then((data: {comments: Komentarz[]}) => setKomentarze(data.comments))
        .catch((error) => console.error('Błąd:', error))
    }, []);

    return (
        <div>
            {komentarze.map((komentarz: Komentarz) => (
                <Komentarz key={komentarz.id} {...komentarz} />
            ))}
        </div>
    )

}

export default Komentarze;