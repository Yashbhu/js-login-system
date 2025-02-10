let username=prompt('who tf are u','');

if (username==='yash'){
    alert('aja bhai');
let password=prompt('chal ab password bata',''); // ❌ ERROR: Yeh hamesha chalega, chahe username galat ho ya sahi.
if(password==='choot'){
    alert('are y to apna hi hai');
}else if(username===''||username===null){ // ❌ ERROR: Yeh condition password check ke andar nahi honi chahiye.
    alert('ma chuda time chod raha bas');
}else{
    alert('pakla gaya madharchod');
}}
else if(username===''||username===null){  // ❌ ERROR: Else ke baad ek aur `else if` likhna galat hai.
    alert('jb pata nhi to yaha kya gand marvane aya hai bsdk');
}
else{
    alert('nikal behen ke lode kon hai be tu')
}

