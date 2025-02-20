import techfuel from '../assets/techfuel.png'
import techspanner from '../assets/techspanner.png'
import fuel from '../News/fuel.png'
import global from '../News/global.png'
import Innov from '../News/Innov.png'
import kekeNews from '../assets/kekeNews.png'
import workers from '../assets/workers.png'
import tricycleNews from '../assets/tricycleNews.png'
import royal from '../assets/royal.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import Cleaner from '../assets/Cleaner.svg'
import Cheaper from '../assets/Cheaper.svg'
import Convenient from '../assets/Convenient.svg'
import Jocelyn from '../assets/Jocelyn.png'
import Jordyn from '../assets/Jordyn.png'
import Dias from '../assets/Dias.png'
import Levin from '../assets/Levin.png'
import Lindsey from '../assets/Lindsey.png'
import Martin from '../assets/Martin.png'
import Arcand from '../assets/Arcand.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import Enquiry from "../assets/Enquiry.svg";
import Glyph from "../assets/Glyph.svg";
import Car from "../assets/Car.svg";


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

    { image : Innov, title : 'Innov8 Boost Employment', text: 'Isreali Embassy, Innov8 Boost Employment,  Bolster Nigeria’s Economic Prosperity Through i-FAIR...' },

    { image : fuel, title : 'EV100 Pledge', text : 'More than 110 companies have signed up to the EV100 pledge, committing to fully zero-emission vehicle fleets by 2030...'},

    { image : global, title : 'Global Market', text : 'Vehicle manufacturers representing more than 30% of the global market now have commitments to phase out fossil-fueled...'},

    { image : fuel, title : 'COP26 Declaration', text : 'The COP26 Declaration on Accelerating the Transition to 100% Zero-Emission Cars and Vans brought together over 35 countries, 6...'},

    { image : Innov, title : 'Innov8 Boost Employment', text: 'Isreali Embassy, Innov8 Boost Employment,  Bolster Nigeria’s Economic Prosperity Through i-FAIR...' },

    { image : fuel, title : 'EV100 Pledge', text : 'More than 110 companies have signed up to the EV100 pledge, committing to fully zero-emission vehicle fleets by 2030...'},

    { image : global, title : 'Global Market', text : 'Vehicle manufacturers representing more than 30% of the global market now have commitments to phase out fossil-fueled...'},

    { image : fuel, title : 'COP26 Declaration', text : 'The COP26 Declaration on Accelerating the Transition to 100% Zero-Emission Cars and Vans brought together over 35 countries, 6...'},
]

export const ContactPlaceholder = [
    {id : 1, text : 'Your Name'},
    { id : 2, text : 'Your Email'},
    { id : 3, text : 'Your Phone Number'}
]

