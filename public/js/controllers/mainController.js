class mainController {

    constructor(phoneService) {
        this.phoneService = phoneService;
        this.load();
    }

    load() {
        this.phoneService.getAll().then((res) => {
            this.phones = res.data;
        })
    }

    create() {
        this.phoneService.create(this.phone).then(() => {
            this.phone = '';
            this.load()
        })
    }

    update(phone) {
        this.phoneService.update(phone._id, phone).then(() => {
            this.load()
        })
    }

    delete(phone) {
        this.phoneService.delete(phone._id).then(() => {
            this.load()
        })
    }

}
