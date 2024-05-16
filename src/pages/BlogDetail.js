import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

export default function BlogDetail() {
    
    const params = useParams();
    
    const { data : blog, loading, error } = useFetch(`http://localhost:3001/blogs/${params.id}`);

    const navigate = useNavigate();
    useEffect(function () {
        if(error) setTimeout(() => { navigate('/') }, 2000);
    }, [error, navigate])
    return (
        <div>
            { error && <div>{error}</div>}
            { loading && <div>{loading}</div>}
            { blog && (
                <div>
                    <h2>{ blog.title }</h2>
                    <p>Posted by : { blog.author }</p>
                    <p>{ blog.body }</p>
                </div>
            )}
        </div>
    )
}

