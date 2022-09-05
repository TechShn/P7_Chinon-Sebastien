import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return (
        <div className='block-socialMedia'>
            <h3 className="title-socialMedia">Social Média</h3>
            <ul className='list-socialMedia'>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /> Yotube </a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} />Twitter </a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} />Github </a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} />Instagram </a></li>
            </ul>
        </div>
    );
};

export default SocialMedia;