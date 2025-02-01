import techfuel from '../assets/techfuel.png'
import techspanner from '../assets/techspanner.png'
import fuel from '../News/fuel.png'
import global from '../News/global.png'
import Innov from '../News/Innov.png'

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

export const ConversionKits = [
    { title : '1', text : 'Request a Quote', content : 'Fill out our online form to receive a personalized quote based on your vehicle', id : 1},
    { title : '2', text : 'Make Payment', content : 'We accept various payment methods for your convenience.', id : 2},
    { title : '3', text : 'Installation Appointment', content : 'Schedule an installation appointment with our certified technicians', id : 3}
]

export const StoriesKits = [
    { image : Innov, title : 'Innov8 Boost Employment', text: 'Isreali Embassy, Innov8 Boost Employment,  Bolster Nigeria’s Economic Prosperity Through i-FAIR...' },

    { image : fuel, title : 'EV100 Pledge', text : 'More than 110 companies have signed up to the EV100 pledge, committing to fully zero-emission vehicle fleets by 2030...'},

    { image : global, title : 'Global Market', text : 'Vehicle manufacturers representing more than 30% of the global market now have commitments to phase out fossil-fueled...'},

    { image : fuel, title : 'COP26 Declaration', text : 'The COP26 Declaration on Accelerating the Transition to 100% Zero-Emission Cars and Vans brought together over 35 countries, 6...'},

    
]