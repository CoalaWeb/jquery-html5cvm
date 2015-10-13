
/**
 * @package             jQuery HTML5 Custom Validation Messages plugin
 * @author              Steven Palmer
 * @author url          https://github.com/CoalaWeb
 * @author email        support@coalaweb.com
 * @version             1.0.0
 * @date                13-10-2015
 * @copyright           Copyright (c) 2015 Steven Palmer All rights reserved.
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function ($) {

    $.fn.html5cvm = function (options) {

        // Establish our default settings
        var settings = $.extend({
            valueMissing: null,
            typeMismatch: null,
            patternMismatch: null,
            tooLong: null,
            rangeUnderflow: null,
            rangeOverflow: null,
            stepMismatch: null,
            generic: null
        }, options);

        return this.each(function () {

            //lets get our form ID
            var form = $(this).attr('id')

            //now to add some custom messages to our form
            $('#' + form + ' :input').on({
                //lets start out validity check
                invalid: function (e) {

                    //clear the custom validity value
                    e.target.setCustomValidity("");

                    //is the form element invalid?
                    if (!e.target.validity.valid) {

                        //initiate our msg variable
                        var msg;

                        //returns true if the element has no value but is a required field.
                        if (e.target.validity.valueMissing) {
                            if ($(this).data("error-value-missing")) {
                                msg = $(this).data("error-value-missing");
                            } else {
                                msg = settings.valueMissing;
                            }
                        }

                        //returns true if the element’s value doesn't match its type attribute.
                        if (e.target.validity.typeMismatch) {
                            if ($(this).data("error-type-mismatch")) {
                                msg = $(this).data("error-type-mismatch");
                            } else {
                                msg = settings.typeMismatch;
                            }
                        }

                        //returns true if the element’s value doesn't match its pattern attribute.
                        if (e.target.validity.patternMismatch) {
                            if ($(this).data("error-pattern-mismatch")) {
                                msg = $(this).data("error-pattern-mismatch");
                            } else {
                                msg = settings.patternMismatch;
                            }
                        }

                        //returns true if the element’s value exceeds its maxlength attribute.
                        if (e.target.validity.tooLong) {
                            if ($(this).data("error-pattern-too-long")) {
                                msg = $(this).data("error-pattern-too-long");
                            } else {
                                msg = settings.tooLong;
                            }
                        }

                        //returns true if the element’s value is lower than its min attribute.
                        if (e.target.validity.rangeUnderflow) {
                            if ($(this).data("error-pattern-range-underflow")) {
                                msg = $(this).data("error-pattern-range-underflow");
                            } else {
                                msg = settings.rangeUnderflow;
                            }
                        }

                        //returns true if the element’s value is higher than its max attribute.
                        if (e.target.validity.rangeOverflow) {
                            if ($(this).data("error-pattern-range-overflow")) {
                                msg = $(this).data("error-pattern-range-overflow");
                            } else {
                                msg = settings.rangeUOverflow;
                            }
                        }

                        //returns true if the element’s value is invalid per its step attribute.
                        if (e.target.validity.stepMismatch) {
                            if ($(this).data("error-step-mismatch")) {
                                msg = $(this).data("error-step-mismatch");
                            } else {
                                msg = settings.stepMismatch;
                            }
                        }

                        //generic fall back message.
                        if (!msg) {
                            if ($(this).data("error-generic")) {
                                msg = $(this).data("error-generic");
                            } else {
                                msg = settings.generic;
                            }
                        }

                        //set the custom validty value to our custom message if we have one.
                        if (msg) {
                            e.target.setCustomValidity(msg);
                        }

                    }
                },
                input: function (e) {
                    //clear the custom validty value
                    e.target.setCustomValidity("");
                },
                change: function (e) {
                    //clear the custom validty value
                    e.target.setCustomValidity("");
                }
            });
        });

    };

}(jQuery));