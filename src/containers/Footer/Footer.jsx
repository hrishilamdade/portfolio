import React,{useState} from 'react'
import { AppWrap,MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Footer.scss';
import { client } from '../../client';


const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name,email,message} = formData;

  const handleChange = (e) => {
    const type = e.target.name;

    setFormData({...formData,[type]:e.target.value});
  }
   
  const handleSubmit = ()=>{
    setLoading(true);
    const contact = {
      _type:'contact',
      name:name,
      email:email,
      message:message

    }
    client.create(contact).then(res=>{
      setLoading(false);
      setIsSubmitted(true);
    })
  }
  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href='mailto:hrishilamdade@gmail.com'>hrishilamdade@gmail.com</a>
        </div> 
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href='tel:+917666535165'>+917666535165</a>
        </div> 
      </div>
      {
        !isSubmitted ?<div className="app__footer-form app__flex">
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={(e)=> handleChange(e)} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type="email" placeholder='Your Email'  name='email' value={email} onChange={(e)=> handleChange(e)} />
          </div>
          <div className='app__flex'>
            <textarea className='p-text' type="text" placeholder='Your Message' name='message' value={message} onChange={(e)=> handleChange(e)} />
          </div>
          <button onClick={handleSubmit} type='button' className='p-text'>{loading?"Sending..." :"Send Message"}</button>
        </div>:<div>
          <h3 className='head-text'>Thank you for getting in touch !</h3>
        </div>
      }
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  'app__whitebg'
)