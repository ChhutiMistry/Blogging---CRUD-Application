import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

  
const Routing = () => {
     return(
          <Routes>
               <Route path="/" element={<Layout/>}>
                    <Route index element={<PostsList/>}/>
                    <Route path="post">
                         <Route index element={<AddPostForm/>}/>
                         <Route path=":postId" element={<SinglePostPage/>}/>
                         <Route path="edit/:postId" element={<EditPostForm/>}/>
                    </Route>
               </Route>
          </Routes>
     );
}

export default Routing;