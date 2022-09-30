function Validate(){
    if(document.myForm.Name.value==""){
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }

    if(document.myForm.EMail.value==""){
        alert("Please provide your email id!");
        document.myForm.EMail.focus();
        return false;
    }
    var str = document.myForm.EMail.value;
    var len=str.length;
    var atcount=0;
    var atpos;
    var flag=1;
    
    for(i=0; i<len; i++){
        if(str[i]=='@'){
            atpos=i;
            atcount++;
        }
        if(str[i]==' '){
            alert("Email address doesn't contain space!");
            document.myForm.EMail.focus();
            return false;
        }
    }
    if(atcount!=1 || str[len-1]=='.'|| str[len-2]=='.' || str[atpos+1]=="."){
        alert("Invalid syntax!");
        document.myForm.EMail.focus();
        return false;
    }
    for(i=atpos; i<len; i++){
        if(str[i]=="."){
            flag=0;
            break;
        }
    }
    if(flag){
        alert("Invalid syntax!");
        document.myForm.EMail.focus();
        return false;
    }
    
    if(document.myForm.number.value.length!=10 || isNaN(document.myForm.number.value)){
        alert("Please provide a valid Phone Number!");
        document.myForm.number.focus();
        return false;
    }
    if(document.myForm.Zip.value=="" ||document.myForm.Zip.value.length !=5){
        alert("Please provide a zip code in the format #####");
        document.myForm.Zip.focus();
        return false;
    }
    if(document.myForm.Country.value=="-1"){
        alert("Please provide your country.");
        document.myForm.
        Country.focus();
        return false;
    }
    alert("Submission Successfull!");
}