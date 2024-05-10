import React from "react";
import useFetch from "../hooks/useFetch";
import '../styles/Home.css';

export default function Home() {
    let url = "http://localhost:3001/blogs";
    let { data : blogs, loading, error } = useFetch(url);


    return (<div className="Home">
      { error && <div>{ error }</div>}
      { loading && <div>Loading.....</div>}
      { !!blogs && blogs.map(blog => {
        return (
          <div className="card" key={blog.id}>
            <h3>{ blog.title }</h3>
            <p>Posted By : { blog.author }</p>
          </div>
        )
      })}
    </div>);
}
