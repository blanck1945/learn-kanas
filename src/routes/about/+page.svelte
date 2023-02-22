<script>
	import BlueHeader from '../../components/BlueHeader/BlueHeader.svelte';
</script>

<svelte:head>
	<link rel="preload" as="image" href="hiragana.jpg" />
	<link rel="preload" as="image" href="katakana.jpg" />
</svelte:head>

<div class="px-8 my-4 gap-4 flex flex-col">
	<BlueHeader>Hiragana - ひらがな</BlueHeader>
	<div class="flex border-b border-[#EA2A2A] pb-4 flex-col lg:flex-row">
		<div class="flex flex-col gap-4 w-full sm:w-3/4 sm:mr-8">
			<p>
				Los hiraganas son un sistema de escritura japonés que se utiliza junto con los kanjis y los
				katakanas. Son un conjunto de 46 caracteres que se utilizan para escribir palabras
				japonesas, y son esenciales para cualquier persona que quiera aprender a leer y escribir en
				japonés.
			</p>
			<p>
				Los hiraganas se desarrollaron a partir de caracteres chinos simplificados, conocidos como
				man'yōgana, que se usaron por primera vez en Japón en el siglo VIII. Durante muchos años,
				los man'yōgana se utilizaron para escribir japonés, pero a medida que la escritura se hizo
				más común, se necesitaba un sistema más sencillo y fácil de usar.
			</p>
			<p>
				A finales del siglo VIII, los hiraganas comenzaron a surgir como una forma simplificada de
				escritura, y se convirtieron en una forma común de escritura para las mujeres de la corte y
				la nobleza. Los hiraganas se utilizaban a menudo para escribir diarios y cartas personales,
				y también se usaban para escribir poemas y canciones.
			</p>
			<p>
				Con el tiempo, los hiraganas se volvieron más populares y se empezaron a enseñar a todos los
				niños en la escuela. En la actualidad, los hiraganas son una parte esencial del sistema de
				escritura japonés, y cualquier persona que quiera leer o escribir en japonés debe
				aprenderlos.
			</p>
			<p>
				Aunque los hiraganas son más simples que los kanjis, son esenciales para leer correctamente
				el idioma y para comunicarse de manera efectiva en Japón. Por ejemplo, muchos nombres
				propios se escriben en hiraganas, y se utilizan a menudo para dar instrucciones y
				direcciones en la calle.
			</p>
			<p>
				En resumen, los hiraganas son un sistema de escritura japonés esencial, que se desarrolló a
				partir de caracteres chinos simplificados y se utilizan junto con los kanjis y los
				katakanas. Son fundamentales para cualquier persona que quiera aprender a leer y escribir en
				japonés y han sido un elemento clave en la cultura japonesa durante muchos siglos.
			</p>
		</div>
		<img
			class="hidden w-3/4 h-96 mt-4 sm:block lg:w-3/4 lg:mt-0"
			alt="hiragana"
			src="hiragana.jpg"
		/>
	</div>
	<BlueHeader>Katakana - カタカナ</BlueHeader>
	<div class="flex border-b border-[#EA2A2A] pb-4 flex-col lg:flex-row">
		<div class="flex flex-col gap-4 w-full sm:w-3/4 sm:mr-8">
			<p>
				Los katakanas son un sistema de escritura japonés que se utiliza junto con los hiraganas y
				los kanjis. A diferencia de los hiraganas, los katakanas están compuestos por caracteres más
				angulares y rectos, lo que los hace fáciles de identificar. Son un conjunto de 46 caracteres
				que se utilizan para escribir palabras extranjeras en japonés, así como para transcribir
				sonidos de nombres y términos en otros idiomas.
			</p>
			<p>
				Los katakanas se originaron en el siglo IX, durante la era Heian de Japón. Al igual que los
				hiraganas, los katakanas se desarrollaron a partir de caracteres chinos simplificados, y se
				utilizaron inicialmente como caracteres man'yōgana. Con el tiempo, los katakanas se
				volvieron más populares, y comenzaron a utilizarse para transcribir sonidos de nombres y
				términos extranjeros.
			</p>
			<p>
				La importancia de los katakanas radica en su capacidad para transcribir palabras y términos
				extranjeros, lo que ha sido fundamental para la globalización de Japón. A medida que el país
				comenzó a abrirse al mundo en los siglos XIX y XX, los katakanas se convirtieron en una
				herramienta vital para la comunicación y el intercambio cultural.
			</p>
			<p>
				Además, los katakanas se utilizan a menudo en el campo de la tecnología y la ciencia, donde
				muchos términos y nombres de marcas son de origen extranjero. Los katakanas son útiles para
				la transcripción de estos términos, y para asegurar que se pronuncien correctamente.
			</p>
			<p>
				En resumen, los katakanas son un sistema de escritura japonés esencial, que se desarrolló a
				partir de caracteres chinos simplificados y se utilizan junto con los hiraganas y los
				kanjis. Son fundamentales para la transcripción de palabras y términos extranjeros, y han
				sido una herramienta vital para la comunicación y el intercambio cultural en Japón. Además,
				son importantes en el campo de la tecnología y la ciencia, donde se utilizan para
				transcribir términos y nombres de marcas de origen extranjero.
			</p>
		</div>
		<img
			class="hidden w-3/4 h-96 mt-4 sm:block lg:w-3/4 lg:mt-0"
			alt="katakana"
			src="katakana.jpg"
		/>
	</div>
</div>
