import techfuel from '../assets/techfuel.png'
import techspanner from '../assets/techspanner.png'

export const NavItems  = [
    { label : "Home", to: '/', id : 1 },
    { label : "Technology", to: 'technology', id : 2 },
    { label : "News",  to: 'news', id : 3 },
    { label : "Contact", to: 'contact', id : 4 }
]


export const TechItems = [
    { image : techfuel, text : '74%', title : 'savings on fuel cost'},
    { image : techspanner, text : '42%', title : 'savings on maintenance cost'}
]

export const Features = [
    { title : 'Seamless Transition', text : 'Maintaining most of the original features ensures a familiar driving experience, despite the significant differences in system specifications, eliminating the need for additional driving lessons.' },
    { title: 'Intuitive Controls', text : 'The dynamic and user-friendly infotainment system is strategically positioned to allow drivers to monitor and manage power efficiently, minimizing distractions from the steering wheel.'},
    { title : 'Smart Safeguards', text : 'The Control System features automatic safeguards against overheating and battery depletion. Additionally, it offers automatic torque and speed calibration for optimal performance on challenging terrains.'}
]
