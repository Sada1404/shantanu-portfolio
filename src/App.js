import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './container/layout';
import LeftView from './container/leftview';
import Header from './container/header';
import Homepage from './container/homepage';
import SocialMedia from './container/SocialMedia';
import AddNewPost from './container/AddNewPost';
import Index from './container/Index';
import AddNewCampaign from './container/AddNewCampaign';
import WordLimit from './components/word_limit_textarea';
import Table from './components/table';
import Calender from './components/date_picker';
import MetricCard from './components/Metrics';
import SearchBar from './components/Searchbar';
import Filter from './components/Filter';
import GridView from './components/Gridview';
import Abc from "./components/abc";




const App = () => {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index />} />    
      <Route path="/social-media" element={<SocialMedia />} />    
      <Route path="/add-post" element={<AddNewPost />} />    
      <Route path="/add-campaign" element={<AddNewCampaign />} />    
      <Route path="/container/layout" element={<Layout />} />    
      <Route path="/container/leftview" element={<LeftView />} />   
      <Route path="/container/header" element={<Header />} />
      <Route path="/container/homepage" element={<Homepage />} /> 
      <Route path="/components/word_limit_textarea" element={<WordLimit />} />  
      <Route path="/components/table" element={<Table />} /> 
      <Route path="/components/date_picker" element={<Calender />} /> 
      <Route path="/components/Metrics" element={<MetricCard />} /> 
      <Route path="/components/Searchbar" element={<SearchBar />} />  
      <Route path="/components/Filter" element={<Filter />} /> 
      <Route path="/components/Gridview" element={<GridView />} /> 
      <Route path="/components/abc" element={<Abc />} />
   
       
      </Routes>
    </Router>

    
  );
};

export default App;
