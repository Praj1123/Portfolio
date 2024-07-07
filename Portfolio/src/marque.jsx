import './Style.css'
export default function HorizontalMarque() {
    return (
        <>
            <h2 className='sub_heading-2'>I am used to...</h2>
            <marquee className='HorizontalMarque' width="100%" direction="right" height="150px">
               <img className='marque_images' src='images/html.png'/>
               <img className='marque_images' src='images/css.png'/>
               <img className='marque_images' src='images/bootstrap.png'/>
               <img className='marque_images' src='images/tailwind.png'/>
               <img className='marque_images' src='images/javascript.png'/>
               <img className='marque_images' src='images/react.png'/>
               <img className='marque_images' src='images/nodejs.png'/>
               <img className='marque_images' style={{width:'250px'}} src='images/expressjs.png'/>
               <img className='marque_images' style={{width:'250px'}} src='images/mongodb.png'/>
               <img className='marque_images' style={{width:'250px'}} src='images/firebase.png'/>
            </marquee>
        </>
    )
}