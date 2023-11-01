import PropTypes from 'prop-types'

export function Button({text, name = ''}){
    return <button>
        {text} - {name}
    </button>
}

Button.prototype = {
    test : PropTypes.string.isRequired
}