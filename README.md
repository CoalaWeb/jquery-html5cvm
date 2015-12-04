## Table of Contents

1.  [Intro](#intro)
2.  [Quick Start](#qstart)
3.  [Adding Messages](#adding)
    -   [Individual Fields](#individual)
    -   [Plugin Options](#plugin)
4.  [Tested](#tested)
5.  [License](#license)
6.  [Issues?](#issues)

## <a name="intro"></a>Intro

HTML5 form validation error messages are supplied by the browser but with this simple jQuery plugin you can customize them to your hearts content. A couple of good examples of when you might want to do this are for translation purposes or to bring them into line with your server-side messages.

### Important Info

You can define by **ID** which form you would like to add your custom messages to as well as several options on how to assign the messages themselves.

## <a name="qstart"></a>Quick Start

1. Grab a [copy](https://github.com/CoalaWeb/jquery-html5cvm).
2. Included the plugin on your page like this.

        <script type="text/JavaScript" src="path/to/jquery.html5cvm.min.js" />

3. Call the plugin with the **ID** of the form you wish to add custom messages to like this.

        $('#form-id').html5cvm();

## <a name="qstart"></a>Adding Messages

### <a name="individual"></a>Option 1 \[Individual Fields\]

You can add **data** attributes to your individual **input** fields to specifically target a message.

#### Example

```html
<input 
    type="email" 
    id="email"
    placeholder="Please enter your email" 
    required="required"
    data-error-type-mismatch="Sorry only valid email addresses allowed! Please try again" 
    data-error-value-missing="You seem to have forgotten to enter your email!">
```

#### You have the follow options:

1. **data-error-value-missing**
    - If the element has no value but is a required field.
2. **data-error-type-mismatch**
    - If the element’s value doesn't match its type attribute.
3. **data-error-pattern-mismatch**
    - If the element’s value doesn't match its pattern attribute.
4. **data-error-too-long**
    - If the element’s value exceeds its maxlength attribute.
5. **data-error-range-underflow**
    - If the element’s value is lower than its min attribute.
6. **data-error-range-overflow**
    - If the element’s value is higher than its max attribute.
7. **data-error-step-mismatch**
    - If the element’s value is invalid per its step attribute.
8. **data-error-generic**
    - This is a fall back generic message that you can provided.


### <a name="plugin"></a>Option 2 \[Plugin Options\]

Maybe you have a large form and you would rather define a custom message to be used through out it. You can achieve this by defining the options when you call the plugin.

#### Example

```html
$('#form-id').html5cvm({
    generic: 'Forgotten something?',
    typeMismatch: "Please enter a valid email!"
});
```

#### You have the follow options:

1. **valueMissing**
    - If the element has no value but is a required field.
2. **typeMismatch**
    - If the element’s value doesn't match its type attribute.
3. **patternMismatch**
    - If the element’s value doesn't match its pattern attribute.
4. **tooLong**
    - If the element’s value exceeds its maxlength attribute.
5. **rangeUnderflow**
    - If the element’s value is lower than its min attribute.
6. **rangeOverflow**
    - If the element’s value is higher than its max attribute.
7. **stepMismatch**
    - If the element’s value is invalid per its step attribute.
8. **generic**
    - This is a fall back generic message that you can provided.

## <a name="tested"></a>Tested

#### jQuery
-   **jQuery:** 1.11.3

#### Browsers
-   **Firefox:** 41.0.1
-   **Chrome:** 45.0.2454.101
-   **Opera:** 32.0.1948.69
-   **IE:** 11.0.9600.18015

## <a name="license"></a>License

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses:

## <a name="issues"></a>Issues

Do you have an issue? Found a bug? Want to request a new feature? Then create a new issue [here](https://github.com/CoalaWeb/jquery-html5cvm/issues).
