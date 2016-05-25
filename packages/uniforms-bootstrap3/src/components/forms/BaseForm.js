import classnames         from 'classnames';
import {PropTypes}        from 'react';
import {BaseForm as Base} from 'uniforms';

export default class BaseForm extends Base {
    getNativeFormProps () {
        const props = super.getNativeFormProps();

        return {
            ...props,
            className: classnames(
                'form',
                {
                    error: !!this.getChildContextError(),
                    'form-horizontal': !!props.grid
                },
                props.className
            )
        };
    }
    getChildContextState () {
        return {
            ...super.getChildContextState(),
            grid: this.props.grid
        };
    }
}

BaseForm.propTypes = {
    ...Base.propTypes,
    grid: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};