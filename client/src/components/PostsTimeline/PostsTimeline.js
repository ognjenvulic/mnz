import React, {useEffect, useState} from 'react';
import axios from 'axios';

function PostsTimeline(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPost();
  }, []);

  const getBlogPost = () => {
    axios.get('/api')
      .then((response)=>{
        const data = response.data;
        setPosts(data);
      })
      .catch(()=>{
        alert('Error getting data')
      })
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'title') setTitle(value);
    if (name === 'body') setBody(value);
  };

  const submit = (event) => {
    event.preventDefault();

    const payload = {
      title: title,
      body: body
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then((response)=>{
        console.log("Sent to server: ", response);
        resetUserInputs();
        getBlogPost();
      })
      .catch((error)=>{console.log("Error sending to server: ", error)});
  };

  const resetUserInputs = () => {
    setTitle('');
    setBody('');
  }

  const displayBlogPost = () => {
    if (!posts.length) return null;

    return posts.map((post, index)=> (
      <div key={index} className="blog-post_display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  }

  return (
    <React.Fragment>
    <form onSubmit={submit}>
      <div className="form-input">
        <input
          type="Text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
            <textarea
              name="body"
              placeholder="Body"
              cols="30"
              rows="10"
              value={body}
              onChange={handleChange}
            />
      </div>

      <button>Submit</button>
    </form>

    <div className="blog-">
      {displayBlogPost()}
    </div>
    </React.Fragment>
  );

}

PostsTimeline.defaultProps = {};

PostsTimeline.propTypes = {};

export default PostsTimeline;