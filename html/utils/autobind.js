function autobind(methodNames) {
    return {
        componentWillMount: function () {
            methodNames.forEach((name) => {
                this[name] = this[name].bind(this)
            })

            if (this._componentWillMount)
                this._componentWillMount()
        }
    }
}

export default autobind