db.stores.aggregate([
{
	$lookup: {
		from: 'reviews',
		localField: '_id',
		foreignField: 'store',
		as: 'scores'
	}
},
{$unwind: {path: '$scores', preserveNullAndEmptyArrays: true}},
{
	$group: {
		_id : '$_id',
		name: { $first: '$name' },
        owner: { $first: '$owner' },
		park: { $first: '$park' },
        category: { $first: '$category' },
		location: { $first: '$location' },
        phoneNumber: { $first: '$phoneNumber' },
		orderable: { $first: '$orderable' },
		avg: {$avg: '$scores.score' },
	}
},
])