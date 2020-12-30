import React from 'react';
import Hero from '../containers/hero';
import HowItWorks from '../containers/howitworks';
import FAQ from '../containers/faq';
import Team from '../containers/team';
import Layout from '../components/layout';


export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <div className="bg-gray-100 border-t border-b min-h-screen ">
        <HowItWorks />
      </div>
      <Team />
      <div className="bg-gray-200 min-h-screen ">
        <FAQ />
      </div>
    </Layout>
  );
}
