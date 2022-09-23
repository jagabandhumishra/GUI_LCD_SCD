
$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            firstName: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'Age is not valid',
                validators: {
                    notEmpty: {
                        message: 'Age is required and cannot be empty'
                    },
                    // stringLength: {
                    //     min: 1,
                    //     max: 30,
                    //     message: 'Last Name must be more than 1 and less than 30 characters long'
                    // },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'Age has to be a number'
                    },
                }
            },
            notes: {
                message: 'Sentence number is not valid',
                validators: {
                    notEmpty: {
                        message: 'Sentence number is required and cannot be empty'
                    },
                    // stringLength: {
                    //     min: 1,
                    //     max: 30,
                    //     message: 'Last Name must be more than 1 and less than 30 characters long'
                    // },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'Sentence number has to be a number'
                    },
                }
            },
            HindiEnglish: {
                message: 'The id is not valid',
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 1,
                        message: 'Enter number between 0-9'
                    },
                    regexp: {
                        regexp: /^[0-9]/,
                        message: 'Only numbers are allowed'
                    },
                }
            },
            BengaliEnglish: {
                message: 'The id is not valid',
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 1,
                        message: 'Enter number between 0-9'
                    },
                    regexp: {
                        regexp: /^[0-9]/,
                        message: 'Only numbers are allowed'
                    },
                }
            },
            TamilEnglish: {
                message: 'The id is not valid',
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 1,
                        message: 'Enter number between 0-9'
                    },
                    regexp: {
                        regexp: /^[0-9]/,
                        message: 'Only numbers are allowed'
                    },
                }
            },
            TeleguEnglish: {
                message: 'The id is not valid',
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 1,
                        message: 'Enter number between 0-9'
                    },
                    regexp: {
                        regexp: /^[0-9]/,
                        message: 'Only numbers are allowed'
                    },
                }
            },
            TamilMalayalam: {
                message: 'The id is not valid',
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 1,
                        message: 'Enter number between 0-9'
                    },
                    regexp: {
                        regexp: /^[0-9]/,
                        message: 'Only numbers are allowed'
                    },
                }
            },
            BengaliAsamese: {
                message: 'The id is not valid',
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 1,
                        message: 'Enter number between 0-9'
                    },
                    regexp: {
                        regexp: /^[0-9]/,
                        message: 'Only numbers are allowed'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            }, 

        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        // reading sentence number
        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbxdbjLtkrE7SlC1OKBvOLoj7KpfFhKpZMb7xI-vxf64ZNIYsEViZl6kTJJMkab0wgyM/exec';
        var number = document.getElementById('sentence').value
        var redirectUrl = 'recorder_language_change.html' + '?sentence='+ number;
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });
});


