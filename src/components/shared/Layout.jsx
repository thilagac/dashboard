import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'
import Chart from '../Chart'

export default function Layout() {
	 
	return (
		<div className="h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1 h-screen w-screen max-sm:w-full ">
				<Header />
				<div className="flex-1 flex-row p-4 overflow-auto bg-slate-100 ">
					<Dashboard/>
				</div>
				
			</div>
		</div>
	)
}