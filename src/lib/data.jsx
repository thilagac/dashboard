
import { AiOutlinePieChart } from "react-icons/ai";

import { FaRegEye } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { CgShoppingBag } from "react-icons/cg";
import { FiDownload,FiShoppingCart } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbInvoice } from "react-icons/tb";




import { FiUser } from "react-icons/fi";
import { BsFileRichtext } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { LuLayoutTemplate } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu";
import img1 from './brand1.png'
import img2 from './brand 1.jpg'
import img3 from './brand3.png'
import img4 from './brand4.png'
import img5 from './brand5.png'
import user1 from './1.png'
import user2 from './2.png'
import user3 from './3.png'
import user4 from './4.png'
import user5 from './user-02.png'
import map1 from './map1.png'
import map2 from './map2.png'
import { CiLogin } from "react-icons/ci";
import map3 from './map3.png'
import map4 from './map4.png'
import map5 from './map5.png'
export const DASHBOARD_SIDEBAR_LINKS = [
	
{
		key: 'Calendar',
		label: 'Calendar',
		path: '/Calendar',
		icon: <IoCalendarOutline  />
	},
	{
		key: 'Profile',
		label: 'Profile',
		path: '/Profile',
		icon: <FiUser />
	},
	
	
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'Message',
		label: 'Message',
		path: '/Message',
		icon: <MdOutlineEmail/>
	},
	{
		key: 'Inbox',
		label: 'Inbox',
		path: '/Inbox',
		icon: <FiDownload  />
	},
	{
		key: 'InVoice',
		label: 'InVoice',
		path: '/InVoice',
		icon: <TbInvoice />
	},
	
	
]
export const DASHBOARD_SIDEBAR_BOTTOM = [
	
	{
		key: 'UI Elements',
		label: 'UI Elements',
		path: '/UI Elements',
		icon: <LuLayoutTemplate  />
	},
	{
		key: 'Authentication',
		label: 'Authentication',
		path: '/Authentication',
		icon: <LuLogIn />
	},
	
	
]

export const DashboardView = [
	{
		key: 'Message',
		label: 'Message',
	    value: '$3.456 k',
		valueName :'Total view',
		icon: <FaRegEye />
	},
	{
		key: 'Message',
		label: 'Message',
	    value: '$3.456 k',
		valueName :'Total view',
		icon: <FiShoppingCart />
	},
	{
		key: 'Message',
		label: 'Message',
	    value: '$3.456 k',
		valueName :'Total view',
		icon: <CgShoppingBag />
	},
	{
		key: 'Message',
		label: 'Message',
	    value: '$3.456 k',
		valueName :'Total view',
		icon: <HiOutlineUsers />
	}
	
	
]
export const TableData = [
	
	{
		key: 'Google',
		Source: 'Google',
	    Img:img2 ,
		VISITORS :'3.5K',
		REVENUES: '$5,768',
		SALES:'590',
		CONVERSION:'4.8%'
	},
	{
		key: 'Twitter',
		Source: 'Twitter',
	    Img: img1,
		VISITORS :'2.2K',
		REVENUES: '$4,635',
		SALES:'467',
		CONVERSION:'4.3%'
	},
	{
		key: 'Github',
		Source: 'Github',
	    Img: img3,
		VISITORS :'3.5K',
		REVENUES: '$5,768',
		SALES:'590',
		CONVERSION:'4.8%'
	},
	{
		key: 'Vimeo',
		Source: 'Vimeo',
	    Img: img4,
		VISITORS :'3.5K',
		REVENUES: '$5,768',
		SALES:'590',
		CONVERSION:'4.8%'
	},
	{
		key: 'Facebook',
		Source: 'Facebook',
	    Img: img5,
		VISITORS :'3.5K',
		REVENUES: '$5,768',
		SALES:'590',
		CONVERSION:'4.8%'
	}

	
	
]

export const ChartsData = [
	
	{
		key: 'Google',
		user: 'Devid helio',
	    Img:user1 ,
		message :'Hello,how are you?',
		time: '. 12 min',
		
	},
	{
		key: 'Google',
		user: 'Devid helio',
	    Img:user2 ,
		message :'Hello,how are you?',
		time: '. 5.54 PM',
		
	},
	{
		key: 'Google',
		user: 'Devid helio',
	    Img:user3 ,
		message :'Hello,how are you?',
		time: '. 10.12 PM',
	},
	{
		key: 'Google',
		user: 'Devid helio',
	    Img:user4 ,
		message :'Hello,how are you?',
		time: '. Sun',
	},
	{
		key: 'Google',
		user: 'Devid helio',
	    Img:user5 ,
		message :'Hello,how are you?',
		time: '. Oct 23',
	},
	{
		key: 'Google',
		user: 'Devid helio',
	    Img:user3 ,
		message :'Hello,how are you?',
		time: '. Sep 20',
	}

	
	
]
export const Chart=[
	{key: 'Charts',
	name: 'Charts',
	path: '/Charts',
	icon: 'Pro'

	},
	{key: 'Charts',
	name: 'Charts',
	path: '/Charts',
	icon: 'Pro'

	}  
]

export const MapData = [
	
	{
		key: 'Google',
		Name: 'Charlie Donin',
	    Img:map1 ,
		email :'wdavis@aol.com',
		Project: '25 Dec 2024 - 28 Dec 2024',
		Duration:'3 days',
		Status:'active'
	},
	{
		key: 'Makenna Carder',
		Name: 'Makenna Carder',
	    Img: map2,
		email :'ltorres@aol.com',
		Project: '25 Dec 2024 - 28 Dec 2024',
		Duration:'3 days',
		Status:'active'
	},
	{
		key: 'Talan Dokidis',
		Name: 'Talan Dokidis',
	    Img: map3,
		email :'rtaylor@aol.com',
		Project: '25 Dec 2024 - 28 Dec 2024',
		Duration:'3 days',
		Status:'active'
	},
	{
		key: 'Cheyenne Levin',
		Name: 'Cheyenne Levin',
	    Img: map4,
		email :'ebrown@aol.com',
		Project: '25 Dec 2024 - 28 Dec 2024',
		Duration:'3 days',
		Status:'active'
	},
	{
		key: 'James Aminoff',
		Name: 'James Aminoff',
	    Img: map5,
		email :'slee@aol.com',
		Project: '25 Dec 2024 - 28 Dec 2024',
		Duration:'3 days',
		Status:'active'
	}

	
	
]