export const Socials = [
    {   id : 1, 
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.9247 6.35997C17.7897 1.49997 11.3697 0.0599657 6.40468 3.07497C1.55968 6.08997 -0.000315666 12.66 3.13468 17.505L3.38968 17.895L2.33968 21.825L6.26968 20.775L6.65968 21.03C8.35468 21.945 10.1997 22.47 12.0297 22.47C13.9947 22.47 15.9597 21.945 17.6547 20.895C22.4997 17.745 23.9397 11.31 20.9247 6.32997V6.35997ZM18.1797 16.47C17.6547 17.25 16.9947 17.775 16.0797 17.91C15.5547 17.91 14.8947 18.165 12.2847 17.13C10.0647 16.08 8.21968 14.37 6.91468 12.405C6.13468 11.49 5.72968 10.305 5.60968 9.11997C5.60968 8.06997 5.99968 7.15497 6.65968 6.49497C6.91468 6.23997 7.18468 6.10497 7.43968 6.10497H8.09968C8.35468 6.10497 8.62468 6.10497 8.75968 6.62997C9.01468 7.28997 9.67468 8.86497 9.67468 8.99997C9.80968 9.13497 9.74968 10.14 9.14968 10.71C8.81968 11.085 8.75968 11.1 8.89468 11.37C9.41968 12.15 10.0797 12.945 10.7247 13.605C11.5047 14.265 12.2997 14.79 13.2147 15.18C13.4697 15.315 13.7397 15.315 13.8747 15.045C14.0097 14.79 14.6547 14.13 14.9247 13.86C15.1797 13.605 15.3147 13.605 15.5847 13.725L17.6847 14.775C17.9397 14.91 18.2097 15.03 18.3447 15.165C18.4797 15.555 18.4797 16.08 18.2097 16.47H18.1797Z" fill="#83BC25"/>
                </svg>
  },

  {
    id : 2,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#83BC25"/>
            </svg>
  },

  {
    id : 3,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13.0276 2C14.1526 2.003 14.7236 2.009 15.2166 2.023L15.4106 2.03C15.6346 2.038 15.8556 2.048 16.1226 2.06C17.1866 2.11 17.9126 2.278 18.5496 2.525C19.2096 2.779 19.7656 3.123 20.3216 3.678C20.8301 4.1779 21.2236 4.78259 21.4746 5.45C21.7216 6.087 21.8896 6.813 21.9396 7.878C21.9516 8.144 21.9616 8.365 21.9696 8.59L21.9756 8.784C21.9906 9.276 21.9966 9.847 21.9986 10.972L21.9996 11.718V13.028C22.0021 13.7574 21.9944 14.4868 21.9766 15.216L21.9706 15.41C21.9626 15.635 21.9526 15.856 21.9406 16.122C21.8906 17.187 21.7206 17.912 21.4746 18.55C21.2243 19.2178 20.8307 19.8226 20.3216 20.322C19.8216 20.8303 19.2169 21.2238 18.5496 21.475C17.9126 21.722 17.1866 21.89 16.1226 21.94C15.8853 21.9512 15.648 21.9612 15.4106 21.97L15.2166 21.976C14.7236 21.99 14.1526 21.997 13.0276 21.999L12.2816 22H10.9726C10.2429 22.0025 9.51312 21.9949 8.7836 21.977L8.5896 21.971C8.35221 21.962 8.11487 21.9517 7.8776 21.94C6.8136 21.89 6.0876 21.722 5.4496 21.475C4.78227 21.2244 4.17782 20.8308 3.6786 20.322C3.16965 19.8223 2.77582 19.2176 2.5246 18.55C2.2776 17.913 2.1096 17.187 2.0596 16.122C2.04846 15.8847 2.03846 15.6474 2.0296 15.41L2.0246 15.216C2.00617 14.4868 1.99784 13.7574 1.9996 13.028V10.972C1.99681 10.2426 2.00414 9.5132 2.0216 8.784L2.0286 8.59C2.0366 8.365 2.0466 8.144 2.0586 7.878C2.1086 6.813 2.2766 6.088 2.5236 5.45C2.77471 4.7819 3.16932 4.17702 3.6796 3.678C4.17869 3.16947 4.78274 2.77599 5.4496 2.525C6.0876 2.278 6.8126 2.11 7.8776 2.06C8.1436 2.048 8.3656 2.038 8.5896 2.03L8.7836 2.024C9.51279 2.00623 10.2422 1.99857 10.9716 2.001L13.0276 2ZM11.9996 7C10.6735 7 9.40175 7.52678 8.46407 8.46447C7.52638 9.40215 6.9996 10.6739 6.9996 12C6.9996 13.3261 7.52638 14.5979 8.46407 15.5355C9.40175 16.4732 10.6735 17 11.9996 17C13.3257 17 14.5975 16.4732 15.5351 15.5355C16.4728 14.5979 16.9996 13.3261 16.9996 12C16.9996 10.6739 16.4728 9.40215 15.5351 8.46447C14.5975 7.52678 13.3257 7 11.9996 7ZM11.9996 9C12.3936 8.99993 12.7837 9.07747 13.1477 9.22817C13.5117 9.37887 13.8424 9.5998 14.1211 9.87833C14.3997 10.1569 14.6207 10.4875 14.7715 10.8515C14.9224 11.2154 15 11.6055 15.0001 11.9995C15.0002 12.3935 14.9226 12.7836 14.7719 13.1476C14.6212 13.5116 14.4003 13.8423 14.1218 14.121C13.8432 14.3996 13.5126 14.6206 13.1486 14.7714C12.7847 14.9223 12.3946 14.9999 12.0006 15C11.205 15 10.4419 14.6839 9.87928 14.1213C9.31667 13.5587 9.0006 12.7956 9.0006 12C9.0006 11.2044 9.31667 10.4413 9.87928 9.87868C10.4419 9.31607 11.205 9 12.0006 9M17.2506 5.5C16.9191 5.5 16.6011 5.6317 16.3667 5.86612C16.1323 6.10054 16.0006 6.41848 16.0006 6.75C16.0006 7.08152 16.1323 7.39946 16.3667 7.63388C16.6011 7.8683 16.9191 8 17.2506 8C17.5821 8 17.9001 7.8683 18.1345 7.63388C18.3689 7.39946 18.5006 7.08152 18.5006 6.75C18.5006 6.41848 18.3689 6.10054 18.1345 5.86612C17.9001 5.6317 17.5821 5.5 17.2506 5.5Z" fill="#83BC25"/>
  </svg>
  },

  {
    id : 4,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_363_1105)">
                <path d="M7.539 22.5001C16.596 22.5001 21.5505 14.9956 21.5505 8.49906C21.5525 8.28806 21.5495 8.07706 21.5415 7.86606C22.5058 7.16743 23.3382 6.30299 24 5.31306C23.0987 5.70947 22.144 5.97127 21.1665 6.09006C22.1964 5.47462 22.9677 4.50608 23.337 3.36456C22.3699 3.93864 21.3108 4.34108 20.2065 4.55406C19.4643 3.7636 18.4821 3.23994 17.4121 3.0642C16.3421 2.88846 15.2441 3.07045 14.288 3.58197C13.3319 4.09349 12.5712 4.90601 12.1237 5.89365C11.6761 6.8813 11.5668 7.98896 11.8125 9.04506C9.85452 8.94735 7.93897 8.43893 6.19024 7.55281C4.44152 6.66669 2.89871 5.42268 1.662 3.90156C1.03437 4.98628 0.842925 6.26914 1.12651 7.48984C1.4101 8.71053 2.14747 9.77762 3.189 10.4746C2.40811 10.4493 1.64429 10.2396 0.96 9.86256V9.93006C0.961909 11.0661 1.35573 12.1668 2.07499 13.0462C2.79424 13.9255 3.79488 14.5299 4.908 14.7571C4.48541 14.8735 4.04885 14.9316 3.6105 14.9296C3.30138 14.9328 2.99275 14.9041 2.6895 14.8441C3.00359 15.8225 3.61616 16.678 4.44125 17.2906C5.26634 17.9032 6.26253 18.242 7.29 18.2596C5.54415 19.629 3.38887 20.3723 1.17 20.3701C0.778948 20.373 0.388119 20.3505 0 20.3026C2.25213 21.7388 4.8679 22.5012 7.539 22.5001Z" fill="#83BC25"/>
                </g>
                <defs>
                <clipPath id="clip0_363_1105">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
  },

  {
    id : 5,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.244 4C12.778 4.003 14.114 4.016 15.534 4.073L16.038 4.095C17.467 4.162 18.895 4.278 19.604 4.475C20.549 4.741 21.291 5.515 21.542 6.497C21.942 8.057 21.992 11.099 21.998 11.836L21.999 11.988V12.162C21.992 12.899 21.942 15.942 21.542 17.501C21.288 18.486 20.545 19.261 19.604 19.523C18.895 19.72 17.467 19.836 16.038 19.903L15.534 19.926C14.114 19.982 12.778 19.996 12.244 19.998L12.009 19.999H11.754C10.624 19.992 5.898 19.941 4.394 19.523C3.45 19.257 2.707 18.483 2.456 17.501C2.056 15.941 2.006 12.899 2 12.162V11.836C2.006 11.099 2.056 8.056 2.456 6.497C2.71 5.512 3.453 4.737 4.395 4.476C5.898 4.057 10.625 4.006 11.755 4H12.244ZM9.999 8.5V15.5L15.999 12L9.999 8.5Z" fill="#83BC25"/>
            </svg>
  },

  {
    id : 6,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_363_1111)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18ZM8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17C8.26522 17 8.51957 16.8946 8.70711 16.7071C8.89464 16.5196 9 16.2652 9 16V11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10ZM11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17C11.2652 17 11.5196 16.8946 11.7071 16.7071C11.8946 16.5196 12 16.2652 12 16V12.34C12.305 11.996 12.82 11.592 13.393 11.347C13.726 11.205 14.227 11.147 14.575 11.257C14.6904 11.2863 14.7933 11.3523 14.868 11.445C14.92 11.515 15 11.671 15 12V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V12C17 11.33 16.83 10.734 16.476 10.256C16.1503 9.82256 15.6944 9.50472 15.175 9.349C14.273 9.066 13.274 9.223 12.607 9.509C12.3933 9.60046 12.1852 9.70465 11.984 9.821C11.9421 9.59059 11.8206 9.3822 11.6408 9.23216C11.461 9.08213 11.2342 8.99996 11 9ZM8 7C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7Z" fill="#83BC25"/>
                </g>
                <defs>
                <clipPath id="clip0_363_1111">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
  },

  {
    id : 7,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_363_1111)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18ZM8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17C8.26522 17 8.51957 16.8946 8.70711 16.7071C8.89464 16.5196 9 16.2652 9 16V11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10ZM11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17C11.2652 17 11.5196 16.8946 11.7071 16.7071C11.8946 16.5196 12 16.2652 12 16V12.34C12.305 11.996 12.82 11.592 13.393 11.347C13.726 11.205 14.227 11.147 14.575 11.257C14.6904 11.2863 14.7933 11.3523 14.868 11.445C14.92 11.515 15 11.671 15 12V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V12C17 11.33 16.83 10.734 16.476 10.256C16.1503 9.82256 15.6944 9.50472 15.175 9.349C14.273 9.066 13.274 9.223 12.607 9.509C12.3933 9.60046 12.1852 9.70465 11.984 9.821C11.9421 9.59059 11.8206 9.3822 11.6408 9.23216C11.461 9.08213 11.2342 8.99996 11 9ZM8 7C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7Z" fill="#83BC25"/>
                </g>
                <defs>
                <clipPath id="clip0_363_1111">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
  },

  {
    id : 8,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.3284 22.5001C17.4134 22.5001 16.1281 22.1691 14.2034 21.0938C11.8629 19.7813 10.0526 18.5696 7.72481 16.2479C5.48044 14.0049 4.38825 12.5527 2.85965 9.77115C1.13278 6.63052 1.42715 4.98427 1.75622 4.28068C2.14809 3.43974 2.72653 2.93677 3.47419 2.43755C3.89885 2.15932 4.34825 1.92081 4.81669 1.72505C4.86356 1.7049 4.90715 1.68568 4.94606 1.66833C5.17809 1.5638 5.52965 1.40583 5.97497 1.57458C6.27215 1.68615 6.53747 1.91443 6.95278 2.32458C7.8045 3.16458 8.9684 5.03537 9.39778 5.95412C9.68606 6.57333 9.87684 6.98208 9.87731 7.44052C9.87731 7.97724 9.60731 8.39115 9.27965 8.83787C9.21825 8.92177 9.15731 9.00193 9.09825 9.07974C8.74153 9.54849 8.66325 9.68396 8.71481 9.92583C8.81934 10.4119 9.59887 11.859 10.88 13.1372C12.1611 14.4155 13.5664 15.1458 14.0543 15.2499C14.3065 15.3038 14.4448 15.2222 14.9286 14.8529C14.9979 14.7999 15.0692 14.7451 15.1437 14.6902C15.6434 14.3185 16.0381 14.0555 16.5622 14.0555H16.565C17.0211 14.0555 17.4115 14.2533 18.0584 14.5796C18.9022 15.0052 20.8292 16.1541 21.6743 17.0068C22.0854 17.4211 22.3147 17.6855 22.4267 17.9822C22.5954 18.429 22.4365 18.7791 22.3329 19.0135C22.3156 19.0524 22.2964 19.0951 22.2762 19.1424C22.0789 19.61 21.839 20.0585 21.5595 20.4821C21.0612 21.2274 20.5564 21.8044 19.7136 22.1968C19.2808 22.4015 18.8071 22.5052 18.3284 22.5001Z" fill="#83BC25"/>
            </svg>
  }
]

