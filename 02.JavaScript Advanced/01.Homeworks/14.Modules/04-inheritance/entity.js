class Entity {
    constructor (name) {
        if (new.target === Entity) {
            throw new Error('Cannot create an isntance of an abstract class');
        }

        this.name = name;
    }
}

module.exports.Entity = Entity;
