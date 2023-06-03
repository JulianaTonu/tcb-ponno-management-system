import React from 'react'
import img from  './../../images/qr-code-app.jpeg'
import img2 from  './../../images/card2.png'
import './Home.css'
import { FaUsers } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BsQuestionCircleFill } from "react-icons/bs";

import formImg from './../../images/form.png'
import fotterImg1 from './../../images/tcb.png'
import fotterImg2 from './../../images/sisl.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>

{/* //section1 */}
<section style={{backgroundColor:'#ffffff'}} className="mt-5 container shadow-lg p-4 align-items-center justify-content-center  rounded-3 mb-3" >
         <div id="contact__us">
          <h2 class="text-center fw-bold" style={{color:'#2dcd7c'}}>টিসিবি'র অনলাইন সেবা বাতায়নে আপনাকে স্বাগতম!</h2>
          <h4 class=" text-center mt-3 mb-4">ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি) এর পণ্য বিক্রয় সেবা সম্পর্কিত সকল তথ্য এই পোর্টালে পাওয়া যাচ্ছে।</h4>
          <form>
            <div class="mb-4">
             
             <p class="mt-3">আপনার ডিজিটাল ফ্যামিলি কার্ডের স্ট্যাটাস জানতে</p>
              
            </div>
             

             <Link to='https://play.google.com/store/apps/details?id=com.spectrum.upokari' id="btn-submit" type="submit" className="px-5 button text-light shadow" style={{textDecoration:'none'}}>এখানে ক্লিক করুন</Link>
           
          </form>
         </div>





         <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-2 text-center">
            <div class="mt-4 col tcb">
                <p>অথবা, নিচের QR কোডটি স্ক্যান করুন</p>
                <img src={img} alt='qr' className='img1'/>
             </div>

             <div class="col mt-5">
                <img  src={img2} className='img2'/>
             </div>
         </div>

          </section>

{/* //section2 */}
<div className='container border shadow pb-5 rounded h-25 w-100 my-5 position-relative'>
<div className='row '>
  <div className='col-lg-3 col-md-6 col-sm-12 text-center nibondhon '>
  <p className='user shadow'><FaUsers style={{fontSize:'50px', marginTop:'10px', color:'#2dcd7c'}}/></p>
  <h4 class="">উপকারভোগী নিবন্ধন</h4>
  </div>
  <div className='col-lg-3 col-md-6 col-sm-12 nibondhon '>
  <p className='user shadow'><BsFillPersonVcardFill  style={{fontSize:'50px', marginTop:'10px',color:'#2dcd7c'}}/></p>
  <h4 class="">ডুপ্লিকেট ফ্যামিলি কার্ড</h4>

  </div>
  <div className='col-lg-3 col-md-6 col-sm-12 nibondhon'>
  <p className='user shadow'><HiInformationCircle style={{fontSize:'50px', marginTop:'10px',color:'#2dcd7c'}}/></p>
  <h4 class="">তথ্য আপডেট</h4>
  </div>
  <div className='col-lg-3 col-md-6 col-sm-12 nibondhon'>
  <p className='user shadow'><BsQuestionCircleFill style={{fontSize:'50px', marginTop:'10px',color:'#2dcd7c'}}/></p>
  <h4 class="">সচরাচর জিজ্ঞাসা</h4>
  </div>
</div>
</div>


{/* //section3 */}
<div className='container'>
  <h3 className=''>আপনার মন্তব্য/পরামর্শ/সমস্যা/অভিযোগ দিন</h3>
  <p className='background mb-5' style={{marginLeft: '355px', width: '300px', padding: '1.5px'}}></p>
<div className='row'>
<div className='col-lg-4 sideform background'>
<p className='text-light mt-5 pt-5'>আপনার মন্তব্য/পরামর্শ/সমস্যা/অভিযোগ দিন</p>
<div className=' mt-5'>
  <img src={formImg} className='w-75 mt-5'/>
</div>
</div>
<div className='col-lg-8'>

<form  action="#" role="form" class="shadow-lg p-5 rounded text-start">
                                <input type="hidden" name="_token" value="0yY7p64NKGIeSojshPvDHj224mgiLADJSj82V5Si"/>

                                <div class="row">
                                <div class="form-group col-md-6 mt-4">
                                    <label for="name" className='mb-3'>আপনার নাম</label>
                                    <input type="text" name="complainer_name" class="form-control" id="complainer_name" data-rule="minlen:4" required="" data-msg="Please enter at least 4 chars"/>
                                    <div class="validate"></div>
                                </div>
                                <div class="form-group col-md-6 mt-4">
                                    <label for="name" className='mb-3'>ই-মেইল</label>
                                    <input type="email" class="form-control" name="complainer_email" id="complainer_email" data-rule="email" required="" data-msg="Please enter a valid email"/>
                                    <div class="validate"></div>
                                </div>
                            </div>
                            <div class="form-group mt-4">
                                <label for="name" className='mb-3'>বিষয়</label>
                                <input type="text" class="form-control" name="complain_subject" id="complain_subject" data-rule="minlen:4" required="" data-msg="Please enter at least 8 chars of subject"/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group mt-4">
                                <label for="name" className='mb-3'>মন্তব্য/পরামর্শ/সমস্যা/অভিযোগ</label>
                                <textarea class="form-control" name="compalin_comments" rows="10" required="" data-rule="required" data-msg="Please write something for us"></textarea>
                                <div class="validate"></div>
                            </div>
                            <div class="text-center mt-4">
                                <button type="submit" class="button text-light">জমা দিন</button>
                            </div>
                        </form>

</div>

</div>

</div>



{/* //footer  */}
<footer className='shadow-lg'>
            <div class=" mt-5 py-4 container" >
               <div class="row">
                <div class="col-md-6 d-flex gap-0">
                    <div class="text-start"><img  class="" style={{width:'70px'}}  src={fotterImg1}/></div>
                    <div class=" mt-2 ms-3 text-start" style={{lineHeight: '20px'}}>
                        <p class="" style={{fontSize: 'small'}}>পরিকল্পনা ও বাস্তবায়নেঃ</p>
                        <p class="fw-bold" style={{fontSize: 'large'}} >ট্রেডিং কর্পোরেশন অব বাংলাদেশ</p>
                        <p class="fw-bold">www.tcb.gov.bd</p>
                    </div>
                </div>
                <div class="col-md-6 d-flex">
                    <div class="text-start"><img class="" style={{width: '70px'}} src={fotterImg2}/></div>
                    <div class="ms-3 mt-2 text-start" style={{lineHeight: '20px'}}>
                        <p style={{fontSize: 'small'}}>কারিগরি সহযোগিতায়ঃ</p>
                        <p class="fw-bold" style={{fontSize: 'large'}}>স্পেকট্রাম আইটি সলিউশনস লিঃ</p>
                        <p class="fw-bold">spectrum.com.bd</p>
                    </div>
                </div>
            </div>
            </div>
          </footer>
    </div>
  )
}

export default Home