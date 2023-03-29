import './App.scss';
// import { Route, Routes } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return(
   //   <>
   //      <Routes>
   //         <Route path="/" element={<Layout />}>
   //            <Route index element={<Home />}/>
   //            <Route path='about' element={<About />} />
   //            <Route path='contact' element={<Contact />} />
   //         </Route>
   //      </Routes>
   //   </>
   <HashRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </HashRouter>
   );
}

export default App;
