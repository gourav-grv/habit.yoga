import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import CustomButton from './components/CustomButton';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import BlogOne from './components/BlogOne';
import BlogTwo from './components/BlogTwo';
import BlogThree from './components/BlogThree';
import TermsCondition from './components/TermsCondition';
import PrivacyPolicy from './components/PrivacyPolicy';


function App() {
  return (
    <div className="app">
      <Routes >
        <Route path="/" exact element={<Home/>} />
        <Route path='/contactus' exact element={<ContactUs/>} />
        <Route path='/termscondition' exact element={<TermsCondition/>} />
        <Route path='/privacypolicy' exact element={<PrivacyPolicy/>} />
        <Route path='/blog' exact element={<Blog/>} />
        <Route path='/blogone' exact element={<BlogOne/>} />
        <Route path='/blogtwo' exact element={<BlogTwo/>} />
        <Route path='/blogthree' exact element={<BlogThree/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
