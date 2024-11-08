class BaseRepositoryInterface {
    constructor(adapterModel, domainModel) {
        this.adapterModel = adapterModel
        this.domainModel = domainModel
    }
}

module.exports = BaseRepositoryInterface

