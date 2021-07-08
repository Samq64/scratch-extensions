class MouseCursor {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "Mouse",
            "name": "Mouse",
            "blocks": [
                {
                    "opcode": "SwitchCur",
                    "blockType": "command",
                    "text": "switch mouse cursor to [cur]",
                    "arguments": {
                        "cur": {
                            "type": "string",
                            "defaultValue": "pointer"
                        },
                    },
                },
            ],
            // menus go here
        };
    }

    SwitchCur({cur}) {
        document.body.style.cursor = cur;
    }
}

(function() {
    var extensionInstance = new MouseCursor(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()