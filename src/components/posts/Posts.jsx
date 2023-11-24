import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1700136862274-1d8214f95e66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Post img="https://images.unsplash.com/photo-1699804837175-8145e9202937?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Post img="https://images.unsplash.com/photo-1692391033910-bb7eeb34c65d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Post img="https://images.unsplash.com/photo-1699427128774-34fcdfbd7632?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Post img="https://images.unsplash.com/photo-1695982206826-970fd4e8e27e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  );
}
