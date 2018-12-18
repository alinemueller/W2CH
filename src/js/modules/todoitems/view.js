import * as app from "../../lib/app";

"use strict"

/*
  Extends app.View
      Properties: `el`
      Methods: `get()`, `getAll()` for DOM selectors
*/
export default class extends app.View {

    constructor() {
        super();
        this.el = document.getElementById("todosection");
    }

    renderToDoItems(model) {
        // Click on a close button to hide the current list item
        
        if (!model) { return; }
        if(model.days) {
            this.get('.h2-title').innerHTML = `${model.days} days before move`;
        }
        let list = Array.prototype.map.call(model.tasks, (item) => {
            let _class = "";
            if (item.state === "deleted") {
                return "";
            }
            if (item.state === "completed") {
                _class = "checked";
            }
            return `<li data-state="${!item.state ? "default" : item.state}" data-id="${item._id}" class="${_class ? "checked" : ""}">
                        <label class="checkbox-container ${_class}"> 
                            <input type="checkbox" ${_class ? "checked" : ""} class="${_class ? "checked" : ""}"><span class="todo-item-title">${item.title}</span><span class="checkmark"></span> 
                        </label><span class="close">×</span>
                    </li>`
        });

        this.get("#todolist").innerHTML = list.join("");
        
       
    }

};
