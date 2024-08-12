import React from 'react'

const VideoBanner = () => {
  return (
    <div className='w-full'>
        <div className=''>
        <div className="welcome-call-to-action">
            <video muted autoPlay loop playsInline id="video" className='max-h-full w-full'>
                <source src="/bannerVideo.webm" type="video/webm"/>
            </video>
            <div className="veil">...satisfy all your fashion desires</div>
        </div>

        </div>

    </div>
  )
}

export default VideoBanner