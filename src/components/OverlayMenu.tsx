import React from 'react'
import { gsap } from "gsap";
import "./OverlayMenu.css";
import { XIcon } from '@heroicons/react/solid'
function OverlayMenu({isOpen, setIsMenuOpen}: {isOpen: Boolean, setIsMenuOpen: (isOpen: Boolean) => void}) {
    
    return (<div id="myNav" className={'overlay h-100' + (isOpen ? ' show-menu' : '')}>

            <XIcon className="closebtn text-yellow-400 h-10 w-10" onClick={() => setIsMenuOpen(false)}></XIcon>
    
            <div className="overlay-content overflow-x-hidden">
                <a href="#about-me" onClick={() => setIsMenuOpen(false)}>About & Resume</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#contact-me" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
            
    
        </div>);
    
}

export default OverlayMenu
