import React from 'react';
import { Route, Link } from 'react-router-dom';
import PicturesEdit from '../PicturesEdit/PicturesEdit';
import PitrueShow from '../PictureShow/PictureShow';

const App = () => (
  <div>
    <header className="header">
      <Link to="/">Picture Edit</Link>
      <Link to="/picture-show">Picture Show</Link>
    </header>

    <div></div>

    <main className="content">
      <Route exact path="/" component={PicturesEdit} />
      <Route exact path="/picture-show" component={PitrueShow} />
    </main>
  </div>
)

export default App
