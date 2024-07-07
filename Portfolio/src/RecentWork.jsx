import './Style.css'
export default function RecentWork() {
    return (
        <>
            <h2 className='sub_heading-2'>My Recent Work</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 recent_work">
                <div className="col work_card">
                    <div className="card work_images1">
                        <div className="card-body">
                            <h5 className="card-title">Taffin Ordering System</h5>
                            <p className="card-text">Developed a subscription-based platform for tiffin services.</p>
                            <p>Duration: 1 Month</p>
                            <div className="btn btn-outline-light work_btn">See Repository</div>
                        </div>
                    </div>
                </div>
                <div className="col work_card">
                    <div className="card work_images2">
                        <div className="card-body">
                            <h5 className="card-title">E-waste Managment System</h5>
                            <p className="card-text">Developed a project under the E-waste Policy 2023 to schedule waste pick-ups and manage collection centers.</p>
                            <p>Duration: 1 Month</p>
                            <div className="btn btn-outline-light work_btn">See Repository</div>
                        </div>
                    </div>
                </div>
                <div className="col work_card">
                    <div className="card work_images3">
                        <div className="card-body">
                            <h5 className="card-title">Virtual Desktop Assistant</h5>
                            <p className="card-text">The intelligent voice-based virtual assistant that lets you operate your PC with ease. From launching apps to sending emails, Luna makes it all possible with just your voice commands.</p>
                            <p>Duration: 15 Days</p>
                            <div className="btn btn-outline-light work_btn">See Repository</div>
                        </div>
                    </div>
                </div>
                <div className="col work_card">
                    <div className="card work_images4">
                        <div className="card-body">
                            <h5 className="card-title">Course Design Platform</h5>
                            <p className="card-text">Created a platform for educational institutes to design courses, offer enrollment, and track student progress.</p>
                            <p>Duration: 2 Month</p>
                            <div className="btn btn-outline-light work_btn">See Repository</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}