 
 function addition(){
     var act=0 ,b=0;
     act=form.input.value;
     b=act.charAt(act.length-1);
     if(b=='+'||b=='-'||b=='/'||b=='*'){
        form.input.value=act.substring(0,act,length-1);
        form.input.value+='+';
    }else {
      form.input.value+='+ ';
} }
 function suppression (){
     var act=0 ,b=0;
     act=form.input.value;
     b=act.charAt(act.length-1);
     if(b=='+'||b=='-'||b=='/'||b=='*'){
        form.input.value=act.substring(0,act,length-1);
        form.input.value+='-';
    }else {
      form.input.value+='-';
}  }
 function division (){
     var act=0 ,b=0;
     act=form.input.value;
     b=act.charAt(act.length-1);
     if(b=='+'||b=='-'||b=='/'||b=='*'){
        form.input.value=act.substring(0,act,length-1);
        form.input.value+='/';
    }else {
      form.input.value+='/';
} }
  function nul (){
     var act=0 ,b=0;
     act=form.input.value;
     b=act.charAt(act.length-1);
     if(b=='+'||b=='-'||b=='/'||b=='*'){
        form.input.value=act.substring(0,act,length-1);
        form.input.value+='*';
    }else {
      form.input.value+='*';
}
 }
 
