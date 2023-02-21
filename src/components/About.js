import React from 'react'
import "../css/About.css"
import {
  Link
} from "react-router-dom";

function About() {

  return (
    <div className='About'>

      <p>
        Welcome to Notter, where you can easily capture, organize, and recall your notes. Our platform is designed to make the process of note-taking simple and intuitive, so you can focus on what really matters - the content of your notes.

        Whether you're a student, professional, or just someone who likes to stay organized, our platform is built to accommodate your needs. With our easy-to-use interface, you can create, edit, and manage your notes with just a few clicks. Our website also offers a variety of organizational features, such as tags and categories, to help you keep your notes in order and easily searchable.

        We understand the importance of privacy and security, which is why our website is designed with state-of-the-art encryption technology to protect your data. You can trust that your notes are safe and secure with us.

        At Notter, we believe that note-taking should be a stress-free and enjoyable experience. Our platform is designed to make your note-taking experience as seamless and efficient as possible, so you can focus on what really matters - retaining and recalling the information that you need.

        Thank you for choosing our Notter as your preferred platform. We hope that our platform can assist you in achieving your goals and making note-taking a breeze.
      </p>

      <div className="developer">
        Hey folks!! I am ajit the creater of this website. This project is based on MERN Stack. This was my first personal project which i have made after learning react. It still contains lots of bugs but there's limit to the perfection itself. I think i have learned as much as i could have in doing this CRUD based project. Here is the souce code :-<Link  aria-current="page" to="https://github.com/aj-sin/iNote-frontend"><button>Source code</button></Link>
      </div>

    </div>
  )
}

export default About
