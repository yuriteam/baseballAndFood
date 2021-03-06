// 음식점 넣기
db.getCollection('stores').insertMany([
	{
		name: '김판조닭강정',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '서울 송파구 석촌호수로12길 21',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-421-4792',
		tags: [],
		orderable: true,
	},
	{
		name: '솜리치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '서울 송파구 백제고분로9길 17',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-412-9292',
		tags: [],
		orderable: true,
	},
	{
		name: '한앤둘치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '서울 송파구 올림픽로 25',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: null,
		tags: [],
		orderable: true,
	},
	{
		name: '통밥',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '서울 송파구 올림픽로 25',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: null,
		tags: [],
		orderable: true,
	},
	{
		name: '신천돼지',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '서울 송파구 백제고분로9길 24',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-414-3008',
		tags: [],
		orderable: true,
	},
	{
		name: '철판구이300도씨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '서울 송파구 백제고분로7길 28-17',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-423-5352',
		tags: [],
		orderable: true,
	},
	{
		name: '카마족발',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '서울 송파구 올림픽로12길 4-25',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-422-3219',
		tags: [],
		orderable: true,
	},
	{
		name: '장원보쌈',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '서울 송파구 백제고분로7길 46',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-423-8555',
		tags: [],
		orderable: true,
	},
	{
		name: '썸타는족발',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '서울 송파구 백제고분로18길 6',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-420-4380',
		tags: [],
		orderable: true,
	},
	{
		name: '칼라분식',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '서울 송파구 석촌호수로12길 3',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '010-7358-1172',
		tags: [],
		orderable: true,
	},
	{
		name: '파오파오',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '서울 송파구 석촌호수로12길 22',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-412-9198',
		tags: [],
		orderable: true,
	},
	{
		name: '홍코너',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '서울 송파구 석촌호수로12길 23',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-422-0124',
		tags: [],
		orderable: true,
	},
	{
		name: '피자 아이코닉',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '서울 강남구 봉은사로114길 42',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-555-8843',
		tags: [],
		orderable: true,
	},
	{
		name: '미스터피자',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '서울 송파구 올림픽로12길 4',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-422-8554',
		tags: [],
		orderable: true,
	},
	{
		name: '도미노피자',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514d'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '서울 송파구 올림픽로 25',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-1577-3082',
		tags: [],
		orderable: true,
	},

	{
		name: '용성통닭',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '서울 송파구 석촌호수로12길 21',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '02-421-4792',
		tags: [],
		orderable: true,
	},
	{
		name: '이공치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '경기 수원시 장안구 영화로 97',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '070-5022-2372',
		tags: [],
		orderable: true,
	},
	{
		name: '호식이두마리치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '경기 수원시 영통구 중부대로256번길 34',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-212-1292',
		tags: [],
		orderable: true,
	},
	{
		name: '중독돼지',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '경기 수원시 장안구 정조로922번길 29',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-248-8292',
		tags: [],
		orderable: true,
	},
	{
		name: '명성돼지갈비',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '경기 수원시 장안구 팔달로271번길 16-16',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-242-2122',
		tags: [],
		orderable: true,
	},
	{
		name: '오빠가 구운 돼지',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '경기 수원시 장안구 수성로275번길 13',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-242-5895',
		tags: [],
		orderable: true,
	},
	{
		name: '사또통족발',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '경기 수원시 장안구 연무로 37-2',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-242-8254',
		tags: [],
		orderable: true,
	},
	{
		name: '돈발',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '경기 수원시 장안구 경수대로 940',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-247-7882',
		tags: [],
		orderable: true,
	},
	{
		name: '항아리보쌈',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '경기 수원시 영통구 센트럴파크로127번길 41',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-212-0101',
		tags: [],
		orderable: true,
	},
	{
		name: '보영만두',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '경기 수원시 영통구 중부대로 259 예스크리닉동수원점 102호',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-211-8789',
		tags: [],
		orderable: true,
	},
	{
		name: '동대문엽기떡볶이',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '경기 수원시 영통구 아주로 26',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '0504-3142-4858',
		tags: [],
		orderable: true,
	},
	{
		name: '죠스떡볶이',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '경기 수원시 영통구 중부대로256번길 3',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-211-1117',
		tags: [],
		orderable: true,
	},
	{
		name: '존앤진피자',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '경기 수원시 팔달구 신풍로 47',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-253-5189',
		tags: [],
		orderable: true,
	},
	{
		name: '피자알볼로',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '경기 수원시 팔달구 월드컵로 299',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '050-4309-0829',
		tags: [],
		orderable: true,
	},
	{
		name: '피자먹는날',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd0514e'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '경기 수원시 장안구 조원로89번길 31',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '031-258-9924',
		tags: [],
		orderable: true,
	},
	{
		name: '치킨마루',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '인천 미추홀구 소성로 334',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-431-7171',
		tags: [],
		orderable: true,
	},
	{
		name: '네네치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '인천 미추홀구 매소홀로576번길 5-9',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '050-7964-1100',
		tags: [],
		orderable: true,
	},
	{
		name: 'BBQ',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '인천 미추홀구 매소홀로 618',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-423-2343',
		tags: [],
		orderable: true,
	},
	{
		name: '삼화리',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '인천 남동구 문화로 83-1',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-423-9933',
		tags: [],
		orderable: true,
	},
	{
		name: '맛찬들왕소금구이',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '인천 남동구 인하로511번길 40',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-437-6692',
		tags: [],
		orderable: true,
	},
	{
		name: '철든놈 제6공장',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '인천 남동구 예술로140번길 39',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-434-9255',
		tags: [],
		orderable: true,
	},
	{
		name: '착한보쌈',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '인천 미추홀구 소성로 350',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-424-1800',
		tags: [],
		orderable: true,
	},
	{
		name: '돈통마늘보쌈',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '인천 미추홀구 매소홀로562번길 5-44',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-428-5382',
		tags: [],
		orderable: true,
	},
	{
		name: '유신불족발',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '인천 남동구 인하로 497-28 노빌리안 1',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-432-8993',
		tags: [],
		orderable: true,
	},
	{
		name: '킹콩떡볶이',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '인천 미추홀구 매소홀로 618',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: null,
		tags: [],
		orderable: true,
	},
	{
		name: '작살떡볶이',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '인천 미추홀구 소성로 334',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-427-5335',
		tags: [],
		orderable: true,
	},
	{
		name: '이삭토스트',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '인천 미추홀구 소성로350번길 16',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-438-0675',
		tags: [],
		orderable: true,
	},
	{
		name: '파파존스',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '인천 미추홀구 매소홀로 618',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: null,
		tags: [],
		orderable: true,
	},
	{
		name: '59쌀피자',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '인천 미추홀구 소성로 334',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-421-5359',
		tags: [],
		orderable: true,
	},
	{
		name: '피자아이맥스',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05151'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '인천 미추홀구 소성로350번길 19-6 유성주택',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '032-873-9285',
		tags: [],
		orderable: true,
	},
	{
		name: '금빛통닭',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '대전 중구 보문로48번길 22',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-252-9282',
		tags: [],
		orderable: true,
	},
	{
		name: '멕시카나치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '대전 중구 부용로 5',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '050-4570-7859',
		tags: [],
		orderable: true,
	},
	{
		name: '처갓집양념치킨',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e57'),
		location: {
			name: '대전 중구 대종로316번길 2',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-253-3588',
		tags: [],
		orderable: true,
	},
	{
		name: '도네누',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '대전 중구 중앙로122번길 25',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-226-9285',
		tags: [],
		orderable: true,
	},
	{
		name: '탐나는오겹살',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '대전 중구 중앙로138번길 30',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-255-5592',
		tags: [],
		orderable: true,
	},
	{
		name: '대전갈비집',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e58'),
		location: {
			name: '대전 중구 대전천서로 419-8',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-254-0758',
		tags: [],
		orderable: true,
	},
	{
		name: '보쌈만족',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '대전 중구 중앙로130번길 20',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-222-9991',
		tags: [],
		orderable: true,
	},
	{
		name: '소담애',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '대전 중구 중앙로122번길 23',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-223-3401',
		tags: [],
		orderable: true,
	},
	{
		name: '명품할매왕족발보쌈',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e59'),
		location: {
			name: '대전 중구 대종로315번길 11',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-222-9282',
		tags: [],
		orderable: true,
	},
	{
		name: '오매불떡 매운떡볶이',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '대전 중구 보문로 91-1',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-255-1032',
		tags: [],
		orderable: true,
	},
	{
		name: '소풍나라김밥',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '대전 중구 보문로 85',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-222-4109',
		tags: [],
		orderable: true,
	},
	{
		name: '바로그집',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c8866be5b780c7c589e5f'),
		location: {
			name: '대전 중구 중앙로 145',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-254-8925',
		tags: [],
		orderable: true,
	},
	{
		name: '피자2001',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '대전 중구 보문로 225',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-256-2001',
		tags: [],
		orderable: true,
	},
	{
		name: '다와치킨앤피자',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '대전 중구 선화서로 2',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-222-9249',
		tags: [],
		orderable: true,
	},
	{
		name: '피자마루',
		owner: ObjectId('5b8c753e8619cd1c4c97b823'),
		park: ObjectId('5b8c74cded3197189cd05150'),
		category: ObjectId('5b8c7ce7be5b780c7c589e5a'),
		location: {
			name: '대전 중구 충무로107번길 100',
			loc: {
				type: 'Point',
				coordinates: [0, 0],
			},
		},
		phoneNumber: '042-252-1082',
		tags: [],
		orderable: true,
	},
])
