import styles from './App.scss'

import { Component } from 'react';

import * as postService from './services/postService';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

// json-server -p 4000 db.json

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      selectedPost: null
    }
  }

  componentDidMount() {
    postService.getAll().then(posts => {
      this.setState({ posts })
    })
  }

  onAsideItemClick(id) {
    this.setState({ selectedPost: id })
  }

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts
    } else {
      return [this.state.posts.find(x => x.id == this.state.selectedPost)]
    }
  }

  render() {

    return (
      <>
        <Header></Header>
        <div className="container">
          <Aside
            onAsideItemClick={this.onAsideItemClick.bind(this)}
            selectedList={this.state.idPost} ></Aside>
          <Main posts={this.getPosts()}></Main>
        </div>
        <Footer></Footer>
      </>
    );

  }
}


export default App;

// function App() {
//   return (
//     <body>
//       <Header></Header>
//       <div className="container">
//         <Aside></Aside>
//         <Main></Main>
//       </div>
//       <Footer></Footer>
//     </body>
//   );
// }