import React, { Component } from 'react'
import BallPark from './Ballpark.js'
import styles from './BallparkList.scss'
const tempData = [
	{
		name: '잠실 야구장',
		homeTeam: ['두산 베어스', 'LG 트윈스'],
		location: '서울',
	},
	{
		name: '대구 삼성 라이온즈 파크',
		homeTeam: ['삼성 라이온즈'],
		location: '서울',
	},
	{
		name: '광주-기아 챔피언스 필드',
		homeTeam: ['KIA 타이거즈'],
		location: '서울',
	},
	{
		name: '인천 SK 행복드림구장',
		homeTeam: ['SK 와이번스'],
		location: '서울',
	},
	{
		name: '수원 kt 위즈 파크',
		homeTeam: ['kt 위즈'],
		location: '서울',
	},
	{
		name: '사직 야구장',
		homeTeam: ['롯데 자이언츠'],
		location: '서울',
	},
	{
		name: '고척스카이돔',
		homeTeam: ['넥센 히어로즈'],
		location: '서울',
	},
	{
		name: '한화생명 이글스 파크',
		homeTeam: ['한화 이글스'],
		location: '서울',
	},
	{
		name: '마산 야구장',
		homeTeam: ['NC 다이노스'],
		location: '서울',
	},
]

export default class BallparkList extends Component {
	render() {
		return (
			<div className={styles.ballparkList}>
				{tempData.map((obj, i) => {
					return <BallPark key={'ballpark' + i} data={obj} />
				})}
			</div>
		)
	}
}
