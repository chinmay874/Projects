import React from 'react';
import styles from './Word.module.css'
import {FcDocument} from 'react-icons/fc';
import { RxCounterClockwiseClock } from "react-icons/rx";
import {AiOutlineStar,AiOutlineCaretDown,AiFillLock,AiOutlinePrinter,AiOutlineFormatPainter} from 'react-icons/ai';
import {MdDriveFileMove,MdOutlineInsertComment} from 'react-icons/md';
import {BsFillCloudCheckFill, BsCameraVideo} from 'react-icons/bs';
import {BiUndo,BiRedo} from 'react-icons/bi';


function Word() {

  //const menubutton=[{File:['New','Open','Make a copy','Share',"Email","Download",'Save As','Save']}]

  const handlefilename=()=>{

  }


  return (
    <div className={styles.wordfile_container}>
        <div className={styles.header}>
        <div className={styles.filelogo}>
            <FcDocument style={{fontSize:"50px"}}/>
        </div>
        <div className={styles.nameandmenu}>
            <div className={styles.filenamemenubar}>
                <div className={styles.filename} onClick={handlefilename}> Untitled document</div>
                <div className={styles.topicons}>
                  <span className={styles.icons}><AiOutlineStar className={styles.iconfilemenubar}/></span>
                  <span className={styles.icons}><MdDriveFileMove className={styles.iconfilemenubar}/></span>
                  <span className={styles.icons}><BsFillCloudCheckFill className={styles.iconfilemenubar}/></span>
                </div>
        </div>
        <div className={styles.menubtn}>
          <button className={styles.menubutton}>File</button>
          <button className={styles.menubutton}>Edit</button>
          <button className={styles.menubutton}>View</button>
          <button className={styles.menubutton}>Insert</button>
          <button className={styles.menubutton}>Format</button>
          <button className={styles.menubutton}>Tools</button>
          <button className={styles.menubutton}>Extensions</button>
          <button className={styles.menubutton}>Help</button>
        </div>
        </div >
        <div className={styles.rightsideicons}>
          <span><RxCounterClockwiseClock className={styles.clock}/></span>
          <span><MdOutlineInsertComment className={styles.clock}/></span>
          <span className={styles.videomcam}><BsCameraVideo className={styles.video}/><AiOutlineCaretDown className={styles.clock1}/></span>
        </div>
        <div className={styles.Share}>
             <span><AiFillLock/></span>
             <span >Share</span>
        </div>
        <div>
          <p className={styles.username}>C</p>
        </div>
        </div>

        <div className={styles.tools}>
          <div className={styles.tool1}>
          <span><BiUndo className={styles.undo}/></span>
          <span><BiRedo className={styles.redo}/></span>
          <span><AiOutlinePrinter className={styles.printer}/></span>
          <span><AiOutlineFormatPainter className={styles.painter}/></span>
          <select className={styles.zoom}>
            <option>50%</option>
            <option>75%</option>
            <option>90%</option>
            <option>100%</option>
            <option>125%</option>
            <option>150%</option>
            <option>200%</option>
          </select>
          </div>
          <div>
            <select className={styles.textstyle}>
                <option>Normal text</option>
                <option>Heading</option>
                <option>Options</option>
            </select>
          </div>
            <div>
            <select className={styles.textstyle}>
                <option>Arial</option>
                <option>Impact</option>
                <option>Lora</option>
            </select>
            </div>
            <div className={styles.fontsize}>
              <button className={styles.decrement}>-</button>
              <p>
                
              </p>
            </div>
        </div>



        <div className={styles.textareacontainer}>
            <textarea className={styles.inputfield}>
            </textarea>
        </div>
        

    </div>
  )
}

export default Word