import { Avatar, Dropdown } from 'flowbite-react';
import userPic from '../../../assets/images/Mohamed-ncib.jpg';
import AdminInfo from "../../../assets/js/adminInfo";

export default function UserDropdown() {
  return (
    <Dropdown
      inline
      className='bg-[#D9D9D9]/[0.6] p-1 divide-y-2 '
      label={<Avatar alt="User settings" img={userPic} style={{width:'40px'}} rounded/>}
      rounded
    >
      <Dropdown.Header>
        <span className="block text-sm text-[#11364D] font-semibold">
        {AdminInfo[0]}
        </span>
        <span className="block truncate text-sm font-medium tracking-wider text-[#11364D]">
          {AdminInfo[1]}
        </span>
      </Dropdown.Header>
      <Dropdown.Item
      className='hover:bg-gray-200 hover:text-[#11364D]'
      >
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item
      className='hover:bg-gray-200 hover:text-[#11364D]'
      >
        Settings
      </Dropdown.Item>
      <Dropdown.Item
      className='hover:bg-gray-200 hover:text-[#11364D]'
      >
        Earnings
      </Dropdown.Item>
     
      <Dropdown.Item
      className='hover:bg-gray-200 hover:text-[#11364D]'
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  )
}


