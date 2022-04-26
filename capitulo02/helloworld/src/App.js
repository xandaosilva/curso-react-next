import './App.css';
import { Component } from 'react';


class App extends Component{
  state = {
    posts: [
      {
        id: 1,
        title: 'Livro 1',
        body: 'Conteúdo do livro 1'
      },
      {
        id: 2,
        title: 'Livro 2',
        body: 'Conteúdo do livro 2'
      },
      {
        id: 3,
        title: 'Livro 3',
        body: 'Conteúdo do livro 3'
      }
    ]
  };

  render(){
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
