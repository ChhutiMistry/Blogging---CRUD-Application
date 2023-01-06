import React from "react";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Routing from "./Routing";
import { store } from "./app/store";
import { fetchPosts } from "./features/posts/postsSlice";
import { fetchUsers } from "./features/users/usersSlice";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const container = document.getElementById('crudroot');
const root = createRoot(container);
root.render(
     <React.StrictMode>
          <Provider store={store}>
               <Router>
                    <Routes>
                         <Route path="/*" element={<Routing />} />
                    </Routes>
               </Router>
          </Provider>
     </React.StrictMode>
);