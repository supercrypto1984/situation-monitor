// Map configuration - hotspots, conflict zones, and strategic locations

export interface Hotspot {
	name: string;
	lat: number;
	lon: number;
	level: 'critical' | 'high' | 'elevated' | 'low';
	desc: string;
}

export interface ConflictZone {
	name: string;
	coords: [number, number][];
	color: string;
}

export interface Chokepoint {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface CableLanding {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface NuclearSite {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface MilitaryBase {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface Ocean {
	name: string;
	lat: number;
	lon: number;
}

export const THREAT_COLORS = {
	critical: '#ff0000',
	high: '#ff4444',
	elevated: '#ffcc00',
	low: '#00ff88'
} as const;

export const SANCTIONED_COUNTRY_IDS = [
	364, // Iran
	408, // North Korea
	760, // Syria
	862, // Venezuela
	112, // Belarus
	643, // Russia
	728, // South Sudan
	729 // Sudan
];

export const HOTSPOTS: Hotspot[] = [
	{
		name: 'DC',
		lat: 38.9,
		lon: -77.0,
		level: 'low',
		desc: '华盛顿特区 — 美国政治中心，白宫、五角大楼、国会山'
	},
	{
		name: 'Moscow',
		lat: 55.75,
		lon: 37.6,
		level: 'elevated',
		desc: '莫斯科 — 克里姆林宫，俄罗斯军事指挥部，制裁中心'
	},
	{
		name: 'Beijing',
		lat: 39.9,
		lon: 116.4,
		level: 'elevated',
		desc: '北京 — 中国共产党总部，中美紧张关系，科技竞争'
	},
	{
		name: 'Kyiv',
		lat: 50.45,
		lon: 30.5,
		level: 'high',
		desc: '基辅 — 活跃冲突区，俄罗斯入侵仍在进行'
	},
	{
		name: 'Taipei',
		lat: 25.03,
		lon: 121.5,
		level: 'elevated',
		desc: '台北 — 台湾海峡紧张局势，台积电，中国威胁'
	},
	{
		name: 'Tehran',
		lat: 35.7,
		lon: 51.4,
		level: 'critical',
		desc: '德黑兰 — 活跃起义：200+城市，26省。革命抗议，政权不稳定，核计划'
	},
	{
		name: 'Tel Aviv',
		lat: 32.07,
		lon: 34.78,
		level: 'high',
		desc: '特拉维夫 — 以巴冲突，军事行动活跃'
	},
	{
		name: 'London',
		lat: 51.5,
		lon: -0.12,
		level: 'low',
		desc: '伦敦 — 金融中心，五眼联盟，北约盟友'
	},
	{
		name: 'Brussels',
		lat: 50.85,
		lon: 4.35,
		level: 'low',
		desc: '布鲁塞尔 — 欧盟/北约总部，欧洲政策'
	},
	{
		name: 'Pyongyang',
		lat: 39.03,
		lon: 125.75,
		level: 'elevated',
		desc: '平壤 — 朝鲜核威胁，导弹试验'
	},
	{
		name: 'Riyadh',
		lat: 24.7,
		lon: 46.7,
		level: 'elevated',
		desc: '利雅得 — 沙特石油，OPEC+，也门冲突，地区强国'
	},
	{
		name: 'Delhi',
		lat: 28.6,
		lon: 77.2,
		level: 'low',
		desc: '德里 — 印度崛起中的强国，中印边境紧张'
	},
	{
		name: 'Singapore',
		lat: 1.35,
		lon: 103.82,
		level: 'low',
		desc: '新加坡 — 航运要冲，亚洲金融中心'
	},
	{
		name: 'Tokyo',
		lat: 35.68,
		lon: 139.76,
		level: 'low',
		desc: '东京 — 美国盟友，地区安全，经济强国'
	},
	{
		name: 'Caracas',
		lat: 10.5,
		lon: -66.9,
		level: 'high',
		desc: '加拉加斯 — 委内瑞拉危机，马杜罗政权，美国制裁，人道主义紧急情况'
	},
	{
		name: 'Nuuk',
		lat: 64.18,
		lon: -51.72,
		level: 'elevated',
		desc: '努克 — 格陵兰，美国收购意向，北极战略，丹麦紧张关系'
	}
];

export const CONFLICT_ZONES: ConflictZone[] = [
	{
		name: 'Ukraine',
		coords: [
			[30, 52],
			[40, 52],
			[40, 45],
			[30, 45],
			[30, 52]
		],
		color: '#ff4444'
	},
	{
		name: 'Gaza',
		coords: [
			[34, 32],
			[35, 32],
			[35, 31],
			[34, 31],
			[34, 32]
		],
		color: '#ff4444'
	},
	{
		name: 'Taiwan Strait',
		coords: [
			[117, 28],
			[122, 28],
			[122, 22],
			[117, 22],
			[117, 28]
		],
		color: '#ffaa00'
	},
	{
		name: 'Yemen',
		coords: [
			[42, 19],
			[54, 19],
			[54, 12],
			[42, 12],
			[42, 19]
		],
		color: '#ff6644'
	},
	{
		name: 'Sudan',
		coords: [
			[22, 23],
			[38, 23],
			[38, 8],
			[22, 8],
			[22, 23]
		],
		color: '#ff6644'
	},
	{
		name: 'Myanmar',
		coords: [
			[92, 28],
			[101, 28],
			[101, 10],
			[92, 10],
			[92, 28]
		],
		color: '#ff8844'
	}
];

export const CHOKEPOINTS: Chokepoint[] = [
	{
		name: 'Suez',
		lat: 30.0,
		lon: 32.5,
		desc: '苏伊士运河 — 全球12%的贸易量，连接欧亚的航线'
	},
	{
		name: 'Panama',
		lat: 9.1,
		lon: -79.7,
		desc: '巴拿马运河 — 美洲过境，连接太平洋与大西洋'
	},
	{
		name: 'Hormuz',
		lat: 26.5,
		lon: 56.5,
		desc: '霍尔木兹海峡 — 全球21%的石油运输，波斯湾出口'
	},
	{
		name: 'Malacca',
		lat: 2.5,
		lon: 101.0,
		desc: '马六甲海峡 — 全球25%的贸易量，中国供应链'
	},
	{
		name: 'Bab el-M',
		lat: 12.5,
		lon: 43.3,
		desc: '曼德海峡 — 红海门户，胡塞武装威胁区'
	},
	{ name: 'Gibraltar', lat: 36.0, lon: -5.5, desc: '直布罗陀海峡 — 地中海通道' },
	{
		name: 'Bosporus',
		lat: 41.1,
		lon: 29.0,
		desc: '博斯普鲁斯海峡 — 黑海通道，俄罗斯出口'
	}
];

export const CABLE_LANDINGS: CableLanding[] = [
	{ name: 'NYC', lat: 40.7, lon: -74.0, desc: '纽约 — 跨大西洋枢纽，10多条电缆' },
	{ name: 'Cornwall', lat: 50.1, lon: -5.5, desc: '英国康沃尔 — 欧美门户' },
	{ name: 'Marseille', lat: 43.3, lon: 5.4, desc: '马赛 — 地中海枢纽，SEA-ME-WE' },
	{ name: 'Mumbai', lat: 19.1, lon: 72.9, desc: '孟买 — 印度门户，10多条电缆' },
	{ name: 'Singapore', lat: 1.3, lon: 103.8, desc: '新加坡 — 亚太交汇点' },
	{ name: 'Hong Kong', lat: 22.3, lon: 114.2, desc: '香港 — 中国连接枢纽' },
	{ name: 'Tokyo', lat: 35.5, lon: 139.8, desc: '东京 — 跨太平洋终点' },
	{ name: 'Sydney', lat: -33.9, lon: 151.2, desc: '悉尼 — 澳大利亚/太平洋枢纽' },
	{ name: 'LA', lat: 33.7, lon: -118.2, desc: '洛杉矶 — 太平洋门户' },
	{ name: 'Miami', lat: 25.8, lon: -80.2, desc: '迈阿密 — 美洲/加勒比枢纽' }
];

export const NUCLEAR_SITES: NuclearSite[] = [
	{ name: 'Natanz', lat: 33.7, lon: 51.7, desc: '纳坦兹 — 伊朗铀浓缩设施' },
	{ name: 'Yongbyon', lat: 39.8, lon: 125.8, desc: '宁边 — 朝鲜核设施' },
	{ name: 'Dimona', lat: 31.0, lon: 35.1, desc: '迪莫纳 — 以色列核设施' },
	{ name: 'Bushehr', lat: 28.8, lon: 50.9, desc: '布什尔 — 伊朗核电站' },
	{
		name: 'Zaporizhzhia',
		lat: 47.5,
		lon: 34.6,
		desc: '扎波罗热 — 欧洲最大核电站，冲突区'
	},
	{ name: 'Chernobyl', lat: 51.4, lon: 30.1, desc: '切尔诺贝利 — 隔离区，2022年被占领' },
	{ name: 'Fukushima', lat: 37.4, lon: 141.0, desc: '福岛 — 退役地点' }
];

export const MILITARY_BASES: MilitaryBase[] = [
	{ name: 'Ramstein', lat: 49.4, lon: 7.6, desc: '拉姆施泰因 — 美国空军，北约德国枢纽' },
	{
		name: 'Diego Garcia',
		lat: -7.3,
		lon: 72.4,
		desc: '迪戈加西亚 — 美英印度洋基地'
	},
	{
		name: 'Okinawa',
		lat: 26.5,
		lon: 127.9,
		desc: '冲绳 — 驻日美军，太平洋存在'
	},
	{ name: 'Guam', lat: 13.5, lon: 144.8, desc: '关岛 — 美国太平洋司令部，轰炸机基地' },
	{
		name: 'Djibouti',
		lat: 11.5,
		lon: 43.1,
		desc: '吉布提 — 美中法基地，非洲之角'
	},
	{ name: 'Qatar', lat: 25.1, lon: 51.3, desc: '乌代德 — 美国中央司令部前沿总部' },
	{
		name: 'Kaliningrad',
		lat: 54.7,
		lon: 20.5,
		desc: '加里宁格勒 — 俄罗斯波罗的海飞地，导弹部署'
	},
	{ name: 'Sevastopol', lat: 44.6, lon: 33.5, desc: '塞瓦斯托波尔 — 俄罗斯黑海舰队' },
	{
		name: 'Hainan',
		lat: 18.2,
		lon: 109.5,
		desc: '海南 — 中国潜艇基地，南海'
	}
];

export const OCEANS: Ocean[] = [
	{ name: 'ATLANTIC', lat: 25, lon: -40 },
	{ name: 'PACIFIC', lat: 0, lon: -150 },
	{ name: 'INDIAN', lat: -20, lon: 75 },
	{ name: 'ARCTIC', lat: 75, lon: 0 },
	{ name: 'SOUTHERN', lat: -60, lon: 0 }
];

export const WEATHER_CODES: Record<number, string> = {
	0: '☀️ 晴朗',
	1: '🌤️ 大部晴朗',
	2: '⛅ 部分多云',
	3: '☁️ 阴天',
	45: '🌫️ 雾',
	48: '🌫️ 雾',
	51: '🌧️ 小雨',
	53: '🌧️ 小雨',
	55: '🌧️ 小雨',
	61: '🌧️ 雨',
	63: '🌧️ 雨',
	65: '🌧️ 大雨',
	71: '🌨️ 雪',
	73: '🌨️ 雪',
	75: '🌨️ 大雪',
	77: '🌨️ 雪',
	80: '🌧️ 阵雨',
	81: '🌧️ 阵雨',
	82: '⛈️ 大阵雨',
	85: '🌨️ 雪',
	86: '🌨️ 雪',
	95: '⛈️ 雷暴',
	96: '⛈️ 雷暴',
	99: '⛈️ 雷暴'
};
