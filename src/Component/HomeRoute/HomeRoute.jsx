import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category';
import JobDetails from '../JobDetails/JobDetails';
import JobList from '../JobList/JobList';

const BlogsPageRoute = () => {
    return (
        <div>
             <Hero></Hero>
             <Category></Category>
             <JobList></JobList>
        </div>
    );
};

export default BlogsPageRoute;