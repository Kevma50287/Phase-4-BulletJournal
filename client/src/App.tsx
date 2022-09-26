import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layouts/Layout';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          <Layout/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