export const Links = [
    {
        id : 1,
        link : 'Home'
    },

    {
        id : 2,
        link : 'Why Us'
    },

    {
        id : 3,
        link : 'Features'
    }
]

export const CompanyLinks = [
    {
        id : 1, 
        company : 'Our Team'
    },

    {
        id : 2,
        company : 'Our Stories'
    },

    {
        id : 3,
        company : 'Contact Us'
    }
]

export const NewsSocials = [
    { img : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="white"/>
  </svg> },

  {
    img : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_104_1277)">
      <path d="M7.539 22.5001C16.596 22.5001 21.5505 14.9956 21.5505 8.49906C21.5525 8.28806 21.5495 8.07706 21.5415 7.86606C22.5058 7.16743 23.3382 6.30299 24 5.31306C23.0987 5.70947 22.144 5.97127 21.1665 6.09006C22.1964 5.47462 22.9677 4.50608 23.337 3.36456C22.3699 3.93864 21.3108 4.34108 20.2065 4.55406C19.4643 3.7636 18.4821 3.23994 17.4121 3.0642C16.3421 2.88846 15.2441 3.07045 14.288 3.58197C13.3319 4.09349 12.5712 4.90601 12.1237 5.89365C11.6761 6.8813 11.5668 7.98896 11.8125 9.04506C9.85452 8.94735 7.93897 8.43893 6.19024 7.55281C4.44152 6.66669 2.89871 5.42268 1.662 3.90156C1.03437 4.98628 0.842925 6.26914 1.12651 7.48984C1.4101 8.71053 2.14747 9.77762 3.189 10.4746C2.40811 10.4493 1.64429 10.2396 0.96 9.86256V9.93006C0.961909 11.0661 1.35573 12.1668 2.07499 13.0462C2.79424 13.9255 3.79488 14.5299 4.908 14.7571C4.48541 14.8735 4.04885 14.9316 3.6105 14.9296C3.30138 14.9328 2.99275 14.9041 2.6895 14.8441C3.00359 15.8225 3.61616 16.678 4.44125 17.2906C5.26634 17.9032 6.26253 18.242 7.29 18.2596C5.54415 19.629 3.38887 20.3723 1.17 20.3701C0.778948 20.373 0.388119 20.3505 0 20.3026C2.25213 21.7388 4.8679 22.5012 7.539 22.5001Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_104_1277">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  },

  {
    img : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_104_1283)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18ZM8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17C8.26522 17 8.51957 16.8946 8.70711 16.7071C8.89464 16.5196 9 16.2652 9 16V11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10ZM11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17C11.2652 17 11.5196 16.8946 11.7071 16.7071C11.8946 16.5196 12 16.2652 12 16V12.34C12.305 11.996 12.82 11.592 13.393 11.347C13.726 11.205 14.227 11.147 14.575 11.257C14.6904 11.2863 14.7933 11.3523 14.868 11.445C14.92 11.515 15 11.671 15 12V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V12C17 11.33 16.83 10.734 16.476 10.256C16.1503 9.82256 15.6944 9.50472 15.175 9.349C14.273 9.066 13.274 9.223 12.607 9.509C12.3933 9.60046 12.1852 9.70465 11.984 9.821C11.9421 9.59059 11.8206 9.3822 11.6408 9.23216C11.461 9.08213 11.2342 8.99996 11 9ZM8 7C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_104_1283">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  },

  {
    img : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.615 19C4.155 19 3.771 18.846 3.463 18.538C3.15433 18.2293 3 17.845 3 17.385V6.615C3 6.155 3.15433 5.771 3.463 5.463C3.771 5.15433 4.155 5 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.8457 5.771 21 6.155 21 6.615V17.385C21 17.845 20.846 18.229 20.538 18.537C20.2293 18.8457 19.845 19 19.385 19H4.615ZM12 12.115L20 6.885L19.692 6L12 11L4.308 6L4 6.885L12 12.115Z" fill="white"/>
  </svg>
  }
]

