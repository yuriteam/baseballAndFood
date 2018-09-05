/*global daum*/
import React, { Component } from 'react'

class StoreMap extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(nextProps) != JSON.stringify(this.props)
	}

	componentDidUpdate(prevProps, prevState) {
		this.renderMap()
	}

	componentDidMount() {
		this.renderMap()
	}

	renderMap() {
		var { location } = this.props
		var coordinates = location.loc.coordinates
		var container = document.getElementById('map')
		var options = {
			center: new daum.maps.LatLng(coordinates[1], coordinates[0]),
			level: 1,
		}
		var map = new daum.maps.Map(container, options)

		// 확대축소 컨트롤
		var mapTypeControl = new daum.maps.MapTypeControl()
		map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT)
		var zoomControl = new daum.maps.ZoomControl()
		map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT)

		//마커 생성
		var markerPosition = new daum.maps.LatLng(coordinates[1], coordinates[0])
		var marker = new daum.maps.Marker({
			position: markerPosition,
		})
		marker.setMap(map)
	}

	render() {
		return <div id="map" style={{ height: 400 }} className="mb-3" />
	}
}

export default StoreMap
