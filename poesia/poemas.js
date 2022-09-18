comunes = 'de y el la en a que los se que un las con no por una para su es como me más le lo o pero sus si este sobre entre cuando también todo era fue esta ya son mi sin la años ser nos te qué dos está muy desde porque yo hasta había hay tiene ese todos hacer donde eso puede parte vida uno esa tiempo él ella sólo dijo cada vez ni otro después otros mismo hace ahora les estaba así bien e día año aunque durante país siempre otra tres algo ver mundo los tan antes sí cómo casa nada trabajo estos momento quien están gran esto forma mayor personas ellos nacional gobierno sino primera unos hacia tenía entonces hoy lugar ante luego estado otras días tener pues va contra nunca casi tienen según algunos una manera nuevo además hombre millones dar mucho veces menos todas primer presidente decir mujer tu solo mientras cosas mí debe tanto aquí estas ciudad fueron historia más sin embargo toda tras pueden dice tipo las grupo cual social gente sistema desarrollo mejor noche misma estar lado muchos sea cuenta mujeres agua importante aún dentro cuatro información mis madre salud nuestro será'

poema1 = {	'autor':'Octavio Paz',
			'titulo':'Aqui',
			'texto':'Mis pasos en esta calle\nResuenan\nEn otra calle\nDonde\nOigo mis pasos\nPasar en esta calle\nDonde\nSólo es real la niebla.',
			}
poema2 = {	'autor':'Julio Cortázar',
			'titulo':'A un general',
			'texto':'Región de manos sucias de pinceles sin pelo\nde niños boca abajo de cepillos de dientes\nZona donde la rata se ennoblece\ny hay banderas innúmeras y cantan himnos\ny alguien te prende, hijo de puta,\nuna medalla sobre el pecho\nY te pudres lo mismo.'
			}
poema3 = {	'autor':'Anónimo',
			'titulo':'Cada vez que pienso en ti',
			'texto':'Cada vez que pienso en ti,\nmis ojos rompen en llanto;\ny muy triste me pregunto,\n¿por qué te quiero tanto?'
			}
poema4 = {	'autor':'Mario Benedetti',
			'titulo':'Síndrome',
			'texto':'Todavía tengo casi todos mis dientes\ncasi todos mis cabellos y poquísimas canas\npuedo hacer y deshacer el amor\ntrepar una escalera de dos en dos\ny correr cuarenta metros detrás del ómnibus\no sea que no debería sentirme viejo\npero el grave problema es que antes\nno me fijaba en estos detalles.'
			}
poema5 = {	'autor':'Gloria Fuentes',
			'titulo':'En las noches claras',
			'texto':'En las noches claras,\nresuelvo el problema de la soledad del ser.\nInvito a la luna y con mi sombra somos tres.'
			}
poema6 = {	'autor':'Antonio Machado',
			'titulo':'Deletreos de armonía',
			'texto':'Deletreos de armonía\nque ensaya inexperta mano.\nHastío. Cacofonía\ndel sempiterno piano\nque yo de niño escuchaba\nsoñando... no sé con qué,\ncon algo que no llegaba,\ntodo lo que ya se fue.'
			}
poema7 = {	'autor':'Alejandra Pizarnik',
			'titulo':'Despedida',
			'texto':'Mata su luz un fuego abandonado.\nSube su canto un pájaro enamorado.\nTantas criaturas ávidas en mi silencio\ny esta pequeña lluvia que me acompaña.'
			}
poema8 = {	'autor':'Gabriela Mistral',
			'titulo':'Desvelada',
			'texto':'Como soy reina y fui mendiga, ahora\nvivo en puro temblor de que me dejes,\ny te pregunto, pálida, a cada hora:\n«¿Estás conmigo aún? ¡Ay, no te alejes!»\nQuisiera hacer las marchas sonriendo\ny confiando ahora que has venido;\npero hasta en el dormir estoy temiendo\ny pregunto entre sueños: «¿No te has ido?»'
			}
poema9 = {	'autor':'Gustavo Adolfo Bécquer',
			'titulo':'Rima LX',
			'texto':'Mi vida es un erial,\nflor que toco se deshoja;\nque en mi camino fatal\nalguien va sembrando el mal\npara que yo lo recoja.'
			}
poema10 = {	'autor':'Nezahualcoyotl',
			'titulo':'Recuerdo que dejo',
			'texto':'¿Con qué he de irme?\n¿Nada dejaré en pos de mi sobre la tierra?\n¿Cómo ha de actuar mi corazón?\n¿Acaso en vano venimos a vivir,\na brotar sobre la tierra?\nDejemos al menos flores\nDejemos al menos cantos'
			}
