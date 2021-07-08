class MouseCursor {
    constructor(runtime) {
        this.runtime = runtime
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
        document.body.style.cursor = cur;
    }

    hide() {
        document.body.style.cursor = "none";
    }
    
    reset() {
        document.body.style.cursor = "auto";
    }

    GetCur() {
        let cur = document.body.style.cursor;
        return cur;
    }
}

(function() {
    var extensionInstance = new MouseCursor(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
