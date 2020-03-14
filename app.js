
const data=[
  {
  name:"john doe",
  age:32,
  gender:"male",
  lookingfor:"male",
  location:"Booton MA",
  image:"https://randomuser.me/portraits/men/22.jpg"
  },
  {
    name:"Adams  doe",
  age:3,
  gender:"male",
  lookingfor:"male",
  location:"Booton MA",
  image:"https://randomuser.me/portraits/men/2.jpg"
  },
  {
    name:"judith osei",
  age:32,
  gender:"female",
  lookingfor:"female",
  location:"Booton MA",
  image:"https://randomuser.me/portraits/women/21.jpg"
  },
  {
    name:"john doe",
  age:30,
  gender:"female",
  lookingfor:"male",
  location:"Booton MA",
  image:"https://randomuser.me/portraits/men/23.jpg"
  }
];
const profiles=profileIterator(data);
nextProfile();
document.getElementById("next").addEventListener("click",nextProfile);
function nextProfile(){

  currentProfile=profiles.next().value;
if(currentProfile !== undefined){

   document.getElementById("profileDisplay").innerHTML=
   `<ul class="list-group">
   <li class="list-group-item">Name:${currentProfile.name}</li>
   <li class="list-group-item">Age:${currentProfile.age}</li>
   <li class="list-group-item">Location:${currentProfile.location}</li>
   <li class="list-group-item">Preference:${currentProfile.gender}Looking for ${currentProfile.lookingfor}</li>
   </ul>`;
   document.getElementById("imageDisplay").innerHTML=`<img src="${currentProfile.image}">`;

 }
 else{

  window.location.reload();

 }
}


 

function profileIterator(profile){
  let nextIndex=0;

  return{
    next:function(){
      return nextIndex < profile.length ? {value:profile[nextIndex++],done:false}:{done:true}
    }
  }}
