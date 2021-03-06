class MouseCursor {
    constructor(runtime) {
        this.runtime = runtime;
        this.stage = document.body.querySelector(".stage_stage_1fD7k.box_box_2jjDp");
    }

    getInfo() {
        return {
            "id": "MouseCursor",
            "name": "Cursor",
            "blocks": [
                {
                    "opcode": "SwitchCur",
                    "blockType": "command",
                    "text": "switch cursor to [cur]",
                    "arguments": {
                        "cur": {
                            "type": "string",
                            "defaultValue": "pointer",
                            "menu": "cursors"
                        },
                    },
                },
                {
                    "opcode": "hide",
                    "blockType": "command",
                    "text": "hide cursor",
                },
                {
                    "opcode": "reset",
                    "blockType": "command",
                    "text": "reset cursor",
                },
                {
                    "opcode": "GetCur",
                    "blockType": "reporter",
                    "text": "cursor",
                },
            ],

            "menus": {
                "cursors": {
                    acceptReporters: true, 
                    items: [{text:"default",value:"default"}, {text:"pointer",value:"pointer"}, {text:"crosshair",value:"crosshair"}, {text:"move",value:"move"}, {text:"text",value:"text"}, {text:"wait",value:"wait"}, {text:"progress",value:"progress"}, {text:"help",value:"help"}],
                }
            }     
        };
    }

    SwitchCur({cur}) {
        this.stage.style.cursor = cur;
    }

    hide() {
        this.stage.style.cursor = "none";
    }
    
    reset() {
        this.stage.style.cursor = "auto";
    }

    GetCur() {
        return this.stage.style.cursor;
    }
}

(function() {
    var extensionInstance = new MouseCursor(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
