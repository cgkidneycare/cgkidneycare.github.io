$(document).ready(function(){
	 $(".notificationPopupWindow").bPopup();
	$(".popUpWindow").hide();
	
	$(".ourServicesIcon").click(function(){
		$("#servicesWindow").bPopup();

	});
	$(".ourGoalsIcon").click(function(){
		$("#goalsWindow").bPopup();
	});
	$(".cgPharmaIcon").click(function(){
		$("#pharmaWindow").bPopup();
	});
	$(".cgLabIcon").click(function(){
		$("#labsWindow").bPopup();
	});

	$("#location").click(function(){
		$(".mapWindow").bPopup();

	});
	$(".popupClose").click(function(){
		var bPopupElement = $(this).parent().bPopup();
		console.log(bPopupElement);
		bPopupElement.close();
	});
	$('.galleryIcon').magnificPopup({
	    items: [{
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/award.jpeg',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/award_recieve.jpeg',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture1.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture2.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture3.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture4.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture5.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture6.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture7.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture8.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture9.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture10.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture11.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture12.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture13.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture14.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture15.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture16.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture17.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture18.png',
	        title: ''
	      },
	      {
	        src: 'http://www.cgkidneycare.com/img/gallery_pics/Picture19.png',
	        title: ''
	      }
	      
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is a default type
	});

	/*var changeLogos = function(){
		i=0;
		
		
			

			setInterval(function(){
				i=i%3;
				console.log(i);
				
 

				var cg=['{"background": "url(\'../logo0.png\') center no-repeat","background-size":" 100% 100%","position": "absolute","right":" -758px","top": "0px","width": "527px","height": "140px"}',
				'{"background": "url(\'../logo1.png\') center no-repeat","background-size":" 100% 100%","position": "absolute","right":" -731px","top": "-25px","width": "391px","height": "179px"}',
				'{"background": "url(\'../logo2.png\') center no-repeat","background-size":" 100% 100%","position": "absolute","right":" -731px","top": "-25px","width": "500px","height": "179px"}'];
				console.log(cg[i]);
				$(".logo").css(cg[i]);
				console.log($(".logo").css('background'));
				console.log("changed");
				i++;
			},5000);



		
	}
	*/
	
//changeLogos();
	/* var flag=false;
	while(flag==false){
	console.log('here');
	setTimeout(function(){
	if($(".fb-page").attr('fb-xfbml-state')=="rendered"){
	
		console.log("here");
		$("div#u_0_0").css('width','100% !important');
		flag=true;
	}
	},1000);
	} */
});