import React from 'react'
import BoardTeam from './BoardTeam'
import SoftwareTeam from './SoftwareTeam'

const TeamMembers = () => {
  return (
    <div className='flex flex-col gap-[48px] py-[40px] px-[16px] lg:p-[0] bg-white md:bg-transparent w-full'>
        <BoardTeam />
        <SoftwareTeam />
        <BoardTeam />
    </div>
  )
}

export default TeamMembers