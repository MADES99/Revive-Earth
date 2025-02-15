import React from 'react'
import TeamHero from './TeamHero'
import TeamMembers from './TeamMembers'
import ShowButton from './ShowButton'

const TeamPage = () => {
  return (
    <div className='m-0 lg:py-[80px] lg:pr-[78px] lg:pl-[80px] bg-[#EEF1EA] py-[57px] px-[23px]'>
        <div className=' lg:m-0 flex flex-col items-center  gap-[60px] '>
            <TeamHero />

            <TeamMembers />

            <ShowButton />
        </div>

    </div>
  )
}

export default TeamPage