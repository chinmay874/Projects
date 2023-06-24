import React, { useState, useRef } from 'react';
import styles from './Word.module.css'
import {FcDocument} from 'react-icons/fc';
import { RxCounterClockwiseClock } from "react-icons/rx";
import {AiOutlineStar,AiOutlineCaretDown,AiFillLock,AiOutlinePrinter,AiOutlineFormatPainter,AiOutlineMinusSquare,
        AiOutlinePlusSquare,AiOutlineHighlight,AiFillCaretDown} from 'react-icons/ai';
import {MdDriveFileMove,MdOutlineInsertComment, MdInsertLink, MdOutlineAddComment,MdFormatLineSpacing,
         MdChecklist,MdFormatListBulleted,MdFormatListNumbered,MdFormatIndentDecrease,MdFormatIndentIncrease,MdFormatClear,
         MdEdit} from 'react-icons/md';
import {BsFillCloudCheckFill, BsCameraVideo,BsTypeBold,BsTypeItalic,BsTypeUnderline} from 'react-icons/bs';
import {BiUndo,BiRedo,BiImageAlt,BiAlignLeft} from 'react-icons/bi';
import { TbTextColor } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import {useReactToPrint} from 'react-to-print';


function Word() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [text, setText] = useState('');
  const [zoomLevel, setZoomLevel] = useState(50);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };
  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };
  const handleZoomChange = (event) => {
    setZoomLevel(parseInt(event.target.value));
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const componentRef = useRef();

  

  return (
    <div className={styles.wordfile_container}>
        <div className={styles.header}>
        <div className={styles.filelogo}>
            <FcDocument style={{fontSize:"50px"}}/>
        </div>
        <div className={styles.nameandmenu}>
            <div className={styles.filenamemenubar}>
                <div className={styles.filename}> Untitled document</div>
                <div className={styles.topicons}>
                  <span><AiOutlineStar className={styles.iconfilemenubar}/></span>
                  <span><MdDriveFileMove className={styles.iconfilemenubar}/></span>
                  <span><BsFillCloudCheckFill className={styles.iconfilemenubar}/></span>
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
          <span className={styles.lnformat}><BiUndo className={styles.undo}/></span>
          <span className={styles.lnformat}><BiRedo className={styles.redo}/></span>
          <span className={styles.lnformat}><AiOutlinePrinter className={styles.printer} onClick={handlePrint}/></span>
          <span className={styles.lnformat}><AiOutlineFormatPainter className={styles.painter}/></span>
          <select className={styles.zoom} onChange={handleZoomChange} >
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
           < AiOutlineMinusSquare className={styles.decrement}/>
              <p className={styles.Fontsize} >
                  20
              </p>
              <AiOutlinePlusSquare className={styles.increment} />
            </div>
            <div className={styles.iconclass}>
            <span className={styles.lnformat}><BsTypeBold className={styles.icons} onClick={handleBoldClick}>{isBold ? 'Remove Bold' : 'Add Bold'}</BsTypeBold></span>
            <span className={styles.lnformat}><BsTypeItalic className={styles.icons} onClick={handleItalicClick}>{isItalic ? 'Remove Italic' : 'Add Italic'}</BsTypeItalic></span>
            <span className={styles.lnformat}><BsTypeUnderline className={styles.icons}/></span>
            <span className={styles.lnformat}><TbTextColor className={styles.icons}/></span>
            <span className={styles.lnformat}><AiOutlineHighlight className={styles.icons}/></span>
            </div>
            <div className={styles.image}>
              <span className={styles.lnformat}><MdInsertLink className={styles.icons}/></span>
              <span className={styles.lnformat}><MdOutlineAddComment className={styles.icons}/></span>
              <span className={styles.lnformat}><BiImageAlt className={styles.icons}/></span>
            </div>
            <div className={styles.lineformat}>
              <span className={styles.lnformat}><BiAlignLeft className={styles.icons}/><AiFillCaretDown className={styles.down}/></span>
              <span className={styles.lnformat}><MdFormatLineSpacing className={styles.icons}/></span>
              <span className={styles.lnformat}><MdChecklist className={styles.icons}/><AiFillCaretDown className={styles.down}/></span>
              <span className={styles.lnformat}><MdFormatListBulleted className={styles.icons}/><AiFillCaretDown className={styles.down}/></span>
              <span className={styles.lnformat}><MdFormatListNumbered className={styles.icons}/><AiFillCaretDown className={styles.down}/></span>
              <span className={styles.lnformat}><MdFormatIndentDecrease className={styles.icons}/></span>
              <span className={styles.lnformat}><MdFormatIndentIncrease className={styles.icons}/></span>
              <span className={styles.lnformat}><MdFormatClear className={styles.icons}/></span> 
            </div>
            <div className={styles.rightside}>
            <span><MdEdit className={styles.icons}/></span><span><AiFillCaretDown className={styles.down}/></span>
            </div>
            <IoIosArrowUp className={styles.icons}/>
        </div>



        <div className={styles.textareacontainer}>
            <textarea className={styles.inputfield} 
              contentEditable={true}
              ref={componentRef}
              value={text}
              onChange={handleTextChange} 
              style={{
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              transform: `scale(${zoomLevel / 100})`,
              }}>
            </textarea> 
        </div>
    </div>
  )
}

export default Word