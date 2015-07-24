let React = require('react');

var Main = React.createClass({

	getInitialState() {
		return{
			demo : " ",
			container : "ip-container loading",
			image : "landscape.jpg"
		};
	},

	componentDidMount() {
		this._startLoading();
	},
 	
 	render() {
 		return (
 			<div className={this.state.demo}>
 			<div id="ip-container" className={this.state.container}>
 				<header className="ip-header">
					<h1 className="ip-logo">
						<svg className="ip-inner" width="100%" height="100%" viewBox="0 0 300 160" preserveAspectRatio="xMidYMin meet" aria-labelledby="logo_title">
							<title id="logo_title">Delightful Demonstrations by Codrops</title>
							<path d="M279.464,97.909L269.13,83.176l8.756-20.404c0.139-0.322,0.09-0.696-0.126-0.972c-0.217-0.278-0.565-0.413-0.914-0.358 l-19.896,3.227l0.005-13.346c0-0.284-0.125-0.553-0.341-0.736c-0.217-0.183-0.502-0.262-0.781-0.215l-14.866,2.476l-0.002-13.066 c0-0.284-0.126-0.552-0.341-0.735c-0.216-0.183-0.501-0.263-0.782-0.215L61.814,68.626c-0.464,0.077-0.804,0.479-0.805,0.949 l-0.011,13.692l-17.223,2.824c-0.466,0.076-0.808,0.479-0.808,0.951l0.003,13.872l-21.803,3.606 c-0.327,0.054-0.603,0.272-0.73,0.578c-0.129,0.304-0.091,0.654,0.099,0.925l10.333,14.734l-8.755,20.402 c-0.139,0.324-0.09,0.698,0.129,0.976c0.184,0.234,0.464,0.368,0.756,0.368c0.054,0,0.108-0.005,0.162-0.014l52.751-8.97 c0.477-0.082,0.808-0.501,0.798-0.971c0-0.039-0.005-0.079-0.009-0.118c-0.001-0.008,0-0.015-0.001-0.022 c-0.001-0.003-0.002-0.008-0.003-0.011c-0.006-0.045-0.006-0.09-0.019-0.134l-3.55-12.769l20.414-3.433 c0.004-0.001,0.008-0.003,0.014-0.004c0.035-0.007,0.067-0.018,0.101-0.028c0.028-0.008,0.057-0.014,0.083-0.025 c0.026-0.009,0.051-0.024,0.077-0.037c0.031-0.016,0.062-0.03,0.091-0.048c0.021-0.015,0.04-0.032,0.06-0.047 c0.029-0.024,0.06-0.045,0.086-0.071c0.002-0.003,0.006-0.004,0.009-0.007c0.007-0.007,0.011-0.018,0.019-0.025 c0.044-0.046,0.082-0.097,0.116-0.149c0.012-0.021,0.023-0.04,0.034-0.061c0.029-0.054,0.052-0.11,0.07-0.17 c0.004-0.014,0.011-0.027,0.014-0.041c0.019-0.072,0.027-0.147,0.029-0.224c0-0.021-0.003-0.042-0.004-0.062 c-0.002-0.037-0.001-0.073-0.007-0.11c-0.003-0.021-0.012-0.04-0.016-0.06c-0.003-0.013-0.002-0.026-0.005-0.039l-3.49-12.553 l120.449-20.255l0.809,13.004c0.001,0.013,0.005,0.023,0.006,0.035c0.003,0.022,0.001,0.043,0.006,0.064 c0.007,0.045,0.021,0.089,0.034,0.132c0.002,0.008,0.004,0.018,0.006,0.025c0.025,0.072,0.061,0.14,0.102,0.202 c0.008,0.014,0.019,0.027,0.027,0.04c0.039,0.055,0.084,0.106,0.134,0.151c0.007,0.007,0.014,0.014,0.021,0.021 c0.057,0.048,0.119,0.088,0.187,0.123c0.007,0.003,0.014,0.01,0.021,0.015c0.011,0.004,0.023,0.007,0.033,0.011 c0.044,0.021,0.089,0.034,0.136,0.047c0.018,0.006,0.035,0.012,0.055,0.016c0.062,0.014,0.127,0.021,0.193,0.021h0.001h0.001 c0,0,0,0,0.001,0c0.052,0,0.104-0.004,0.158-0.013l14.378-2.412l0.363,13.291c0.01,0.354,0.214,0.674,0.531,0.833 c0.136,0.07,0.285,0.104,0.433,0.104c0.066,0,0.131-0.016,0.196-0.03c0.042,0.006,0.085,0.013,0.128,0.013 c0.054,0,0.106-0.005,0.161-0.014l49.442-8.314c0.326-0.056,0.602-0.274,0.729-0.578C279.69,98.528,279.653,98.18,279.464,97.909z M255.027,52.458l-0.01,34.515l-37.923,6.362l23.118-16.158c0.441-0.095,0.761-0.483,0.761-0.939l-0.006-21.439L255.027,52.458z M62.936,70.393l176.101-29.475l0.009,34.505l-176.138,29.62L62.936,70.393z M60.997,85.222l-0.018,20.959 c0,0.017,0.005,0.033,0.005,0.05c0.002,0.041,0.006,0.081,0.014,0.12c0.004,0.027,0.01,0.053,0.018,0.079 c0.01,0.038,0.022,0.074,0.037,0.11c0.01,0.026,0.021,0.051,0.033,0.075c0.018,0.035,0.039,0.068,0.06,0.101 c0.016,0.021,0.029,0.045,0.046,0.065c0.028,0.034,0.06,0.065,0.092,0.097c0.013,0.013,0.023,0.027,0.037,0.039 c0.003,0.003,0.007,0.005,0.011,0.007c0.018,0.016,0.038,0.027,0.057,0.041c0.03,0.021,0.061,0.043,0.092,0.061 c0.021,0.011,0.043,0.021,0.065,0.03c0.034,0.016,0.069,0.03,0.104,0.041c0.01,0.003,0.02,0.009,0.03,0.012l27.328,7.764 l-44.104,7.417l-0.009-34.428L60.997,85.222z M32.853,121.024c0.131-0.306,0.095-0.659-0.097-0.933l-9.762-13.919l19.979-3.306 l0.005,20.562c0,0.283,0.125,0.552,0.342,0.735c0.125,0.105,0.274,0.175,0.431,0.206c0.088,0.064,0.187,0.117,0.298,0.148 l27.451,7.799l-46.916,7.978L32.853,121.024z M232.894,105.183l23.354-16.322c0.105-0.073,0.189-0.165,0.255-0.266 c0.268-0.174,0.441-0.472,0.441-0.806l0.006-21.169l18.473-2.996l-8.275,19.285c-0.132,0.307-0.095,0.66,0.097,0.934l9.766,13.923 L232.894,105.183z M94.226,32.084c-0.2,0.397-0.46,0.921-0.783,1.574c-0.322,0.652-0.692,1.382-1.108,2.191 c-0.417,0.809-0.868,1.679-1.355,2.611s-0.991,1.869-1.513,2.813c-0.522,0.943-1.056,1.874-1.601,2.792 c-0.545,0.918-1.076,1.772-1.592,2.562c1.267-0.341,2.486-0.868,3.659-1.58c1.173-0.712,2.272-1.539,3.299-2.479 s1.964-1.959,2.815-3.058c0.85-1.098,1.577-2.21,2.181-3.338c0.604-1.128,1.073-2.235,1.408-3.323 c0.334-1.088,0.501-2.089,0.501-3.004c0-0.774-0.096-1.474-0.29-2.098c-0.194-0.625-0.487-1.144-0.88-1.56 c-0.393-0.415-0.895-0.706-1.504-0.874c-0.61-0.168-1.326-0.183-2.147-0.045c-0.762,0.127-1.527,0.329-2.295,0.604 c-0.768,0.276-1.504,0.595-2.208,0.959c-0.704,0.364-1.352,0.763-1.944,1.196c-0.593,0.434-1.1,0.879-1.522,1.337 c-0.469,0.594-0.883,1.18-1.24,1.756c-0.358,0.576-0.71,1.098-1.056,1.566c-0.346,0.469-0.719,0.866-1.117,1.19 c-0.399,0.325-0.868,0.532-1.408,0.623c-1.009,0.169-1.513-0.193-1.513-1.084c0-0.562,0.182-1.2,0.545-1.912 c0.363-0.711,0.871-1.441,1.521-2.189c0.651-0.749,1.425-1.494,2.322-2.236c0.897-0.742,1.885-1.429,2.965-2.062 c1.079-0.632,2.228-1.185,3.448-1.659c1.22-0.474,2.475-0.819,3.765-1.035c1.501-0.251,2.81-0.247,3.923,0.012 c1.114,0.259,2.038,0.717,2.771,1.375c0.733,0.658,1.278,1.484,1.637,2.479c0.357,0.996,0.536,2.104,0.536,3.323 c0,1.22-0.208,2.533-0.625,3.939c-0.417,1.407-1.026,2.823-1.83,4.247c-0.804,1.425-1.794,2.816-2.973,4.175 s-2.533,2.605-4.064,3.741c-1.53,1.136-3.226,2.118-5.084,2.945c-1.859,0.827-3.868,1.421-6.025,1.782 c-0.469,0.079-0.839-0.009-1.108-0.263c-0.27-0.254-0.405-0.598-0.405-1.032c0-0.34,0.059-0.678,0.176-1.015s0.27-0.655,0.458-0.957 l7.231-15.583c0.34-0.585,0.677-1.064,1.012-1.436c0.334-0.373,0.645-0.671,0.932-0.896c0.288-0.224,0.542-0.38,0.766-0.471 c0.223-0.09,0.393-0.145,0.51-0.165c0.528-0.088,0.903,0.001,1.126,0.269s0.334,0.612,0.334,1.035c0,0.34-0.059,0.708-0.176,1.103 C94.583,31.327,94.425,31.711,94.226,32.084z M112.224,32.116c0.973-0.163,1.7-0.05,2.182,0.339 c0.481,0.388,0.721,0.999,0.721,1.832c0,0.492-0.129,1.03-0.387,1.613c-0.258,0.583-0.704,1.206-1.337,1.869 s-1.481,1.374-2.542,2.132c-1.062,0.759-2.39,1.564-3.985,2.417c0.059,0.331,0.24,0.567,0.545,0.709 c0.305,0.142,0.709,0.171,1.214,0.087c0.54-0.09,1.117-0.266,1.733-0.528c0.615-0.261,1.225-0.565,1.83-0.913 c0.604-0.348,1.193-0.713,1.768-1.097c0.574-0.383,1.093-0.743,1.557-1.079c0.463-0.335,0.851-0.623,1.162-0.863 c0.311-0.24,0.519-0.392,0.625-0.456c0.105-0.088,0.202-0.146,0.29-0.172c0.088-0.026,0.167-0.045,0.237-0.057 c0.141-0.023,0.258-0.011,0.352,0.038s0.173,0.112,0.237,0.189s0.108,0.164,0.132,0.259c0.023,0.096,0.035,0.179,0.035,0.249 c0,0.106-0.012,0.234-0.035,0.384c-0.024,0.151-0.111,0.333-0.264,0.545c-0.059,0.069-0.255,0.26-0.589,0.574 c-0.334,0.314-0.765,0.691-1.293,1.131c-0.527,0.44-1.141,0.916-1.838,1.425c-0.698,0.51-1.437,0.995-2.217,1.453 c-0.78,0.459-1.592,0.868-2.436,1.226c-0.845,0.358-1.678,0.606-2.499,0.743c-0.704,0.118-1.328,0.087-1.874-0.091 c-0.545-0.179-1.009-0.465-1.39-0.858c-0.381-0.394-0.672-0.873-0.871-1.438c-0.2-0.564-0.299-1.175-0.299-1.832 c0-0.504,0.1-1.075,0.299-1.713c0.199-0.637,0.486-1.292,0.862-1.965s0.836-1.345,1.381-2.017c0.545-0.671,1.158-1.287,1.838-1.847 c0.68-0.559,1.428-1.042,2.243-1.448C110.426,32.552,111.297,32.271,112.224,32.116z M111.59,34.65 c-0.059-0.002-0.111,0-0.158,0.008s-0.1,0.017-0.158,0.026c-0.446,0.075-0.862,0.232-1.25,0.473 c-0.387,0.241-0.742,0.532-1.064,0.873c-0.323,0.342-0.61,0.715-0.862,1.121c-0.252,0.406-0.478,0.805-0.677,1.195 c-0.2,0.392-0.367,0.763-0.501,1.113c-0.135,0.351-0.237,0.644-0.308,0.878c0.41-0.28,0.835-0.591,1.275-0.935 c0.44-0.343,0.854-0.67,1.24-0.981c0.387-0.312,0.724-0.59,1.012-0.838c0.287-0.247,0.489-0.416,0.607-0.506 c0.528-0.416,0.891-0.785,1.091-1.106c0.2-0.32,0.299-0.587,0.299-0.797c0-0.176-0.056-0.308-0.167-0.395 C111.857,34.693,111.73,34.65,111.59,34.65z M119.666,38.594c-0.129,0.292-0.255,0.626-0.378,1.004 c-0.123,0.378-0.185,0.708-0.185,0.99c0,0.176,0.036,0.311,0.106,0.405s0.205,0.124,0.405,0.09c0.246-0.041,0.554-0.166,0.923-0.375 c0.37-0.208,0.768-0.469,1.196-0.781c0.428-0.312,0.874-0.662,1.337-1.051c0.463-0.388,0.923-0.788,1.381-1.198 c0.458-0.411,0.894-0.818,1.311-1.222c0.417-0.404,0.789-0.774,1.117-1.111c0.094-0.098,0.206-0.175,0.334-0.232 c0.129-0.057,0.24-0.093,0.334-0.108c0.234-0.04,0.428,0.01,0.581,0.149c0.152,0.139,0.229,0.343,0.229,0.612 c0,0.247-0.082,0.536-0.246,0.869c-0.165,0.333-0.452,0.68-0.862,1.042c-0.75,0.818-1.507,1.601-2.27,2.35 c-0.762,0.75-1.522,1.425-2.278,2.026c-0.757,0.602-1.508,1.105-2.252,1.511c-0.745,0.406-1.469,0.668-2.173,0.786 c-0.481,0.081-0.882,0.083-1.205,0.008c-0.323-0.075-0.581-0.208-0.774-0.398c-0.193-0.19-0.332-0.431-0.414-0.722 c-0.082-0.292-0.123-0.607-0.123-0.947c0-0.575,0.084-1.178,0.255-1.811c0.17-0.632,0.373-1.22,0.607-1.764 c0.411-0.984,0.827-1.962,1.249-2.936c0.422-0.974,0.81-1.865,1.162-2.675l5.331-12.239c0.211-0.493,0.496-0.863,0.854-1.111 c0.357-0.247,0.718-0.401,1.082-0.462c0.363-0.061,0.695-0.017,0.994,0.133s0.449,0.447,0.449,0.893c0,0.211-0.05,0.442-0.15,0.693 c-0.099,0.251-0.226,0.525-0.378,0.82c-0.293,0.601-0.642,1.333-1.047,2.198c-0.405,0.866-0.839,1.806-1.302,2.822 c-0.464,1.016-0.938,2.072-1.425,3.168c-0.486,1.096-0.962,2.164-1.425,3.203c-0.463,1.04-0.897,2.024-1.302,2.954 C120.308,37.105,119.958,37.912,119.666,38.594z M128.304,30.974c0.199-0.362,0.428-0.635,0.687-0.819 c0.257-0.184,0.521-0.298,0.792-0.344c0.446-0.074,0.83,0.005,1.152,0.238c0.322,0.233,0.484,0.573,0.484,1.019 c-0.012,0.108-0.026,0.216-0.044,0.324c-0.017,0.108-0.055,0.22-0.114,0.336c-0.164,0.333-0.299,0.613-0.404,0.842 c-0.106,0.229-0.203,0.441-0.291,0.638c-0.088,0.196-0.173,0.389-0.255,0.579c-0.082,0.189-0.182,0.417-0.299,0.683 c-0.141,0.317-0.299,0.663-0.475,1.039s-0.343,0.758-0.501,1.148c-0.158,0.39-0.293,0.77-0.404,1.141 c-0.112,0.371-0.167,0.703-0.167,0.996c0,0.317,0.079,0.512,0.238,0.585c0.158,0.073,0.384,0.085,0.677,0.036 c0.328-0.055,0.671-0.182,1.029-0.383c0.357-0.201,0.718-0.443,1.082-0.727c0.363-0.283,0.721-0.598,1.073-0.944 c0.352-0.346,0.684-0.692,0.994-1.038c0.311-0.345,0.599-0.674,0.862-0.989c0.264-0.313,0.484-0.591,0.66-0.832 c0.234-0.262,0.469-0.413,0.703-0.452c0.211-0.036,0.384,0.029,0.519,0.194s0.202,0.395,0.202,0.688c0,0.27-0.067,0.568-0.202,0.896 s-0.355,0.652-0.66,0.973c-0.598,0.71-1.208,1.396-1.83,2.057s-1.258,1.26-1.909,1.797c-0.651,0.537-1.305,0.989-1.961,1.357 c-0.657,0.368-1.319,0.608-1.988,0.72c-0.95,0.159-1.697,0.041-2.243-0.355c-0.545-0.396-0.818-1.109-0.818-2.142 c0-0.539,0.076-1.08,0.229-1.622c0.153-0.541,0.334-1.073,0.546-1.596c0.211-0.521,0.434-1.028,0.668-1.519 c0.234-0.491,0.434-0.955,0.598-1.394c0.059-0.162,0.161-0.414,0.308-0.755c0.146-0.341,0.302-0.689,0.466-1.045 C127.893,31.887,128.093,31.443,128.304,30.974z M130.239,26.691c0-0.27,0.05-0.557,0.149-0.861s0.249-0.59,0.449-0.858 c0.199-0.268,0.449-0.503,0.748-0.706c0.299-0.202,0.653-0.338,1.064-0.407c0.68-0.114,1.155-0.061,1.425,0.158 s0.405,0.527,0.405,0.926c0,0.223-0.044,0.477-0.132,0.761c-0.088,0.285-0.22,0.556-0.396,0.814s-0.404,0.487-0.686,0.687 c-0.282,0.2-0.616,0.332-1.003,0.396c-0.727,0.122-1.237,0.093-1.53-0.087C130.438,27.335,130.274,27.061,130.239,26.691z M142.607,27.049c0.516-0.086,0.968-0.097,1.355-0.033c0.387,0.064,0.715,0.15,0.985,0.257c0.305,0.137,0.575,0.297,0.809,0.48 c0.165-0.133,0.34-0.262,0.528-0.388c0.165-0.109,0.346-0.213,0.546-0.312c0.199-0.097,0.398-0.163,0.598-0.196 c0.516-0.086,0.915-0.047,1.196,0.116c0.282,0.164,0.422,0.393,0.422,0.686c0,0.153-0.042,0.312-0.124,0.478l-4.117,8.483 l0.334-0.355c1.384-1.041,2.521-1.867,3.414-2.479c0.891-0.613,1.601-1.074,2.129-1.386c0.527-0.311,0.906-0.513,1.135-0.604 s0.372-0.142,0.431-0.151c0.27-0.045,0.479,0.023,0.625,0.203c0.146,0.181,0.22,0.424,0.22,0.729c0,0.34-0.097,0.702-0.29,1.086 s-0.49,0.687-0.889,0.905c-0.527,0.358-1.144,0.752-1.848,1.18c-0.704,0.429-1.437,0.895-2.199,1.397 c-0.762,0.503-1.527,1.05-2.296,1.642c-0.768,0.592-1.486,1.226-2.155,1.9l-3.413,6.747c-0.281,0.716-0.537,1.304-0.765,1.764 s-0.455,0.833-0.678,1.116c-0.223,0.284-0.451,0.492-0.686,0.625c-0.235,0.133-0.504,0.225-0.81,0.276 c-0.457,0.077-0.818-0.021-1.082-0.294c-0.264-0.272-0.396-0.632-0.396-1.078c0-0.469,0.112-1.033,0.334-1.692 c0.223-0.658,0.537-1.382,0.942-2.171c0.404-0.789,0.894-1.627,1.469-2.515c0.574-0.888,1.214-1.802,1.917-2.74l2.182-3.145 c-0.446,0.485-0.886,0.911-1.319,1.276c-0.434,0.366-0.851,0.673-1.25,0.922c-0.399,0.249-0.771,0.443-1.117,0.583 c-0.346,0.14-0.648,0.232-0.906,0.275c-0.469,0.079-0.903,0.043-1.301-0.107c-0.399-0.15-0.742-0.395-1.029-0.734 c-0.288-0.339-0.514-0.759-0.678-1.259c-0.164-0.5-0.246-1.061-0.246-1.683c0-1.29,0.249-2.499,0.748-3.626 c0.499-1.127,1.138-2.123,1.918-2.986c0.78-0.864,1.642-1.574,2.586-2.13C140.78,27.555,141.704,27.2,142.607,27.049z M141.938,30.257c-0.551,0.092-1.085,0.32-1.601,0.682c-0.516,0.362-0.974,0.802-1.373,1.32c-0.398,0.519-0.715,1.09-0.95,1.716 c-0.235,0.626-0.352,1.25-0.352,1.871c0,0.188,0.015,0.388,0.044,0.6c0.03,0.212,0.094,0.404,0.193,0.575 c0.1,0.171,0.247,0.302,0.44,0.393c0.194,0.091,0.46,0.107,0.801,0.051c0.246-0.042,0.537-0.198,0.871-0.471 c0.334-0.273,0.68-0.606,1.038-1s0.707-0.822,1.047-1.284c0.339-0.461,0.648-0.909,0.923-1.342s0.495-0.818,0.66-1.157 c0.164-0.338,0.246-0.583,0.246-0.736c0-0.258-0.07-0.472-0.211-0.642c-0.141-0.17-0.313-0.302-0.519-0.397 c-0.205-0.094-0.422-0.155-0.651-0.182C142.316,30.227,142.114,30.228,141.938,30.257z M149.363,35.929 c0.282-0.645,0.604-1.365,0.968-2.159c0.363-0.794,0.73-1.583,1.1-2.366s0.719-1.528,1.047-2.234c0.328-0.706,0.604-1.306,0.827-1.8 l5.806-12.39c0.07-0.164,0.179-0.33,0.325-0.495s0.313-0.319,0.501-0.462c0.188-0.143,0.388-0.264,0.599-0.364 c0.211-0.1,0.422-0.167,0.633-0.203c0.517-0.086,0.874-0.049,1.074,0.111c0.198,0.16,0.299,0.381,0.299,0.662 c0,0.258-0.064,0.542-0.193,0.851c-0.13,0.309-0.276,0.6-0.44,0.874c-0.517,0.966-1.012,1.938-1.486,2.914s-0.95,1.959-1.426,2.948 c-0.475,0.989-0.952,1.972-1.434,2.949c-0.48,0.978-0.984,1.951-1.513,2.918c0.328-0.372,0.678-0.758,1.047-1.161 c0.369-0.402,0.771-0.779,1.205-1.134c0.434-0.354,0.908-0.665,1.425-0.934c0.516-0.268,1.091-0.455,1.725-0.561 c0.375-0.063,0.732-0.087,1.072-0.074c0.341,0.013,0.64,0.078,0.898,0.192c0.257,0.115,0.463,0.298,0.615,0.548 c0.152,0.25,0.229,0.575,0.229,0.974c0,0.528-0.079,1.025-0.237,1.491s-0.36,0.917-0.606,1.351c-0.247,0.435-0.517,0.854-0.81,1.261 c-0.294,0.407-0.572,0.817-0.836,1.231s-0.492,0.836-0.687,1.267c-0.193,0.431-0.313,0.886-0.36,1.362 c0,0.024-0.003,0.047-0.009,0.072s-0.009,0.048-0.009,0.072c0,0.235,0.079,0.368,0.237,0.4c0.158,0.033,0.36,0.028,0.607-0.014 c0.316-0.053,0.656-0.171,1.021-0.355c0.363-0.184,0.729-0.409,1.1-0.676c0.369-0.267,0.738-0.561,1.108-0.881 c0.369-0.319,0.721-0.642,1.056-0.968c0.334-0.326,0.642-0.638,0.923-0.938c0.282-0.299,0.522-0.56,0.722-0.781 c0.105-0.111,0.217-0.2,0.334-0.267c0.117-0.066,0.229-0.108,0.335-0.126c0.211-0.035,0.39,0.014,0.536,0.147s0.22,0.336,0.22,0.605 c0,0.246-0.085,0.542-0.255,0.887s-0.461,0.71-0.871,1.096c-0.645,0.671-1.302,1.321-1.971,1.949 c-0.668,0.628-1.343,1.198-2.022,1.71c-0.681,0.513-1.358,0.943-2.032,1.29c-0.675,0.347-1.335,0.575-1.979,0.683 c-0.833,0.14-1.501,0.061-2.005-0.236c-0.505-0.296-0.757-0.855-0.757-1.677c0-0.598,0.103-1.181,0.308-1.749 c0.205-0.568,0.457-1.126,0.757-1.675c0.299-0.548,0.618-1.083,0.959-1.604c0.34-0.52,0.639-1.024,0.896-1.513 c0.141-0.223,0.249-0.426,0.325-0.609c0.077-0.183,0.115-0.374,0.115-0.573c0-0.176-0.048-0.312-0.141-0.408 c-0.095-0.096-0.241-0.127-0.44-0.094c-0.691,0.116-1.331,0.393-1.917,0.832c-0.587,0.438-1.127,0.962-1.619,1.572 s-0.95,1.265-1.372,1.962c-0.422,0.699-0.815,1.366-1.179,2.001c-0.165,0.286-0.332,0.609-0.502,0.972s-0.346,0.735-0.527,1.118 c-0.183,0.382-0.373,0.763-0.572,1.143s-0.407,0.722-0.624,1.028c-0.218,0.306-0.445,0.561-0.687,0.766 c-0.24,0.204-0.489,0.328-0.747,0.372c-0.411,0.068-0.728,0.001-0.95-0.202c-0.223-0.203-0.334-0.486-0.334-0.85 c0-0.27,0.047-0.562,0.141-0.876C149,36.791,149.152,36.398,149.363,35.929z M172.094,25.123c-0.435,0.917-0.845,1.811-1.231,2.678 c-0.388,0.868-0.751,1.671-1.091,2.408c-0.141,0.306-0.279,0.654-0.413,1.046c-0.136,0.392-0.203,0.729-0.203,1.01 c0,0.165,0.038,0.287,0.114,0.368c0.076,0.082,0.203,0.107,0.379,0.078c0.246-0.042,0.557-0.167,0.933-0.376 c0.375-0.209,0.779-0.471,1.213-0.784c0.435-0.312,0.892-0.665,1.373-1.057c0.48-0.391,0.952-0.792,1.416-1.204 c0.463-0.412,0.906-0.82,1.328-1.226c0.423-0.405,0.798-0.775,1.126-1.112c0.188-0.16,0.363-0.254,0.528-0.281 c0.199-0.033,0.363,0.027,0.492,0.181c0.129,0.155,0.193,0.367,0.193,0.636c0,0.27-0.064,0.556-0.193,0.859 s-0.363,0.618-0.703,0.944c-0.763,0.82-1.534,1.606-2.314,2.358c-0.779,0.752-1.554,1.43-2.321,2.034 c-0.769,0.604-1.528,1.109-2.279,1.516c-0.75,0.407-1.478,0.67-2.181,0.788c-0.47,0.079-0.862,0.083-1.18,0.013 c-0.316-0.07-0.571-0.198-0.765-0.383c-0.193-0.184-0.332-0.413-0.413-0.687c-0.083-0.273-0.124-0.574-0.124-0.903 c0-0.586,0.1-1.213,0.3-1.88c0.199-0.667,0.422-1.272,0.668-1.818c0.353-0.786,0.701-1.565,1.047-2.339s0.684-1.516,1.012-2.228 l-0.757,0.126c-0.656,0.11-1.107,0.08-1.354-0.09c-0.246-0.17-0.369-0.389-0.369-0.659c0-0.117,0.038-0.268,0.114-0.451 c0.076-0.183,0.188-0.359,0.334-0.531c0.146-0.171,0.326-0.327,0.537-0.468c0.211-0.141,0.451-0.234,0.721-0.279l1.9-0.318 l3.712-7.993c0.234-0.485,0.524-0.853,0.871-1.104c0.346-0.251,0.707-0.409,1.082-0.471c0.352-0.059,0.674-0.019,0.968,0.119 c0.293,0.139,0.439,0.425,0.439,0.859c0,0.223-0.05,0.457-0.149,0.703c-0.1,0.245-0.231,0.534-0.396,0.866 c-0.105,0.218-0.235,0.477-0.387,0.777c-0.153,0.302-0.314,0.622-0.484,0.961c-0.17,0.339-0.346,0.694-0.527,1.064 c-0.183,0.371-0.361,0.729-0.537,1.075c-0.398,0.817-0.82,1.68-1.267,2.587l5.735-0.959c0.281-0.047,0.539-0.076,0.774-0.086 c0.234-0.01,0.437,0.015,0.606,0.075s0.302,0.158,0.396,0.294c0.095,0.137,0.142,0.334,0.142,0.592c0,0.129-0.021,0.262-0.062,0.397 c-0.041,0.136-0.117,0.266-0.229,0.39c-0.111,0.125-0.264,0.238-0.457,0.341c-0.193,0.103-0.443,0.191-0.748,0.266L172.094,25.123z M188.279,22.204c-0.61,0.125-1.188,0.24-1.733,0.343c-0.545,0.103-1.075,0.201-1.592,0.293s-1.026,0.18-1.53,0.265 c-0.505,0.084-1.015,0.17-1.531,0.256c-0.305,0.649-0.647,1.402-1.029,2.257c-0.381,0.855-0.78,1.752-1.195,2.69 c-0.417,0.938-0.834,1.884-1.249,2.839c-0.417,0.956-0.813,1.86-1.188,2.715s-0.716,1.626-1.02,2.317 c-0.306,0.69-0.552,1.238-0.739,1.646c-0.13,0.292-0.288,0.567-0.476,0.827s-0.393,0.491-0.615,0.692s-0.452,0.366-0.687,0.493 c-0.234,0.127-0.451,0.208-0.65,0.241c-0.282,0.047-0.534,0.019-0.757-0.084c-0.223-0.104-0.334-0.308-0.334-0.613 c0-0.152,0.034-0.337,0.105-0.554c0.07-0.217,0.17-0.471,0.299-0.762l6.21-14.199l-0.933,0.156 c-0.645,0.108-1.084,0.082-1.318-0.079c-0.235-0.16-0.353-0.375-0.353-0.645c0-0.282,0.146-0.579,0.439-0.892 c0.294-0.313,0.722-0.517,1.284-0.611l2.076-0.348c0.833-1.816,1.669-3.34,2.508-4.571c0.838-1.231,1.662-2.231,2.472-3 c0.809-0.769,1.598-1.34,2.366-1.715c0.768-0.375,1.504-0.621,2.208-0.739c0.328-0.055,0.642-0.043,0.94,0.036 c0.3,0.08,0.563,0.229,0.792,0.448c0.229,0.22,0.414,0.515,0.555,0.884c0.141,0.37,0.211,0.818,0.211,1.346 c0,0.504-0.07,1.073-0.211,1.707c-0.035,0.17-0.105,0.32-0.211,0.449c-0.105,0.129-0.224,0.24-0.352,0.332 c-0.13,0.091-0.259,0.163-0.388,0.214c-0.129,0.051-0.24,0.084-0.334,0.1c-0.235,0.039-0.452,0.02-0.651-0.059 c-0.199-0.078-0.299-0.234-0.299-0.468c0-0.153,0.009-0.295,0.026-0.427c0.018-0.132,0.026-0.262,0.026-0.391 c0-0.493-0.092-0.83-0.272-1.01c-0.183-0.181-0.426-0.246-0.73-0.194c-0.363,0.061-0.789,0.29-1.275,0.688 c-0.487,0.398-0.979,0.903-1.478,1.514c-0.499,0.611-0.977,1.292-1.435,2.043c-0.457,0.751-0.832,1.502-1.126,2.255l4.1-0.686 c0.363-0.061,0.703-0.112,1.021-0.153c0.316-0.041,0.595-0.052,0.835-0.034c0.241,0.019,0.429,0.084,0.563,0.196 c0.135,0.112,0.202,0.297,0.202,0.555c0,0.129-0.023,0.262-0.069,0.399c-0.048,0.137-0.127,0.271-0.238,0.4 c-0.111,0.13-0.267,0.25-0.466,0.359C188.854,22.035,188.596,22.127,188.279,22.204z M203.779,25.398 c-0.517,0.673-1.117,1.345-1.804,2.017s-1.393,1.286-2.12,1.841c-0.727,0.556-1.442,1.024-2.146,1.406 c-0.703,0.382-1.337,0.62-1.899,0.714c-0.563,0.094-1.021,0.013-1.373-0.245c-0.352-0.258-0.527-0.768-0.527-1.53 c0-0.54,0.094-1.183,0.281-1.93c-0.305,0.509-0.686,1.036-1.144,1.582c-0.457,0.545-0.979,1.061-1.565,1.546 c-0.587,0.485-1.243,0.909-1.971,1.271c-0.728,0.362-1.52,0.615-2.375,0.758c-0.387,0.064-0.759,0.086-1.117,0.063 c-0.358-0.022-0.672-0.11-0.941-0.264c-0.27-0.154-0.486-0.385-0.65-0.692c-0.165-0.307-0.247-0.712-0.247-1.217 c0-0.011,0.023-0.194,0.071-0.548c0.047-0.354,0.195-0.924,0.448-1.711c0.252-0.787,0.643-1.817,1.17-3.09 c0.528-1.273,1.272-2.834,2.234-4.684c0.246-0.487,0.53-0.854,0.853-1.102c0.323-0.248,0.672-0.403,1.048-0.466 c0.164-0.027,0.334-0.035,0.51-0.023c0.176,0.011,0.34,0.048,0.493,0.111c0.151,0.062,0.274,0.153,0.369,0.272 c0.094,0.12,0.141,0.267,0.141,0.442c0,0.118-0.018,0.232-0.053,0.343c-0.059,0.209-0.185,0.491-0.378,0.846 c-0.194,0.355-0.42,0.763-0.678,1.222c-0.259,0.46-0.531,0.954-0.818,1.483s-0.554,1.072-0.8,1.629 c-0.247,0.558-0.458,1.118-0.634,1.68c-0.176,0.563-0.275,1.1-0.3,1.607c0,0.211,0.06,0.395,0.177,0.551 c0.117,0.157,0.311,0.212,0.58,0.167c0.763-0.127,1.49-0.46,2.182-0.999c0.692-0.538,1.332-1.17,1.918-1.896 c0.586-0.725,1.117-1.489,1.592-2.29c0.476-0.801,0.871-1.527,1.188-2.178c0.223-0.436,0.42-0.897,0.59-1.383 c0.17-0.485,0.354-0.939,0.554-1.359c0.2-0.42,0.429-0.781,0.687-1.082c0.258-0.301,0.581-0.484,0.968-0.549 c0.422-0.071,0.756,0.008,1.003,0.237c0.246,0.229,0.369,0.531,0.369,0.906c0,0.211-0.079,0.515-0.237,0.911 s-0.358,0.852-0.599,1.367c-0.24,0.516-0.501,1.066-0.782,1.653c-0.282,0.587-0.543,1.179-0.783,1.776 c-0.241,0.597-0.439,1.176-0.599,1.736c-0.158,0.56-0.237,1.069-0.237,1.526c0,0.422,0.259,0.59,0.774,0.504 c0.363-0.061,0.814-0.242,1.354-0.543c0.539-0.301,1.105-0.692,1.698-1.172c0.592-0.48,1.184-1.028,1.776-1.643 c0.592-0.615,1.117-1.26,1.575-1.935L203.779,25.398z M204.325,24.427c-0.13,0.292-0.256,0.626-0.379,1.004 c-0.123,0.379-0.185,0.708-0.185,0.99c0,0.176,0.035,0.311,0.105,0.405s0.205,0.124,0.404,0.091 c0.246-0.042,0.555-0.166,0.924-0.375s0.768-0.469,1.196-0.781s0.874-0.662,1.337-1.051c0.464-0.388,0.924-0.788,1.381-1.198 c0.458-0.411,0.895-0.818,1.312-1.223c0.416-0.404,0.788-0.774,1.117-1.11c0.094-0.098,0.205-0.175,0.334-0.232 c0.129-0.057,0.24-0.093,0.334-0.109c0.235-0.039,0.429,0.011,0.581,0.149s0.229,0.343,0.229,0.612c0,0.247-0.082,0.536-0.246,0.868 c-0.164,0.333-0.452,0.68-0.862,1.042c-0.751,0.818-1.507,1.602-2.27,2.351c-0.763,0.75-1.522,1.424-2.278,2.026 c-0.756,0.602-1.508,1.105-2.252,1.512c-0.745,0.406-1.469,0.668-2.173,0.786c-0.481,0.081-0.883,0.083-1.205,0.008 s-0.581-0.208-0.774-0.398c-0.193-0.191-0.331-0.432-0.413-0.723s-0.123-0.607-0.123-0.947c0-0.574,0.085-1.178,0.255-1.811 s0.373-1.22,0.607-1.764c0.41-0.983,0.826-1.962,1.249-2.936c0.422-0.974,0.81-1.865,1.161-2.675l5.33-12.24 c0.212-0.493,0.496-0.863,0.854-1.11c0.358-0.247,0.719-0.402,1.082-0.462c0.363-0.061,0.695-0.017,0.994,0.132 c0.299,0.15,0.448,0.447,0.448,0.893c0,0.211-0.05,0.443-0.149,0.694c-0.099,0.251-0.226,0.524-0.378,0.82 c-0.293,0.601-0.643,1.333-1.047,2.198c-0.404,0.866-0.839,1.806-1.302,2.822c-0.464,1.016-0.938,2.072-1.425,3.167 c-0.487,1.096-0.963,2.164-1.426,3.203s-0.896,2.023-1.302,2.954C204.967,22.938,204.617,23.745,204.325,24.427z M128.476,106.198 l3.118-0.522l-0.125,0.597l-2.476,0.414l-0.451,2.188l2.043-0.343l-0.115,0.596l-2.043,0.342l-0.547,2.654l2.476-0.414l-0.125,0.597 l-3.118,0.521L128.476,106.198z M134.695,108.382c-0.643-0.324-1.065-0.562-0.864-1.535c0.183-0.895,0.921-1.786,1.833-1.938 c0.902-0.15,1.2,0.442,1.2,1.249l-0.653,0.205c0-0.471-0.134-0.918-0.681-0.827c-0.604,0.102-0.94,0.647-1.055,1.204 c-0.106,0.536-0.048,0.689,0.834,1.146c0.681,0.356,1.142,0.673,0.931,1.696c-0.211,1.044-0.921,1.959-1.996,2.139 c-1.132,0.189-1.382-0.518-1.267-1.555l0.662-0.197c-0.067,0.723-0.029,1.253,0.749,1.123c0.557-0.093,1.036-0.548,1.199-1.343 C135.76,108.875,135.28,108.668,134.695,108.382z M140.933,104.688l-1.382,0.231l0.125-0.597l3.377-0.564l-0.125,0.596l-1.353,0.227 l-1.238,6.033l-0.643,0.108L140.933,104.688z M145.617,108.311l0.883-0.147l-0.297,1.47l-0.883,0.147L145.617,108.311z M155.618,107.481l3.021-3.567c0.375-0.447,0.672-0.794,0.787-1.332c0.125-0.625-0.183-1.016-0.806-0.911 c-0.758,0.127-1.267,0.808-1.506,1.538l-0.614,0.018c0.373-1.129,1.122-1.993,2.254-2.183c1.008-0.168,1.564,0.353,1.354,1.405 c-0.135,0.637-0.547,1.186-1.008,1.733l-2.668,3.162l2.754-0.46l-0.124,0.596l-3.569,0.598L155.618,107.481z M165.502,103.207 c-0.221,1.064-0.527,3.371-2.484,3.698c-1.958,0.328-1.324-1.957-1.085-3.101c0.317-1.56,0.624-3.396,2.485-3.708 C166.452,99.756,165.655,102.462,165.502,103.207z M162.604,103.692c-0.537,2.604-0.115,2.697,0.537,2.588 c0.739-0.124,1.181-0.495,1.688-2.961c0.528-2.564,0.135-2.71-0.547-2.596C163.075,100.926,162.873,102.371,162.604,103.692z M171.261,102.243c-0.222,1.064-0.528,3.371-2.485,3.699c-1.957,0.327-1.324-1.958-1.084-3.102c0.316-1.56,0.623-3.396,2.484-3.708 C172.21,98.793,171.414,101.498,171.261,102.243z M168.363,102.729c-0.538,2.604-0.115,2.697,0.536,2.588 c0.74-0.123,1.182-0.495,1.689-2.961c0.527-2.564,0.134-2.71-0.547-2.596C168.833,99.962,168.632,101.407,168.363,102.729z M173.594,104.051c0.24,0.229,0.519,0.394,0.931,0.324c1.16-0.194,1.545-1.736,1.756-2.626c-0.441,0.4-0.874,0.664-1.372,0.748 c-1.209,0.202-1.439-0.748-1.219-1.851c0.24-1.173,1.056-2.278,2.284-2.483c1.659-0.278,1.323,1.774,1.064,3.037 c-0.269,1.351-0.873,3.506-2.619,3.798c-0.519,0.086-0.988-0.037-1.306-0.339L173.594,104.051z M175.801,98.797 c-0.787,0.131-1.257,0.901-1.43,1.717c-0.153,0.755-0.105,1.486,0.757,1.342c0.452-0.075,0.922-0.471,1.307-0.833 C176.846,98.986,176.405,98.695,175.801,98.797z M73.942,93.839V78.715l1.75-0.293c2.058-0.344,3.169-0.119,3.766,0.934 c0.577,1.056,0.659,2.935,0.659,5.899c0,2.963-0.082,4.849-0.659,6.098c-0.597,1.252-1.708,1.85-3.766,2.194L73.942,93.839z M76.165,91.245c0.762-0.128,1.194-0.282,1.42-1.061c0.103-0.367,0.185-0.916,0.206-1.64c0.021-0.724,0.021-1.69,0.021-2.925 c0-1.235,0-2.202-0.021-2.919c-0.021-0.696-0.103-1.217-0.206-1.57c-0.227-0.683-0.659-0.693-1.42-0.565V91.245z M85.713,76.746 l5.084-0.851v2.284l-2.861,0.479v3.972l2.058-0.344v2.428l-2.058,0.344v4.157l2.861-0.479v2.283l-5.084,0.851V76.746z M99.831,89.507l-1.42-9.269l-0.083-0.625l-0.124,0.021v10.145l-2.058,0.345V75l2.717-0.455l1.317,6.693l0.103,0.785l0.041-0.007 l0.104-0.819l1.317-7.135l2.717-0.455v15.125l-2.058,0.345V78.932l-0.124,0.021l-0.083,0.651l-1.42,9.745L99.831,89.507z M116.006,83.693c-0.021,0.62-0.144,1.197-0.371,1.708c-0.185,0.442-0.473,0.882-0.885,1.259c-0.412,0.398-0.967,0.677-1.708,0.801 c-0.741,0.124-1.317,0.035-1.729-0.226c-0.412-0.239-0.679-0.586-0.864-0.966c-0.227-0.436-0.35-0.971-0.371-1.584v-8.911 c0.021-0.6,0.144-1.176,0.371-1.687c0.185-0.443,0.453-0.899,0.864-1.277s0.988-0.68,1.729-0.804 c0.741-0.124,1.296-0.011,1.708,0.229s0.7,0.604,0.885,0.984c0.227,0.436,0.35,0.97,0.371,1.563V83.693z M113.784,75.155 c0-0.412-0.082-0.686-0.288-0.898c-0.103-0.086-0.268-0.12-0.453-0.089c-0.391,0.066-0.577,0.385-0.659,0.666 c-0.062,0.175-0.083,0.363-0.083,0.569v8.91c0,0.432,0.103,0.702,0.309,0.895c0.103,0.086,0.247,0.123,0.433,0.092 c0.391-0.064,0.576-0.343,0.659-0.666c0.062-0.154,0.082-0.343,0.082-0.568V75.155z M123.97,77.586l-0.185-0.669l-0.124,0.021v8.581 l-2.038,0.341V70.736l1.976-0.331l2.162,7.52l0.185,0.669l0.124-0.021v-8.581l2.038-0.341v15.124l-1.976,0.331L123.97,77.586z M137.552,72.124c0-0.494-0.021-1.045-0.165-1.454c-0.144-0.387-0.371-0.637-0.72-0.579c-0.576,0.117-0.762,0.745-0.762,1.629 c0,0.514,0.227,1.011,0.556,1.532c0.33,0.521,0.761,1.045,1.194,1.611c0.515,0.675,1.029,1.371,1.42,2.066 c0.391,0.696,0.659,1.434,0.659,2.257c0,1.008-0.165,1.982-0.638,2.761c-0.473,0.779-1.235,1.359-2.449,1.562 c-1.42,0.237-2.223-0.163-2.675-0.91s-0.556-1.821-0.556-2.953l2.182-0.571c0,0.638,0.021,1.272,0.185,1.718 c0.144,0.471,0.391,0.758,0.864,0.679c0.659-0.109,0.906-0.852,0.906-1.818c0-0.494-0.247-1.029-0.576-1.57 c-0.185-0.257-0.371-0.535-0.576-0.809c-0.433-0.545-0.906-1.165-1.399-1.844c-0.494-0.679-0.864-1.399-1.091-2.164 c-0.123-0.37-0.185-0.771-0.185-1.183c0-0.823,0.185-1.739,0.659-2.497c0.474-0.738,1.194-1.332,2.243-1.528 c1.338-0.245,2.12,0.181,2.552,0.91c0.433,0.751,0.556,1.739,0.556,2.582L137.552,72.124z M144.26,69.232v-2.284l6.421-1.075v2.284 l-2.099,0.352v12.84l-2.223,0.372v-12.84L144.26,69.232z M159.634,79.5l-1.152-6.186l-0.597,0.1v6.378l-2.224,0.372V65.041 l2.224-0.372c2.655-0.444,3.786,0.868,3.786,3.728c0,1.502-0.391,2.926-1.234,3.643l1.42,7.088L159.634,79.5z M157.885,71.355 c0.309-0.051,0.721-0.161,1.049-0.505c0.33-0.343,0.598-0.943,0.598-2.014c0-1.07-0.268-1.601-0.598-1.834 c-0.328-0.232-0.74-0.184-1.049-0.132V71.355z M166.589,78.335l2.284-15.506l2.717-0.455l2.284,14.742l-2.16,0.362l-0.412-3.018 l-2.141,0.358l-0.411,3.155L166.589,78.335z M170.355,67.499l-0.062-0.381l-0.123,0.021l-0.062,0.401l-0.639,4.881l1.523-0.255 L170.355,67.499z M177.784,63.622v-2.284l6.421-1.075v2.284l-2.099,0.351v12.84l-2.224,0.372v-12.84L177.784,63.622z M189.185,59.43 l2.224-0.372v15.124l-2.224,0.372V59.43z M202.952,69.143c-0.02,0.621-0.144,1.197-0.37,1.708c-0.185,0.442-0.473,0.882-0.885,1.259 c-0.411,0.398-0.967,0.676-1.708,0.8s-1.317,0.035-1.729-0.225c-0.411-0.239-0.679-0.586-0.863-0.967 c-0.228-0.435-0.351-0.97-0.371-1.583v-8.91c0.021-0.601,0.144-1.177,0.371-1.688c0.185-0.442,0.452-0.899,0.863-1.276 c0.412-0.377,0.988-0.679,1.729-0.803s1.297-0.012,1.708,0.228c0.412,0.24,0.7,0.604,0.885,0.984c0.227,0.435,0.351,0.97,0.37,1.563 V69.143z M200.73,60.605c0-0.412-0.083-0.686-0.289-0.898c-0.103-0.086-0.267-0.12-0.452-0.089 c-0.392,0.065-0.576,0.384-0.658,0.666c-0.062,0.175-0.083,0.363-0.083,0.569v8.91c0,0.432,0.104,0.703,0.309,0.895 c0.104,0.085,0.247,0.123,0.433,0.092c0.391-0.065,0.576-0.343,0.658-0.666c0.062-0.154,0.083-0.343,0.083-0.569V60.605z M210.916,63.037l-0.185-0.669l-0.124,0.021v8.581l-2.037,0.341V56.187l1.976-0.331l2.161,7.519l0.186,0.669l0.123-0.021v-8.581 l2.037-0.341v15.124l-1.976,0.331L210.916,63.037z M224.498,57.574c0-0.494-0.021-1.046-0.164-1.454 c-0.145-0.388-0.371-0.638-0.721-0.579c-0.576,0.117-0.762,0.745-0.762,1.629c0,0.515,0.227,1.012,0.556,1.532 c0.33,0.521,0.762,1.045,1.193,1.611c0.515,0.675,1.03,1.371,1.421,2.067s0.658,1.433,0.658,2.256c0,1.009-0.164,1.982-0.638,2.761 s-1.235,1.359-2.449,1.562c-1.42,0.238-2.223-0.163-2.676-0.91c-0.452-0.748-0.556-1.821-0.556-2.953l2.182-0.571 c0,0.638,0.021,1.272,0.186,1.718c0.144,0.47,0.391,0.758,0.864,0.679c0.658-0.11,0.905-0.851,0.905-1.819 c0-0.494-0.247-1.028-0.576-1.57c-0.185-0.257-0.37-0.535-0.576-0.809c-0.433-0.545-0.905-1.166-1.399-1.844 s-0.864-1.398-1.091-2.163c-0.124-0.37-0.186-0.771-0.186-1.183c0-0.823,0.186-1.739,0.659-2.497 c0.474-0.738,1.193-1.332,2.243-1.528c1.338-0.245,2.12,0.18,2.552,0.911c0.433,0.75,0.556,1.738,0.556,2.582L224.498,57.574z M104.578,145.636v3.263c-0.032,0.975-0.226,1.879-0.582,2.682c-0.29,0.694-0.743,1.384-1.389,1.978 c-0.646,0.624-1.519,1.062-2.682,1.256c-1.164,0.195-2.068,0.056-2.714-0.354c-0.646-0.376-1.066-0.919-1.357-1.517 c-0.355-0.685-0.549-1.524-0.582-2.488v-13.989c0.033-0.942,0.227-1.847,0.582-2.649c0.291-0.695,0.711-1.411,1.357-2.004 c0.646-0.593,1.55-1.067,2.714-1.262c1.163-0.194,2.036-0.018,2.682,0.358c0.646,0.377,1.099,0.947,1.389,1.545 c0.356,0.684,0.55,1.523,0.582,2.454v3.264l-3.263,0.546v-3.263c0-0.646-0.162-1.071-0.517-1.399 c-0.161-0.135-0.452-0.184-0.808-0.124c-0.614,0.103-0.905,0.604-1.066,1.051c-0.097,0.275-0.129,0.571-0.162,0.899v13.989 c0.032,0.674,0.227,1.093,0.55,1.396c0.162,0.134,0.387,0.193,0.678,0.144c0.743-0.124,1.034-0.561,1.195-1.071 c0.097-0.243,0.129-0.539,0.129-0.895v-3.263L104.578,145.636z M122.217,145.946c-0.032,0.975-0.226,1.879-0.582,2.683 c-0.291,0.694-0.743,1.384-1.389,1.977c-0.646,0.625-1.519,1.062-2.682,1.257c-1.163,0.194-2.068,0.055-2.714-0.354 c-0.646-0.377-1.066-0.921-1.356-1.519c-0.355-0.683-0.549-1.523-0.582-2.487v-13.989c0.032-0.942,0.226-1.847,0.582-2.649 c0.291-0.694,0.711-1.411,1.356-2.004c0.646-0.593,1.551-1.067,2.714-1.262s2.036-0.018,2.682,0.358 c0.646,0.377,1.099,0.947,1.389,1.545c0.355,0.684,0.549,1.523,0.582,2.455V145.946z M118.728,132.541 c0-0.646-0.129-1.077-0.452-1.411c-0.162-0.134-0.42-0.188-0.711-0.139c-0.614,0.103-0.905,0.604-1.034,1.045 c-0.097,0.275-0.129,0.57-0.129,0.894v13.989c0,0.679,0.162,1.104,0.484,1.405c0.162,0.135,0.388,0.193,0.679,0.146 c0.614-0.103,0.905-0.539,1.034-1.046c0.097-0.242,0.129-0.538,0.129-0.894V132.541z M131.037,149.349v-23.746l2.746-0.46 c3.231-0.54,4.976-0.186,5.912,1.467c0.905,1.657,1.034,4.608,1.034,9.261s-0.129,7.613-1.034,9.575 c-0.937,1.965-2.681,2.903-5.912,3.444L131.037,149.349z M134.526,145.275c1.195-0.2,1.874-0.442,2.229-1.665 c0.162-0.576,0.291-1.438,0.323-2.574c0.032-1.136,0.032-2.654,0.032-4.593s0-3.457-0.032-4.583 c-0.033-1.093-0.162-1.911-0.323-2.465c-0.355-1.072-1.035-1.088-2.229-0.888V145.275z M155.752,145.213l-1.81-9.713l-0.937,0.157 v10.016l-3.489,0.584v-23.746l3.489-0.584c4.167-0.697,5.945,1.363,5.945,5.854c0,2.358-0.614,4.594-1.939,5.721l2.229,11.128 L155.752,145.213z M153.006,132.427c0.484-0.081,1.13-0.255,1.647-0.793c0.517-0.539,0.938-1.481,0.938-3.161 c0-1.681-0.421-2.515-0.938-2.881c-0.518-0.365-1.163-0.29-1.647-0.209V132.427z M176.72,136.825 c-0.033,0.975-0.227,1.88-0.582,2.683c-0.29,0.694-0.743,1.384-1.389,1.977c-0.646,0.625-1.519,1.062-2.683,1.257 c-1.162,0.195-2.066,0.056-2.714-0.354c-0.646-0.377-1.065-0.92-1.356-1.518c-0.355-0.684-0.549-1.523-0.582-2.487v-13.989 c0.033-0.942,0.227-1.848,0.582-2.65c0.291-0.694,0.711-1.41,1.356-2.004c0.647-0.593,1.552-1.066,2.714-1.261 c1.164-0.195,2.036-0.019,2.683,0.358c0.646,0.376,1.099,0.946,1.389,1.544c0.355,0.684,0.549,1.523,0.582,2.455V136.825z M173.23,123.42c0-0.646-0.129-1.077-0.452-1.41c-0.162-0.135-0.42-0.188-0.712-0.14c-0.613,0.103-0.904,0.604-1.033,1.046 c-0.097,0.274-0.129,0.57-0.129,0.894v13.989c0,0.679,0.161,1.104,0.484,1.405c0.162,0.135,0.388,0.193,0.678,0.145 c0.614-0.103,0.905-0.539,1.035-1.045c0.096-0.242,0.129-0.538,0.129-0.895V123.42z M185.539,116.482l3.489-0.584 c1.519-0.255,3.037-0.121,4.2,0.783c1.163,0.903,1.938,2.583,1.938,5.297s-0.775,4.62-1.938,5.914 c-1.163,1.293-2.682,1.999-4.2,2.253v9.499l-3.489,0.584V116.482z M189.028,126.592c1.066-0.178,1.744-0.485,2.133-1.1 c0.387-0.582,0.483-1.471,0.483-2.795c0-1.325-0.097-2.245-0.483-2.763c-0.389-0.517-1.066-0.661-2.133-0.482V126.592z M209.155,118.895c0-0.775-0.032-1.643-0.258-2.283c-0.227-0.608-0.582-1.001-1.131-0.909c-0.905,0.184-1.195,1.169-1.195,2.559 c0,0.808,0.355,1.588,0.872,2.406c0.518,0.818,1.195,1.642,1.874,2.529c0.808,1.061,1.615,2.153,2.229,3.246 c0.614,1.093,1.034,2.25,1.034,3.542c0,1.583-0.258,3.112-1.001,4.335c-0.743,1.224-1.938,2.135-3.846,2.453 c-2.229,0.373-3.489-0.256-4.199-1.43c-0.711-1.173-0.872-2.858-0.872-4.635l3.424-0.896c0,1.001,0.032,1.997,0.291,2.697 c0.227,0.737,0.613,1.189,1.356,1.065c1.035-0.173,1.422-1.337,1.422-2.854c0-0.776-0.387-1.615-0.904-2.466 c-0.29-0.404-0.582-0.84-0.904-1.271c-0.679-0.855-1.423-1.83-2.197-2.896c-0.775-1.065-1.356-2.196-1.713-3.396 c-0.193-0.581-0.29-1.211-0.29-1.857c0-1.292,0.29-2.73,1.033-3.921c0.743-1.158,1.874-2.091,3.522-2.398 c2.1-0.384,3.327,0.283,4.006,1.43c0.679,1.179,0.872,2.729,0.872,4.054L209.155,118.895z" />
						</svg>
					</h1>
					<div className="ip-loader">
						<svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
							<path className="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
							<path ref="ipLoaderCircle" className="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
						</svg>
					</div>
				</header>
				<div className="ip-main">
					<nav className="codrops-demos">
						<a className="current-demo" href="index.html">Demo 1</a>
						<a href="index2.html">Demo 2</a>
					</nav>
					<h2>Make yourself at home.</h2>
					<div className="browser clearfix">
						<div className="box">
							<div className="box-main">
								<div className="box-img">
									<img alt="alt text" src={"img/" + this.state.image} />
								</div>
								<div className="box-inner">
									<p>Lorem ipsum dolor sit amet.<br/>Consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
						<div className="box">
							<div className="box-main">
								<div className="box-img">
									<img alt="alt text" src={"img/" + this.state.image} />
								</div>
								<div className="box-inner">
									<p>Lorem ipsum dolor sit amet.<br/>Consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
						<div className="box">
							<div className="box-main">
								<div className="box-img">
									<img alt="alt text" src={"img/" + this.state.image} />
								</div>
								<div className="box-inner">
									<p>Lorem ipsum dolor sit amet.<br/>Consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
 		);
 	},

 	_startLoading() {
 		var circle = React.findDOMNode(this.refs.ipLoaderCircle);
 		var progress = 0;
 		let self = this;
 		circle.style.strokeDasharray = circle.style.strokeDashoffset = circle.getTotalLength();
 		var interval = setInterval(function(){
			 				progress = Math.min( progress + Math.random() * 0.1, 1 );
			 				circle.style.strokeDashoffset = circle.getTotalLength() * ( 1 - progress );
			 				if ( progress === 1 ) {
								clearInterval( interval );
								self._changClass();
							};
			 		}, 80);
 	},

 	_changClass() {
 		this.setState({
 			demo : "layout-switch",
			container : "ip-container loaded"
 		});
 		console.log("ok");
 	}

});

module.exports = Main;