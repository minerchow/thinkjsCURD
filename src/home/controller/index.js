'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  * indexAction(){
    //auto render template file index_index.html
    //return this.display();
    let model = this.model('users');
    let data = yield model.findName();
    return this.success(data)
  }

  * addOneAction(){
      let model = this.model('users');
      let username = this.get("name");
      let password = this.get("password");
      let data = yield model.addOne(username,password);
      return this.success(data);
  }

  * updateAction(){
      let model = this.model('users');
      let username = this.get("name");
      let password = this.get("password");
      let id = this.get("id");
      let data = yield model.updateOne(id,username,password);
      return this.success(data);
  }

  * deleteAction(){
     let model = this.model('users');
     let id = this.get("id");
     let data = yield model.deleteOne(id);
     return this.success(data);
  }
}