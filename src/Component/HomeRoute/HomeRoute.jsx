import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category';
import JobDetails from '../JobDetails/JobDetails';
import JobList from '../JobList/JobList';
import TopRecruiters from '../TopRecruiters/TopRecruiters';
import Footer from '../Footer/Footer';
import WhyLove from '../WhyLove/WhyLove';

const BlogsPageRoute = () => {
    return (
        <div>
             <Hero></Hero>
             <Category></Category>
             <JobList></JobList>
             <WhyLove></WhyLove>
             <TopRecruiters></TopRecruiters>
             {/* <Footer></Footer> */}
        </div>
    );
};

export default BlogsPageRoute;