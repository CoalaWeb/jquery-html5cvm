
/**
 * @package             jQuery UIkit Notify plugin
 * @author              Steven Palmer
 * @author url          https://github.com/CoalaWeb
 * @author email        support@coalaweb.com
 * @version             1.0.0
 * @date                10-10-2015
 * @copyright           Copyright (c) 2015 Steven Palmer All rights reserved.
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function () {
    $.uikitNotify = function (message, options) {
        options = $.extend({
            title: null,
            appendTo: "body",
            stack: true,
            uikitPrefix: 'uk',
            type: "info",
            offset: {
                from: "top",
                amount: 20
            },
            align: "right",
            minWidth: 300,
            maxWidth: 450,
            delay: 3000,
            allowDismiss: true,
            spacing: 10
        }, options);

        // do we need to use a custom prefix?
        var prefix = options.uikitPrefix;
        
        //Lets set up out html
        var html = '<div class="uikit-msg ' + prefix + '-alert ' + prefix + '-alert-' + options.type + '" data-' + prefix + '-alert >';

        if (options.allowDismiss) {
            html += ' <a href="" class="' + prefix + '-alert-close ' + prefix + '-close"></a>';
        }
        if (options.title) {
            html += ' <h2>' + options.title + '</h2>';
        }
        html += '</p>' + message + '</p>';
        html += '</div>';

        //calculate the msg offset from top
        var offsetSum = options.offset.amount;

        //do we want to stack the messages
        if (!options.stack) {
            $('.uikit-notify').each(function () {
                return offsetSum = Math.max(offsetSum, parseInt($(this).css(options.offset.from)) + this.offsetHeight + options.spacing);
            });
        } else {
            //if we do want to stack them we will have to append the following messages to the first
            $(options.appendTo).find('.uikit-msg').each(function ()
            {
                return offsetSum = Math.max(offsetSum, parseInt($(this).css(options.offset.from)) + this.offsetHeight + options.spacing);
            });
        }

        //some CSS to to get our mesages in the right location and append to the correct page element
        var css =
                {
                    'position': (options.appendTo === 'body' ? 'fixed' : 'absolute'),
                    'margin': 0,
                    'z-index': '9999',
                    'display': 'none',
                    'min-width': options.minWidth,
                    'max-width': options.maxWidth
                };

        css[options.offset.from] = offsetSum + 'px';

        //lets put it all together and save it into $alert 
        var $alert = $(html).css(css).appendTo(options.appendTo);

        //a little bit of alignment based on options
        switch (options.align) {
            case "center":
                $alert.css({
                    "left": "50%",
                    "margin-left": "-" + ($alert.outerWidth() / 2) + "px"
                });
                break;
            case "left":
                $alert.css("left", "20px");
                break;
            default:
                $alert.css("right", "20px");
        }

        if ($alert.fadeIn) {
            $alert.fadeIn();
        } else {
            $alert.css({display: 'block', opacity: 1});
        }

        //lets work out how we will remove the message after its display if at all
        function removeAlert() {
            $.uikitNotify.remove($alert);
        }

        if (options.delay > 0) {
            setTimeout(removeAlert, options.delay);
        }

        $alert.find('[data-' + prefix + '-alert]').removeAttr('data-' + prefix + '-alert').click(removeAlert);

        return $alert;
    };

    $.uikitNotify.remove = function ($alert) {
        if ($alert.fadeOut) {
            return $alert.fadeOut(function () {
                return $alert.remove();
            });
        }
        else {
            return $alert.remove();
        }
    };

})();