export const Products = [
    {
        id : 1,
        image : kekeNews,

    },

    {
        id : 2,
        image: workers
    },

    {
        id : 3,
        image : tricycleNews
    }
]

export const PartnerLogos = [
  { id : 1, logo : royal },
  { id : 2, logo : partner2},
  { id : 3, logo : partner3},
  { id : 4, logo : partner4}
]

export const KitsFeatures = [
  { title : 'Cost-efficiency with faster time to market', text : 'Get up and running quickly with a fully functioning auto parts storefront and mobile experience. Transparent pricing and no hidden fees mean no surprises. You get the freedom to build the solution you want at a budget that’s comfortable for you.'},

  { title : 'Made for the complexity of automotive', text : 'No matter your automotive business model, industry, or vertical, we have you covered. Our automotive innovative parts solutions are flexible enough to work with the parameters of your business, partners, customers, and supply chain.'},

  { title : '24/7 customer support', text : 'Forget about hard-coded, fragmented or one-size-fits-all solutions for complex building use cases. Our key advantage is at the core of the product: the architecture, technology and flexibility to accommodate, grow and scale your business.'}
]

export const ElectricFeatures = [
  {
    id : 1,
    title : 'Indigenous Technology',
    text : 'We have a resilient team that is well versed in the area of electric mobility and is obsessed with changing the status quo of our clime using technology.'
  },

  {
    id : 2,
    title : 'Smart Technology',
    text : 'Our vehicles incorporate smart technologies for driver and road safety, such as wireless battery monitor, and GPS connectivity in demand.The regenerative braking system maximizes vehicle momentum to send power back to the battery instead of wasting it as heat in the brake pads. '
  },

  {
    id : 3,
    title : 'Robustness and efficiency',
    text : 'Our swapping network technology ensures that you never really run out of power while in motion and up to 95% efficiency is achieved by our vehicles while still delivering the desired performance in terms of speed.'
  }
]