poema11 = {	'autor':'Anónimo',
			'titulo':'Tus ojos son lucero',
			'texto':'Tus ojos son luceros,\ntus labios, de terciopelo,\ny un amor como el que siento,\nes imposible esconderlo.'
			}
poema12 = {	'autor':'Nicanor Parra',
			'titulo':'La montaña rusa',
			'texto':'Durante medio siglo\nLa poesía fue\nEl paraíso del tonto solemne.\nHasta que vine yo\nY me instalé con mi montaña rusa.\nSuban, si les parece.\nClaro que yo no respondo si bajan\nEchando sangre por boca y narices.'
			}
poema13 = {	'autor':'Anónimo',
			'titulo':'Cuando el mar sea redondo',
			'texto':'Cuando el mar sea redondo\ny el sol deje de brillar,\nese será el día\nen que te pueda olvidar.'
			}
poema14 = {	'autor':'Pablo Neruda',
			'titulo':'América, no invoco tu nombre en vano',
			'texto':'AMÉRICA,\nno invoco tu nombre en vano.\nCuando sujeto al corazón la espada,\ncuando aguanto en el alma la gotera,\ncuando por las ventanas\nun nuevo día tuyo me penetra,\nsoy y estoy en la luz que me produce,\nvivo en la sombra que me determina,\nduermo y despierto en tu esencial aurora:\ndulce como las uvas, y terrible,\nconductor del azúcar y el castigo,\nempapado en esperma de tu especie,\namamantado en sangre de tu herencia.'
			}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function displayPoem(toDisplayNum, lastWord){
	let toDisplay = '';
	console.log(toDisplayNum)

	toAddArr = poemas[toDisplayNum].texto.split(' ')
	for(let i = 0; i < toAddArr.length; i++){
		words = toAddArr[i].split('\n');
		for(let j = 0; j < words.length; j++){
			if(j > 0){
				toDisplay += '<br>';
			}
			temp = words[j].toLowerCase().replace(/[.,\/#¿¡!$?!%»\^&\*«;:{}=\-_`~()]/g,"");
			if(temp in palabras){
				tempKeys = Object.keys(palabras[temp].poemas).filter(e => e!== toDisplayNum.toString());
				tempClass = temp == lastWord ? 'color lastWord' : 'color';
				toDisplay += `<span class='${tempClass}' onclick="displayPoem(${tempKeys[randomIntFromInterval(0, tempKeys.length-1)]},'${temp}')">${words[j]}</span>`;
			} else {
				toDisplay += words[j];
			}
			toDisplay += ' ';
		}
	}
	document.querySelector('#texto').innerHTML = toDisplay;
	document.querySelector('#title').innerHTML = poemas[toDisplayNum].titulo;
	document.querySelector('#author').innerHTML = ` - ${poemas[toDisplayNum].autor}`;
	setTimeout(() => {
		document.querySelectorAll('.lastWord').forEach((el, i) => {
			el.classList.remove('lastWord');
		});
	}, 200);
}

poemas = [poema1, poema2, poema3, poema4, poema5, poema6, poema7, poema8, poema9, poema10, poema11, poema12, poema13, poema14]
palabras = {}
for(let i = 0; i < poemas.length; i++){
	poemas[i].frases = poemas[i].texto.split('\n')
	for(let k = 0; k < poemas[i].frases.length; k++){
		pls = poemas[i].frases[k]
		.toLowerCase()
		.replace(/[.,\/#¿¡!$?!%»\^&\*«;:{}=\-_`~()]/g,"")
		.split(' ');
		for(let l = 0; l < pls.length; l++){
			if (! (pls[l] in palabras)){
				let tmp = {}
				tmp[i] = 1
				palabras[pls[l]] = {'cuenta': 1, 'poemas':tmp};
			} else {
				if(! (i in palabras[pls[l]].poemas)){
					palabras[pls[l]].poemas[i] = 1;
				} else {
					palabras[pls[l]].poemas[i] += 1;
				}
				palabras[pls[l]].cuenta += 1;
			}
		}
	}
}

for(let key in palabras){
	if((palabras[key].cuenta <= 1) || comunes.indexOf(key) != -1 || Object.keys(palabras[key].poemas).length == 1){
		delete(palabras[key]);
	}
}

toDisplayNum = randomIntFromInterval(0, poemas.length-1);
displayPoem(toDisplayNum, '')


