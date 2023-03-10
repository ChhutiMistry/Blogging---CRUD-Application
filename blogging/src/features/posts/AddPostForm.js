import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()
                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2 className="wanb">
                Write a New Blog
            </h2>
            <form>
                <label htmlFor="postTitle" className="pbhead">
                    Blog Title:
                </label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged}/>
                <label htmlFor="postAuthor" className="pbhead">
                    Blog Author:
                </label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent" className="pbhead">
                    Blog Content:
                </label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged}/>
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Blog
                </button>
            </form>
        </section>
    )
}

export default AddPostForm;