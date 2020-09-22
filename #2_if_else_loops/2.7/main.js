/*
Реализовать в document с помощью циклов
******
*    *
*    *
*    *
******

.
*/

var row = "";
for (var i = 0; i < 5; i++){
	for (var j = 0; j < 6; j++){
		if(i == 0 || i == 4){
			row += "*";
		}else{
			if(j == 0 || j == 5){
				row += "*";
			}else{
				row += "&nbsp;&nbsp;";
			}
			
		}
	}
	document.writeln(row + "<br>");
	row = "";
}
