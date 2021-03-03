import { extendObservable } from 'mobx';

class UserStores {
	constructor()
	{
		extendObservable(this, {
			loading: true,
			isLoggedIn: false,
			username: ''
		})
	}
}

export default new UserStores();