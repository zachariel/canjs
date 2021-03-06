// index.js
import view from './index.stache';
import DefineMap from 'can-define/map/';
import Todo from '~/models/todo';
import '~/models/todos-fixture';
import test from 'can-todomvc-test';
var AppViewModel = DefineMap.extend("AppViewModel",{
	appName: "string",
    todosList: {
		get: function(lastSet, resolve) {
			Todo.getList({}).then(resolve);
		}
	}
});

var appVM = window.appVM = new AppViewModel({
	appName: "TodoMVC"
});

var frag = view(appVM);
document.body.appendChild(frag);
test(appVM);
