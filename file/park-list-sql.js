// 야구장 리스트 넣기
db.getCollection('parks').insertMany([
{
	name: '잠실 야구장',
	homeTeam: ['두산 베어스', 'LG 트윈스'],
	location: {
		name: '잠실 (서울)',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '수원 kt 위즈파크',
	homeTeam: ['kt 위즈'],
	location: {
		name: '수원',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '고척 스카이돔',
	homeTeam: ['넥센 히어로즈'],
	location: {
		name: '고척 (서울)',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '한화생명 이글스 파크',
	homeTeam: ['한화 이글스'],
	location: {
		name: '대전',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '인천 SK 행복드림구장',
	homeTeam: ['SK 와이번스'],
	location: {
		name: '인천',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '광주-기아 챔피언스 필드',
	homeTeam: ['KIA 타이거즈'],
	location: {
		name: '광주',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '대구 삼성 라이온즈 파크',
	homeTeam: ['삼성 라이온즈'],
	location: {
		name: '대구',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '마산 야구장',
	homeTeam: ['NC 다이노스'],
	location: {
		name: '마산',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
{
	name: '사직 야구장',
	homeTeam: ['롯데 자이언츠'],
	location: {
		name: '부산',
		loc: {
			type: null,
			coordinates: [0, 0],
		},
	}
},
])