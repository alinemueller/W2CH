import wixUsers from 'wix-users';
import {MainService} from 'public/todoitems/services/main.service.js'
import {RepositoryFactory} from 'public/todoitems/repository/repositoryfactory.js'
export class MessageHandlerService {
	 constructor(event, days, component, interval) {
		this.event = event;
		this.days = days.days;
		this.component = component;
		if(interval){
			clearInterval(interval);
		}
		this.repository = RepositoryFactory.get(days);
		if (event) {
			this.init();
		}
	}

	async init() {
		try {
			let tasks = this.event.data.tasks;
			console.log(console.log('WIX_ENV: data received from APP_ENV', this.event.data));

			if (this.event.data.hasOwnProperty("POST")) {
				if (!tasks) {
					throw new Error(`Tasks were not sent to wix : received data: ${this.event.data}`);
				}

				let entity = {
					tasks: tasks,
					email: undefined,
					movedate: undefined
				};
				let localData = await this.repository.save(entity);
				return await this.component.postMessage({ "saved": "true", "tasks": localData.tasks, "days": this.days }, '*');
			}

			if (this.event.data.hasOwnProperty("GET")) {
				let localdata = await this.repository.get();
				if (localdata) {
					let dataLs = JSON.parse(localdata);
					return await this.component.postMessage({ "get from local storage": "true", "tasks": dataLs.tasks, "days": this.days }, '*');
				}
				let result = await this.repository.list(this.days);
				return await this.component.postMessage({ "tasks": result.items, "days": this.days }, "*");
			}

		} catch (err) {
			console.log(`WIX_APP_ERR_LC_STORAGE: ${err.message} ${err.stack}`);
            if(this.interval){
                clearInterval(this.interval)
            }
		}
	}

	
}