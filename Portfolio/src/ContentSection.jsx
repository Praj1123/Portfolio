import 'animate.css';
import './Style.css'
import Cards from './cards';
import HorizontalMarque from './marque';
import RecentWork from './RecentWork';
import ContactForm from './ContactForm';
export default function ContentSection() {
    return (
        <>
            <div className="container">
                <h1 className='animate__animated animate__fadeInLeft title'>Designer & Full Stack Web Developer</h1>
                <p className='animate__animated animate__fadeInRight sub-title'>I design and code beautifully simple things, and I love what I do.</p>
                <img className='avtar1 img-fluid' src='images/icon2.svg' />
                <img className='avtar2 img-fluid' src='images/icon3.svg' />
            </div>
            <div className="row intro">
                <p className='animate__animated animate__jackInTheBox'>Hi there! I'm Prajwal Choudhari, a dedicated and passionate freelance web developer. With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, responsive, and user-friendly websites and applications.</p>
            </div>
            <div className="container">
                <Cards />
            </div>
            <div className="container">
                <HorizontalMarque />
            </div>
            <div className="container">
                <RecentWork />
            </div>
            <ContactForm />
        </>
    )
}