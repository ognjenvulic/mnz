import React from 'react';
import axios from 'axios';
import './App.css'

class App extends React.Component {

  state = {
    title: '',
    body:'',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  }

  getBlogPost = () => {
    axios.get('/api')
      .then((response)=>{
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received');
      })
      .catch(()=>{
        alert('Error getting data')
      })
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    }

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then((response)=>{
        console.log("Sent to server: ", response);
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch((error)=>{console.log("Error sending to server: ", error)});
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  }

  displayBlogPost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index)=> (
      <div key={index} className="blog-post_display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  }

  render() {
    //console.log(`State: `, this.state);

    return (
      <div className="app">
        <a href="/auth/google">Log in</a>
        <h1>Welcome to App from GIT - dev test</h1>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
              type="Text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              name="body"
              placeholder="Body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>

          <button>Submit</button>
        </form>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  };
};

export default App;