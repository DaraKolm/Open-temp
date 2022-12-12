const arrImg=document.querySelectorAll('.data_img');
const arrPostcode=document.querySelectorAll('.postcode');
const arrCoordinates=document.querySelectorAll('.coordinates');
const arrEmail=document.querySelectorAll('.email');
const arrCity=document.querySelectorAll('.city');

//заповнює стовпець інформацією
function FillPerson(i,arrInfo){
    arrImg[i].src=arrInfo[0];
    arrPostcode[i].textContent='Postcode: '+arrInfo[1];
    arrCoordinates[i].textContent='Coordinates: lat. '+arrInfo[2].latitude+', long. '+arrInfo[2].longitude;
    arrEmail[i].textContent='Email: '+arrInfo[3];
    arrCity[i].textContent='City: '+arrInfo[4];
    //arrPostcode[i]=
}

const button=document.getElementById('button');

button.onclick=()=>{
    for(var i=0;i<5;i++){
        const k=i;
        setTimeout(
            fetch('https://randomuser.me/api')
                .then(res=> {
                    let mes=document.getElementById('message');
                    if(res.ok){
                        mes.textContent='Success!';
                        console.log('Success!');
                        //data =
                        return res.json();
                    }else {
                        mes.textContent='Not successful';
                        console.log("Not successful")
                    }

                })
                .then(data=>{
                    console.log(data);
                    let img=data.results[0].picture.large;
                    let postcode=data.results[0].location.postcode;
                    let coordinates=data.results[0].location.coordinates;
                    let email=data.results[0].email;
                    let city=data.results[0].location.city;
                    let arrInfo=[img,postcode,coordinates,email,city];
                    FillPerson(k,arrInfo);
                }).catch(error=>{
                let mes=document.getElementById('message');
                mes.textContent='Some error may have occurred';
                console.log("ERROR "+error)
            }),1000);
    }
}//button

