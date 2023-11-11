import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import './CCSS/Footer.css'







export default function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
          <a href="https://www.instagram.com/bostandondurmacafe/" className='icons' target='_blank'><AiFillInstagram/></a>
          <a href="https://www.instagram.com/bostandondurmacafe/" className='icons' target='_blank'><AiFillFacebook/></a>
          <a href="https://www.instagram.com/bostandondurmacafe/" className='icons' target='_blank'><AiOutlineTwitter/></a>
        </div>
        <p className='haklar'>Tüm Hakları Saklıdır | Bostan Dondurma Pasta Cafe</p>
    </div>
  )
}
