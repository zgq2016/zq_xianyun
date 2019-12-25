export const state = () => {
	return {
		// 酒店
		infoData: {
			data:[]
		}
	}
}

export const mutations = {
	// 设置酒店的信息
	setInfoData(state, data) {
		state.infoData = data;
	}
}
