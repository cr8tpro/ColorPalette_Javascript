# ColorPalette_Javascript
Select colors range from two areas

If you want to get specific colors between two rgb area use this color palette.
Suppose you are going to get colors between "#231234" and "#331234".
There will be many colors between them but you can't increase number one by one because it is not ruled by increasing one.
Hope this help for you.

Code snippet:
import * as pallete from './colorPallete.js';


pallete.setMinNumber(0);

pallete.setMaxNumber(255);


/* set range */
pallete.setStartColor("2fffff");

pallete.setEndColor("3fffff");


let color = pallete.colorAt(50);

console.log (color); // get color you want

If some is missed, feel free to contact me!.
