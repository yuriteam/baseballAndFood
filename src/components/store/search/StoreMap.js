import React, { Component } from 'react'

export default class StoreMap extends Component {
	componentDidMount() {
		// 지도 생성
		var container = document.getElementById('map')
		var options = {
			center: new daum.maps.LatLng(33.450701, 126.570667),
			level: 3,
		}
		var map = new daum.maps.Map(container, options)

		// 확대축소 컨트롤
		var mapTypeControl = new daum.maps.MapTypeControl()
		map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT)
		var zoomControl = new daum.maps.ZoomControl()
		map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT)

		//마커 생성
		var markerPosition = new daum.maps.LatLng(33.450701, 126.570667)
		var marker = new daum.maps.Marker({
			position: markerPosition,
		})
		marker.setMap(map)
	}

	render() {
		return <div id="map" style={{ height: 400 }} className="mb-3" />
	}
}
