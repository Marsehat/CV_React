import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.png';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Marcelo Barcelos
					</span>
					<p>Frontend Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					
					<a href='https://github.com/Marsehat' className='social_button' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-github grey-text text-darken-4 social_style' style= 'font-size : 24px;'></i>
					</a>
					<a href='https://www.linkedin.com/in/marcelo-de-oliveira-barcelos-082265247/' className='social_button' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-linkedin-in grey-text text-darken-4 social_style' style= 'font-size : 24px;'></i>
					</a>
				</div>
			</div>
		</div>
	);
}