export const VehiclesFeatures = [
  {
    img : Cleaner,
    title : 'Cleaner',
    text : 'Electric Vehicles drive on Electricity which can be gotten from renewable and sustainable sources like Solar, Hydrogen Fuel, biogas, wind, etc. If only 40% of automobiles can run on electricity, it cuts down the global climate change menace by 11.6%.  According to UNEP data, 14 million used vehicles were shipped out of European Union, Japan, and the United States between 2015 and 2018 alone, and 90% of the receiving regions have weak/no climate change regulation policies.'
  },

  {
    img : Cheaper,
    title : 'Cheaper',
    text : 'The operational cost of a vehicle is cut by 66.7%, and the maintenance cost by 90% if it is powered by electricity. This presents a groundbreaking opportunity for commercial drivers to make more money. Merchants as well can have a better value for their investments in the transport business.'
  },

  {
    img : Convenient,
    title : 'Convenient',
    text : 'Electric vehicles are easy, more convenient, and safer to drive. They are far more efficient, and the drivetrain is more effective to accommodate low losses, greater performance, and more responsiveness. The future of driving lies with electric vehicles because it makes the implementation of modern technologies such as AI, and machine learning extremely easy on the vehicle.'
  }
]

export const BoardMembers = [
  {
      img : Jocelyn,
      name : 'Jocelyn Schleifer',
      title : 'Founder/CEO',
  },

  {
    img : Martin,
    name : 'Martin Donin',
    title : 'Senior Program Manager',
  },

  {
    img : Jordyn,
    name : 'Jordyn Septimus',
    title : 'Senior Associate', 
  },

  {
    img : Arcand,
    name : 'Leo Arcand',
    title : 'Co-Founder/CTO', 
  }
]

export const SoftwareMembers = [
  {
    img : Levin,
    name : 'Marilyn Levin',
  },

  {
    img : Lindsey,
    name : 'Lindsey Dokidis',
  },

  {
    img : Dias,
    name : 'Hanna Dias',
  },

  {
    img : Jordyn,
    name : 'Ryan Gouse'
  }
]

export const TeamSocials = [
  {
    id : 1,
    media : facebook
  },

  {
    id : 2,
    media : instagram
  },

  {
    id : 3,
    media : twitter
  }
]

export const CategoryData = [
  {
    id: 1,
    img: Enquiry,
    title: "General Enquiry",
    isCategorised : true,
  },

  {
    id: 2,
    img: Glyph,
    title: "Buy Conversion Kit",
    isCategorised : false,
  },

  {
    id: 3,
    img: Car,
    title: "Buy Vehicles",
    isCategorised : false,
  },
];