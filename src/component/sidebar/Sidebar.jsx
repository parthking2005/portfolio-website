import React from 'react'
import './Sidebar.css'
import frameImage from '../../assets/Frame.png';
import frameImage1 from '../../assets/Frame1.png';
import frameImage2 from '../../assets/Frame2.png';
import frameImage3 from '../../assets/Frame3.png';
import frameImage4 from '../../assets/Frame4.png';
import file from '../../assets/file.png';

function Sidebar() {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/parth-kathrotiya-550920283/', '_blank', 'noopener,noreferrer');
  };

  const handleCVDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure you have a resume.pdf file in your public folder
    link.download = 'Parth_Kathrotiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='text-white sidebar'>
      <div className='first-sidebar'>
        <div className='first-sidebar-imageside'>
          <div className='first-sidebar-imageside-imagebox'>
            <img src={file} className='first-sidebar-imageside-imagebox-img' alt="Parth Kathrotiya" />
          </div>
        </div>  
        <div className='first-sidebar-textside'>
          <div className='first-sidebar-textside-name'>Parth Kathrotiya</div>
          <div className='first-sidebar-textside-job'>Web Developer</div>
        </div>
      </div>
      <div className='second-sidebar'>
        <div className='second-sidebar-center relative'>
          <div className='sidebar-box absolute top-0'>
            <div className='sidebar-box-image'><img src={frameImage1} className='sidebar-box-image-img' alt="" /></div>
            <div className='sidebar-box-text'>parth.kathrotiya.dev@gmail.com</div>
          </div>
          <div className='sidebar-box absolute sidebar-box-2'>
            <div className='sidebar-box-image'><img src={frameImage} className='sidebar-box-image-img' alt="" /></div>
            <div className='sidebar-box-text'>+91 9925413869</div>
          </div>
          <div className='sidebar-box absolute sidebar-box-3'>
            <div className='sidebar-box-image'><img src={frameImage2} className='sidebar-box-image-img' alt="Location" /></div>
            <div className='sidebar-box-text'>Surat</div>
          </div>
          <div 
            className='sidebar-box absolute sidebar-box-4 cursor-pointer'
            onClick={handleLinkedInClick}
            style={{ cursor: 'pointer' }}
          >
            <div className='sidebar-box-image'><img src={frameImage3} className='sidebar-box-image-img' alt="LinkedIn" /></div>
            <div className='sidebar-box-text'>linkedin</div>
          </div>
          <div 
            className='sidebar-box absolute bottom-0 cursor-pointer'
            onClick={handleCVDownload}
            style={{ cursor: 'pointer' }}
          >
            <div className='sidebar-box-image'><img src={frameImage4} className='sidebar-box-image-img' alt="Resume" /></div>
            <div className='sidebar-box-text'>CV(Resume)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar