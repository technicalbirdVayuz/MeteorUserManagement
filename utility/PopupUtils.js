export class PopupUtils{
	
	static showSuccessPopup(message){
		return  sAlert.success(message, {effect: 'stackslide', position: 'bottom-right', timeout: 2000, onRouteClose: false, stack: false, offset: '80px'});	
	}

	static showWarningPopup(){
		return "public";
	}
	
	static showErrorPopup(){
		 sAlert.error("Something Went Wrong", {effect: 'stackslide', position: 'bottom-right', timeout: 2000, onRouteClose: false, stack: false, offset: '80px'});	
	}

	static showUpdateSuccessPopup(){
		return sAlert.info("Updated Successfully", {effect: 'stackslide', position: 'bottom-right', timeout: 2000, onRouteClose: false, stack: false, offset: '80px'});	
	}

}