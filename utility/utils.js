export class Utils{
	
	static findUnique(arr, predicate) {
	  var found = {};
	  arr.forEach(d => {
	    found[predicate(d)] = d;
	  });
	  return Object.keys(found).map(key => found[key]); 
	}
	
	static isInt(value) {
	  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
	}	

	static convertIntoFractions(number){
		var fraction = number.toFixed(2);
		var len = fraction.toString().length - 2;
		var denominator = Math.pow(10, len);
		var numerator = fraction * denominator;
		var divisor = new Utils().gcd(numerator, denominator);    // Should be 5
		numerator /= divisor;                         // Should be 687
		denominator /= divisor;                       // Should be 2000
		return (Math.floor(numerator) + '/' + Math.floor(denominator))  + "";
	}

	gcd(a, b) {
		if (b < 0.1) return a;                // Since there is a limited precision we need to limit the value.
		return new Utils().gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
	}

	static validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}


	static toFixedWithoutRounding(n,p){
	    var result = n.toFixed(p);
	    return result <= n ? result: (result - Math.pow(0.1,p)).toFixed(p);
	}
	static cloneKeyword(){
	    return "cloned_";
	}
	static unidentifiedGroup(){
	    return "unidentified";
	}
	static defaultIndicatorId(){
	    return "DEFAULT_IND";
	}
	static removeClonedKeyword(keyword){
	    return keyword!=undefined && keyword.replace("cloned_","");
	}
	static findQuestionIdFromClonedQuestionId(keyword){
	    //question_Date.now() to // fetch
	    return keyword.slice(-22);
	}

	static convertDateToTimeStamp(date){
		var split = date.split("-");
	    if(split[1] && split[2] && split[0]){
	    	 date = new Date(split[1] + "-" + split[2] + "-" + split[0]);
	        return date.getTime();  
	    }
	}

	static clearSession(sessionVar){
	  delete Session.keys[sessionVar]
	}
   
	static validateURL(textval) {
	    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
        var url = new RegExp(regexQuery,"i");
        return url.test(textval);
    }
	static getDefaultSurveyId(){
	  return "survey_1561362500736";
	}
	static getLoadingDiv(){
	  return $("#loading_div");
	}
	
	// "survey_1561044691802" //For IIX WEB @HEROKU
	// static getDefaultSurveyId(){
	//   return "survey_1561098287235";
	// }
	static convertTimeStampToDate(date){
		 var d = new Date(date);
          var date = d.getDate();
          var month = d.getMonth()+1;
          var year = d.getFullYear();
          var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
          return months[month-1]+ " " +date +", " +year;
	}
	static getPaymentGatewayKey(){
		return "pk_test_YjGLFGWXuVRjsJWd26H2CoC400Vx7JDpcx";
	}
}