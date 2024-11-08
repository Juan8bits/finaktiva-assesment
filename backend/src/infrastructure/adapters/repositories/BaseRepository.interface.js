class BaseRepositoryInterface {
    constructor(adapterModel, domainModel, functionErrorHandler) {
        this.adapterModel = adapterModel
        this.domainModel = domainModel
        this.functionErrorHandler = functionErrorHandler()
    }
    create(data) {
        throw new Error("Method 'create' must be implemented.");
    }

    findAll({ conditions, properties, order, limit, offset }) {
        throw new Error("Method 'findAll' must be implemented.");
    }
}

module.exports = BaseRepositoryInterface;

