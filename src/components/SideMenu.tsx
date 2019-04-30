import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as HomeIcon } from '../assets/img/HomeIcon.svg'
import { ReactComponent as TrendingIcon } from '../assets/img/TrendingIcon.svg'
import { ReactComponent as SubscriptionsIcon } from '../assets/img/SubscriptionsIcon.svg'

const Nav = styled.nav`
	flex: 1 0 250px;
	background-color: #f5f5f5;
`

const SideMenu = () => {
	return (
		<Nav>
			<div>
				<HomeIcon />
				<p>Home</p>
			</div>
			<div>
				<TrendingIcon />
				<p>Trending</p>
			</div>

			<div>
				<SubscriptionsIcon />
				<p>Subscriptions</p>
			</div>
		</Nav>
	)
}

export default SideMenu
