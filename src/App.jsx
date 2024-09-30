import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import WelcomeSec from './components/welcomeSec/WelcomeSec'
import Services from './components/services/Services'
import WhyChoose from './components/whyChoose/whyChoose'
import Section from './components/section/Section'
import Things from './components/thingsSec/Things'
import Form from './components/formsection/Form'
import Leadership from './components/global leadership/Leadership'
import SecPoint from './components/sectionpoints/SecPoint'
import background from './assets/background-15.jpg'
import Testimonial from './components/testimonial/Testimonial'
import GalleryLogo from './components/logogallery/GalleryLogo'
import News from './components/letestNews/News'


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <WelcomeSec/>
    <Services/>
    <WhyChoose/>
    <Section/>
    <Things/>
    <Form/>
    <Leadership/>
    <div className="bg-[url('./src/assets/background-15.jpg')] bg-cover h-[90vh] contrast-150">
    <SecPoint/>
    </div>
    <Testimonial/>
    <GalleryLogo/>
    <News/>
    </>
  )
}

export default App