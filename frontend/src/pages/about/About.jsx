import React from 'react'
import './about.css'
import {Button, Typography, Avatar} from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'

export default function About(){
    const visitInstagram = () =>{
        window.location = "https://github.com/wantbook-book";
    }
    return (
        <div className='aboutSection'>
            <div></div>
            <div className='aboutSectionGradient'></div>
            <div className='aboutSectionContainer'>
                <Typography component='h1'>About Us</Typography>                
                <div>
                    <div>
                        <Avatar
                            style={{width:'10vmax', height:'10vmax', margin:'2vmax 0'}}
                            src="https://avatars.githubusercontent.com/u/69440289?v=4"
                            alt='Founder'
                        />
                        <Typography>Abhishek Singh</Typography>
                        <Button onClick={visitInstagram} color='primary'>
                            Visit Instagram
                        </Button>
                        <span>
                            This is a sample wesbite made by @meabhisingh. Only with the
                            purpose to teach MERN Stack on the channel 6 Pack Programmer
                        </span>
                    </div>
                    <div className='aboutSectionContainer2'>
                        <Typography component='h2'>Our Brands</Typography>
                        <a
                            href="https://github.com/wantbook-book"
                            target="blank"
                        >
                            <YouTubeIcon className="youtubeSvgIcon" />
                        </a>
                        <a href="https://github.com/wantbook-book" target="blank">
                            <InstagramIcon clainstagramssName="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}