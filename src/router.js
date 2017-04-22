/**
 * Created by lcfevr on 16/8/22.
 */
const routers = {
	'/index': {
		component (resolve) {
			require(['./views/index.vue'], resolve);
		}
	},
	'/game': {
		component (resolve) {
			require(['./views/game.vue'], resolve);
		}
	},
	'/record': {
		component (resolve) {
			require(['./views/record.vue'], resolve);
		}
	},
	'/money': {
		component (resolve) {
			require(['./views/money.vue'], resolve);
		}
	},
	'/rank': {
		component (resolve) {
			require(['./views/rank.vue'], resolve);
		}
	},
	'/profit': {
		component (resolve) {
			require(['./views/profit.vue'], resolve);
		}
	},
	'/recharge': {
		component (resolve) {
			require(['./views/recharge.vue'], resolve);
		}
	}
};
export default routers;