document.getElementById("luces").addEventListener("click",luces);

var cont=0;

	function luces()
	{

		var vid= document.getElementById("video",);
		var nav= document.getElementById("nav");
		var footer=document.getElementById("footer");
		var v=["../media/Traffic - 6457.mp4","../media/nubes.mp4"];
		var gale=document.getElementById("galeria");
		var nos=document.getElementById("nosotros");;
		var serv=document.getElementById("servicios");
		var contact=document.getElementById("contacto");
		 	
		 	if (cont==0){
		 		vid.src=v[1];
		 		nav.className="navbar navbar-expand-lg navbar-light bg-light ";
		 		footer.className=" foot d-none d-lg-block mt-5 fixed-bottom navbar-clar ";

		 		gale.href="galeria.html";
				nos.href="nosotros.html";
		 		serv.href="servicios.html";
				contact.href="contacto.html";

		 		cont=1;}
		 	else {
		 		vid.src=v[0];
		 		nav.className="navbar navbar-osc navbar-expand-lg navbar-dark";
		 		footer.className=" navbar-osc foot d-none d-lg-block mt-5 fixed-bottom w-100";

		 		gale.href="galeria-dark.html";
				nos.href="nosotros-dark.html";
		 		serv.href="servicios-dark.html";
				contact.href="contacto-dark.html";

		 		cont=0;
		 	}
		 
	}
