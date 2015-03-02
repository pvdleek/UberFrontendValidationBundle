/**
 * Check if element value is false
 *
 * @author Alexandr Zhulev <alexandrzhulev@gmail.com>
 * @constructor
 */
function UberFalseValidationConstraint(field) {
    this.message = 'Value of {{value}} must have boolean value FALSE';

    this.validate = function () {
        var error = '';
        if (field.val() != false) {
            error = this.message.replace('{{value}}', String(parse_field_name(field.attr('name'))));
            if (field.attr('data-message') != '') {
                error = field.attr('data-message');
            }
        }

        return error;
    }
}
