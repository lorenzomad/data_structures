const Node = (value) => {
    let _value = value

    let _right = null
    let _left = null

    return {
        get value() {
            return _value
        },
        set value(value) {
            _value = value
        },
        get left() {
            return _left
        },
        set left(left) {
            _left = left
        },
        get right() {
            return _right
        },
        set right(right) {
            _right = right
        }
    }
}

export default Node