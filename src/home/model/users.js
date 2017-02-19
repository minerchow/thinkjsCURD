'use strict';
/**
 * model
 */
export default class extends think.model.base {
    findName(){
        return this.where({username: "user1"}).find();
    }

    addOne(username,password){
        return this.add({username:username,password:password})
    }

    updateOne(id,username,password){
        return this.where({id:id}).update({username:username,password:password})
    }

    deleteOne(id){
        return this.where({id,id}).delete()
    }
}