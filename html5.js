(function(){

    var testing = false;
    
    /* Tested with http://www.browserstack.com */
    if (testing) {
        alert("\r\rTesting alerts are on!\r\rBrowser:\r" + navigator.userAgent + "\r\r");
    }
    
    // Detect HTML v5 compatibility
    var htmlMessage = '<div id="no-html5"><h1  style="text-align: center;">Whoops!</h1><h2  style=" text-align: center;">Your using an old browser, please update it to view this data visualisation.</h2><img style="display:block; margin-left: auto; margin-top: 1em; margin-right: auto; width: 9em;"  src="sad.gif" alt="Old browser"></div><style>body{background:white;}#no-html5 img {display: block;margin: 2em auto;}</style>';
    
    var userAgent = navigator.userAgent;
    var test;
    
    /**************************************************************
     *
     * 			Test to see if we have HTML5 canvas (SVG)
     *
     *************************************************************/
    var isHtml5Compatible = document.createElement('canvas').getContext != undefined;
    
    // works on IE and most others...
    if (!isHtml5Compatible) {
    
        if (testing) {
            alert("\r\rThis browser hasn't got html5 canvas!\r\rD3.js will not work!\r\rBrowser:\r" + navigator.userAgent + "\r\r");
        }
        
        window.onload = function(){
            document.body.innerHTML = htmlMessage;
        }
    }
	
	
    
    /**************************************************************
     *
     *				IE9
     *
     *************************************************************/
	
    var ie = (function(){
    
        var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
        
        while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]) ;
        
        return v > 4 ? v : undef;
        
    }());
    
    if (ie < 10) {
        window.onload = function(){
            document.body.innerHTML = htmlMessage;
        }
    }
    
    /**************************************************************
     *
     * 	Opera 11.5 has HTML5 canvas but D3.js doesn't work on it!
     *
     **************************************************************/
    test = userAgent.replace("Opera", "");
    userAgent = navigator.userAgent;
    // works on Opera
    if (test.length != userAgent.length) {
    
        // Making sure we don't have Chrome
        userAgent = test.replace("Chrome", "");
        if (test.length == userAgent.length) {
        
            var parts = navigator.userAgent.split("/");
            
            justNumber = parts[parts.length - 1];
            
            if (testing) {
                alert("\r\rGot Opera version: " + justNumber + "\r\rD3.js is not working below version 11.6!\r\rOpera 11.6 release date: December 6, 2011.\r\rBrowser:\r" + navigator.userAgent + "\r\r");
            }
            
            if (Number(justNumber) < 12.16) {
                window.onload = function(){
                    document.body.innerHTML = htmlMessage;
                }
            }
        }
    }
    
    
    /**************************************************************
     *
     * 	Safari 4 has HTML5 canvas but D3.js doesn't work on it!
     *
     **************************************************************/
    test = userAgent.replace("Safari", "");
    userAgent = navigator.userAgent;
    // works on Safari
    if (test.length != userAgent.length) {
    
        // Chrome has the word "Safari" in it too.
        // Making sure we don't have Chrome
        userAgent = test.replace("Chrome", "");
        if (test.length == userAgent.length) {
        
            // Opera has the word "Safari" in it too.
            // Making sure we don't have Opera
            test = userAgent.replace("Opera", "");
            userAgent = navigator.userAgent;
            
            if (test.length == userAgent.length) {
            
                var parts = navigator.userAgent.split("/");
                justNumber = parts[3].split(".")[0];
                
                if (testing) {
                    alert("\r\rGot Safari version: " + justNumber + "\r\rD3.js is not working below version 5!\r\Safari 5 release date: June 7, 2010.\r\rBrowser:\r" + navigator.userAgent + "\r\r");
                }
                
                if (Number(justNumber) < 5) {
                    window.onload = function(){
                        document.body.innerHTML = htmlMessage;
                    }
                }
            }
        }
    }
    
    /**************************************************************
     *
     * 	Firefox 3 has HTML5 canvas but D3.js doesn't work on it!
     *
     **************************************************************/
    test = userAgent.replace("Firefox", "");
    userAgent = navigator.userAgent;
    // works on firefox
    if (test.length != userAgent.length) {
    
        //alert("firefox");
        
        // Making sure we don't have Chrome
        userAgent = test.replace("Chrome", "");
        if (test.length == userAgent.length) {
        
            var uMatch = navigator.userAgent.match(/Firefox\/(.*)$/), ffVersion;
            
            ffVersion = uMatch[1];
            
            justNumber = ffVersion.match(/^(?:[^0-9'-]*([0-9'-]+)){0,1}/);
            
            if (testing) {
                alert("\r\rGot Firefox version: " + justNumber + "\r\rD3.js is not working below version 4!\r\Firefox 4 release date: March 22, 2011.\r\rBrowser:\r" + navigator.userAgent + "\r\r");
            }
            
            if (Number(justNumber[0]) < 3) {
                window.onload = function(){
                    document.body.innerHTML = htmlMessage;
                }
            }
        }
    }
    
    
}());
