<?php
$seleccion = $_POST['seleccion'];

switch ($seleccion)
{
    case 1:
		$nUno = $_POST['nUno'];
		$nDos = $_POST['nDos'];
		$nTres = $_POST['nTres'];
		$max;
		$min;

		if (($nUno > $nDos) && ($nUno > $nTres)) {
			$max = $nUno;
		} elseif (($nDos > $nUno) && ($nDos > $nTres)) {
			$max = $nDos;
		} elseif (($nTres > $nUno) && ($nTres > $nDos)) {
			$max = $nTres;
		}

		if (($nUno < $nDos) && ($nUno < $nTres)) {
			$min = $nUno;
		} elseif (($nDos < $nUno) && ($nDos < $nTres)) {
			$min = $nDos;
		} elseif (($nTres < $nUno) && ($nTres < $nDos)) {
			$min = $nTres;
		}

		echo "<h3 style='color: #0baf0b;'>El valor: '{$max}' es el mayor</h3>";
		echo "<h3 style='color: #0baf0b;'>El valor: '{$min}' es el menor</h3>";

        break;
    case 2:
		$numeros = array(uno=>$_POST['numUno'], dos=>$_POST['numDos'], tres=>$_POST['numTres'], cuatro=>$_POST['numCuatro'], cinco=>$_POST['numCinco'], seis=>$_POST['numSeis'], siete=>$_POST['numSiete'], ocho=>$_POST['numOcho'], nueve=>$_POST['numNueve'], diez=>$_POST['numDiez']);
		$numItera = 0;

		foreach($numeros as $posicion=>$valor)
		{
			if((int)$valor %2 == 0)
			{
				echo 'Par: ',$valor,'<br/>';
				$numItera++;
			}
		}
		echo "<h3 style='color: #0baf0b;'>Cantidad: $numItera par(es) ingresado(s): </h3>";
		echo '<br/>','<br/>';
		$numItera = 0;

		foreach($numeros as $posicion=>$valor)
		{
			if((int)$valor %2 != 0)
			{
				echo 'Impar: ', $valor,'<br/>';
				$numItera++;
			}
		}

		echo "<h3 style='color: #0baf0b;'>Cantidad: $numItera impar(es) ingresado(s): </h3>";
        break;
    case 3:
		$numsAsc = array($_POST['ascUno'], $_POST['ascDos'], $_POST['ascTres'], $_POST['ascCuatro'],$_POST['ascCinco']);
		asort($numsAsc);
		foreach($numsAsc as $val)
		{
			echo $val."<br>\n";
		}
		echo "<h3 style='color: #0baf0b;'>Ordenados Ascendente</h3>";
        break;
    case 4:
		$numsDes = array($_POST['desUno'], $_POST['desDos'], $_POST['desTres'], $_POST['desCuatro'],$_POST['desCinco']);
		rsort($numsDes);
		foreach($numsDes as $va)
		{
			echo $va."<br>\n";
		}
		echo "<h3 style='color: #0baf0b;'>Ordenados Descendente</h3>";
        break;
    case 5:
		$permitido = "a-zA-Z¡…Õ”⁄·ÈÌÛ˙";
		$caracter = $_POST['caracter'];

		if(is_numeric($caracter)) {
		    echo "<h3 style='color: #0baf0b;'>'{$caracter}' es un numero</h3>";
		}
		else if (preg_match('/^[a-z ·ÈÌÛ˙Ò¸¡…Õ”⁄—‹]+$/i',utf8_encode($caracter)))  {
			echo "<h3 style='color: #0baf0b;'>'{$caracter}' es una letra</h3>";
		}
		else {
		    echo "<h3 style='color: #0baf0b;'>'{$caracter}' no es una letra, ni un numero</h3>";
		}

        break;
    case 6:
		$sumanum = array($_POST['sumUno'], $_POST['sumDos'], $_POST['sumTres'], $_POST['sumCuatro'],$_POST['sumCinco'],$_POST['sumSeis'], $_POST['sumSiete'], $_POST['sumOcho'], $_POST['sumNueve'],$_POST['sumDiez']);
		$suna = 0;
		foreach($sumanum as $val)
		{
			$suma = $suma + (int)$val;
			//echo $val."<br>\n";
		}
		echo "<h3 style='color: #0baf0b;'>La suma total es: '{$suma}' </h3>";
        break;
    case 7:
		$cat1 = $_POST['cat1'];
		$cat2 = $_POST['cat2'];
		$hypo = hypot($cat1, $cat2);
		echo "<h3 style='color: #0baf0b;'>La hypotenusa es: '{$hypo}' </h3>";
        break;
    case 8:
		$str = $_POST['str'];
		$strLetra = $_POST['strLetra'];
		$arr1 = str_split($str);
		$count = 0;
		foreach($arr1 as $va)
		{
			if($va == $strLetra)
			{
				$count++;
			}
		}
		if($count > 0)
			echo "<h3 style='color: #0baf0b;'>El dato '{$strLetra}' ingresado, se repite: '{$count}' veces</h3>";
		else
			echo "<h3 style='color: #0baf0b;'>El dato '{$strLetra}' ingresado, no existe en el String.</h3>";

        break;
    case 9:
		$strUno = $_POST['strUno'];
		$strDos = $_POST['strDos'];

		if(trim($strUno) == trim($strDos))
			echo "<h3 style='color: #0baf0b;'>Los string son iguales</h3>";
		else
			echo "<h3 style='color: red;'>Los string No son iguales</h3>";

        break;
    case 10:
		$luz =  $_POST['luz'];
		$agua =  $_POST['agua'];
		$cable =  $_POST['cable'];
		$internet =  $_POST['internet'];
		$gas =  $_POST['gas'];
		$dividendo =  $_POST['dividendo'];
		$sueldoDado =  $_POST['sueldoDado'];

		$resultado = ((int)$sueldoDado)-((int)$luz + (int)$agua + (int)$cable + (int)$internet + (int)$gas + (int)$dividendo);

		if($resultado > 0)
			echo "<h3 style='color: #0baf0b;'>El saldo es : '$ {$resultado}', es positivo, tiene saldo a favor.</h3>";
		else if($resultado == 0)
			echo "<h3 style='color: #0baf0b;'>El saldo es : '$ {$resultado}', su sueldo alcanzo justo.</h3>";
		else
			echo "<h3 style='color: red;'>El saldo es : '$ {$resultado}', es negativo, su sueldo No alcanzo.</h3>";
        break;
    case 11:
		$salario = $_POST['salario'];
		$incentivo = $_POST['incentivo'];
		$cantSillas = $_POST['cantSillas'];
		$result = (((float)$salario)*(8)+((float)$cantSillas-50)*((float)$incentivo));
		//$result = (3.5)*(8)+(76-50)*(0.6);

		echo "<h3 style='color: #0baf0b;'>El empleado recibe: $ '{$result}'</h3>";
        break;
    default:
}


//if($nUno > $nDos && $nUno > $nTres)
//{
//   echo $nUno;
//}
//else
//{
//    if($nDos > $nUno && $nDos > $nTres){
//        echo $nDos;
//    }
//    else
//    {
//        echo $nTres;
//    }
//}



//$url = $_POST['url'];



//$html = file_get_contents($url);
//$pattern = '/<img.+ ?src=[\"\'](.+\.\w+)[\"\'] .+>/';
//preg_match_all($pattern, $html, $images);

//$images = $images[1];
//$list = array();
//$contador=0;
//foreach($images as $img) {
//    $contador++;
//}
//echo 'Se encontraron: ', $contador,' imagenes:<br> ';

//foreach($images as $img) {
//    echo $img."<br>";
//}

?>