import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
    return (
        <div className="container">
            <h2 className='sub_heading-2'>What I Do ?</h2>
            <div className="d-flex overflow-auto">
                <div className="row flex-nowrap">
                    <div className="card icon">
                        <img src="images/design.png" className="card-img-top card_image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Responsive Design</h5>
                            <p className="card-text"> Ensuring your website looks and functions beautifully on all devices, from desktops to mobile phones.</p>
                        </div>
                    </div>
                    <div className="card icon">
                        <img src="images/frontend.png" className="card-img-top card_image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Front End Development</h5>
                            <p className="card-text">Expertise in HTML, CSS, JavaScript, and modern frameworks like React to create stunning and interactive user interfaces.</p>
                        </div>
                    </div>
                    <div className="card icon">
                        <img src="images/backend.png" className="card-img-top card_image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Back End Development</h5>
                            <p className="card-text">Proficient in server-side technologies such as Node.js, Express, and databases like MongoDBto ensure robust and scalable backend systems.</p>
                        </div>
                    </div>
                    <div className="card icon">
                        <img src="images/fullstack.png" className="card-img-top card_image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Full-Stack Solutions</h5>
                            <p className="card-text">Combining front-end and back-end skills to deliver complete, end-to-end web solutions tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="card icon">
                        <img src="images/icon4.png" className="card-img-top card_image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Performance Optimization</h5>
                            <p className="card-text">Enhancing website speed and efficiency to provide the best user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
