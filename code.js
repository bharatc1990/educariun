var icon = "<br><div><img class='rede' onMouseOver='contato(1)' src='redes/face.png'/><img class='rede'   onMouseOver='contato(2)' src='redes/mail.png'/><img class='rede'   onMouseOver='contato(3)' src='redes/wpp.png'/></div>";

var select=1;
update();

function bruno() {
	select = 1;
	update();
}
function davi() {
	select = 2;
	update();
}
function eduardo() {
	select = 3;
	update();
}
function tiago() {
	select = 4;
	update();
}
function lucas() {
	select = 5;
	update();
}

function contato(x){
	dados=[
		["fb.com/bvieiracosta","bruno@educariun.com.br","+55 21 98023-8893 <img style='height:1em' src='redes/tim.png'/>"],
		["fb.com/davi.amorim.714","davi@educariun.com.br","+55 21 96943-5072 <img style='height:1em' src='redes/tim.png'/>"],
		["fb.com/eduardo.candido.90","eduardo@educariun.com.br", "+55 21 96542-0484 <img style='height:1em' src='redes/tim.png'/>"],
		["fb.com/tiago.marchiore","tiago@educariun.com.br","+55 21 9 6527-3665 <img style='height:1em' src='redes/tim.png'/>"],
		["fb.com/lucas.ricarte.7","lucas@educariun.com.br","+55 85 8705-3636 <img style='height:1em' src='redes/oi.png'/>"]
	];
	$('#contato').html("<p><b>"+dados[select-1][x-1]+"</b></p>");
}
function update(){

	if (select === 1) {
	
		$("#info").html("<p><br><big><b>Bruno Costa</b></big><br>Sou um apaixonado pela Matemática e pela Computação. Sempre utilizei a computação como uma forma de expressão e de arte. Sou programador desde os meus 11 anos, densenvolvo jogos até hoje e sempre dividi meus sonhos entre ser engenheiro e professor. Com o Educariun, eu posso ser os dois!</p>"+icon+"<div id='contato'><br></div>");
		$("#info").css("background-color", "rgba(255,255,0,.25)");
		$("#fotobruno").css("opacity", "1");
		$("#fotodavi").css("opacity", ".5");
		$("#fotoeduardo").css("opacity", ".5");
		$("#fototiago").css("opacity", ".5");
		$("#fotolucas").css("opacity", ".5");

		$("#fotobruno").css("bottom", ".5em");
		$("#fotodavi").css("bottom", "0em");
		$("#fotoeduardo").css("bottom", "0em");
		$("#fototiago").css("bottom", "0em");
		$("#fotolucas").css("bottom", "0em");
	}
		if (select === 2) {
	
		$("#info").html("<p><br><big><b>Davi Amorim</b></big><br>Tendo pai e avô professores, desde cedo herdei uma certa vontade de aprender e repassar o conhecimento aprendido. Medalhista em olimpíadas de matemática, física e informática, sempre gostei bastante de estudar além dos conteúdos da escola, por isso resolvi estudar no IME, um instituto desafiador. Com o Educariun, posso lecionar e aprender ainda mais assim.</p>"+icon+"<div id='contato'><br></div>");
		$("#info").css("background-color", "rgba(255,0,255,.25)");
		$("#fotobruno").css("opacity", ".5");
		$("#fotodavi").css("opacity", "1");
		$("#fotoeduardo").css("opacity", ".5");
		$("#fototiago").css("opacity", ".5");
		$("#fotolucas").css("opacity", ".5");

		$("#fotobruno").css("bottom", "0em");
		$("#fotodavi").css("bottom", ".5em");
		$("#fotoeduardo").css("bottom", "0em");
		$("#fototiago").css("bottom", "0em");
		$("#fotolucas").css("bottom", "0em");
	}
	if (select === 3) {
		$("#info").html("<p><br><big><b>Eduardo Cândido</b></big><br>Sou natural de Fortaleza. Medalhista de prata em Física, em nível nacional, sempre me senti à vontade com as disciplinas exatas. O gosto pela engenharia e pela excelência me fez escolher o IME, onde posso dar continuidade ao meu desenvolvimento pessoal e profissional. No Educariun, sinto-me bastante entusiasmado com a possibilidade de transmitir este conhecimento.</p>"+icon+"<div id='contato'><br></div>");
		$("#info").css("background-color", "rgba(0,255,0,.25)");
		$("#fotobruno").css("opacity", ".5");
		$("#fotodavi").css("opacity", ".5");
		$("#fotoeduardo").css("opacity", "1");
		$("#fototiago").css("opacity", ".5");
		$("#fotolucas").css("opacity", ".5");

		$("#fotobruno").css("bottom", "0em");
		$("#fotodavi").css("bottom", "0em");
		$("#fotoeduardo").css("bottom", ".5em");
		$("#fototiago").css("bottom", "0em");
		$("#fotolucas").css("bottom", "0em");
	}
	if (select === 4) {
		$("#info").html("<p><br><big><b>Tiago Marchiore</b></big><br>Acredito que a educação é a única forma eficiente de transformação social, pois estimula o pensamento crítico e a indagação. Apoiado nessa ideia, desejo transmitir meu aprendizado da melhor forma possível, baseado em meu conhecimento técnico e anos de prática nas áreas de Marketing e Design. Vejo o Educariun como um grande passo para uma mudança na maneira com que se faz educação no Brasil.</p>"+icon+"<div id='contato'><br></div>");
		$("#info").css("background-color", "rgba(255,0,0,.25)");
		$("#fotobruno").css("opacity", ".5");
		$("#fotodavi").css("opacity", ".5");
		$("#fotoeduardo").css("opacity", ".5");
		$("#fototiago").css("opacity", "1");
		$("#fotolucas").css("opacity", ".5");

		$("#fotobruno").css("bottom", "0em");
		$("#fotodavi").css("bottom", "0em");
		$("#fotoeduardo").css("bottom", "0em");
		$("#fototiago").css("bottom", ".5em");
		$("#fotolucas").css("bottom", "0em");
	}
	if (select === 5) {
		$("#info").html( "<p><br><big><b>Lucas Ricarte</b></big><br>Amante de ciências exatas, sempre tive certeza de que engenharia seria o caminho certo. Durante os estudos, sentia a necessidade de transmitir meu conhecimento, de modo a ampliar meu saber e espalhar o que eu aprendo. Com o Educariun, eu tenho a chance de alcançar um maior numero de alunos e repassar para mais pessoas o que aprendi.</p>"+icon+"<div id='contato'><br></div>");
		$("#info").css("background-color", "rgba(0,0,255,.25)");
		$("#fotobruno").css("opacity", ".5");
		$("#fotodavi").css("opacity", ".5");
		$("#fotoeduardo").css("opacity", ".5");
		$("#fototiago").css("opacity", ".5");
		$("#fotolucas").css("opacity", "1");

		$("#fotobruno").css("bottom", "0em");
		$("#fotodavi").css("bottom", "0em");
		$("#fotoeduardo").css("bottom", "0em");
		$("#fototiago").css("bottom", "0em");
		$("#fotolucas").css("bottom", ".5em");
	}
}
//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
