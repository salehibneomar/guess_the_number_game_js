/*
Developed by: Saleh Ibne Omar
Date created: 12 Februray 2019
*/
window.onload = function (){

    document.getElementById("submitClick").disabled = true;
    document.getElementById("enteredValue").disabled = true;

    var randomNumber,value, chance = 0;

//=============================== Easy  ===============================  
    document.getElementById("easy").addEventListener("click", function(){
            randomNumber = Math.floor(Math.random()*10);
            swal({
                title: "Level: Easy",
                text: "You will only get 5 chances to guess the number!",
                button: "Okay",
              });
              
              document.getElementById("submitClick").disabled = false;
              document.getElementById("enteredValue").disabled = false;

              document.getElementById("easy").disabled = true;
              document.getElementById("medium").disabled = true;
              document.getElementById("hard").disabled = true;


              document.getElementById("submitClick").addEventListener("click", function(){
                chance++;
                value = document.getElementById("enteredValue").value;
                if(chance<=5){
                    if(value == randomNumber){
                        swal({
                            title: "Your guess is correct!",
                            text: "It took you "+chance+" turns",
                            button: "Okay"
                        });
                        document.getElementById("enteredValue").disabled = true;
                        document.getElementById("enteredValue").value = "";
                        document.getElementById("submitClick").style.display = "none";
                        document.getElementById("greenRestart").style.display = "block";
                        
                        document.getElementById("greenRestart").addEventListener("click", function(){
                            document.location.reload();
                        });
                    }
                    else if(value>randomNumber){
                        document.getElementById("chanceView").innerText = "High guess!";
                        document.getElementById("msg").innerText = "Turn: "+chance;
                    }
                    else if(value<randomNumber){
                        document.getElementById("chanceView").innerText = "Low guess!";
                        document.getElementById("msg").innerText = "Turn: "+chance;
                    }
                }
                else{
                    swal({
                        title: "Your 5 turns are over!",
                        text: "The number was: "+randomNumber+"\n"+"Please restart to play again.",
                        button: "Okay"
                    });
                    document.getElementById("enteredValue").disabled = true;
                    document.getElementById("enteredValue").value = "";
                    document.getElementById("submitClick").style.display = "none";
                    document.getElementById("redRestart").style.display = "block";

                    document.getElementById("redRestart").addEventListener("click", function(){
                        document.location.reload();
                    });
                }

              });


    });

//=============================== Medium ===============================  
    document.getElementById("medium").addEventListener("click", function(){
        randomNumber = Math.floor(Math.random()*100);
        swal({
            title: "Level: Medium",
            text: "You will only get 10 chances to guess the number!",
            button: "Okay",
        });
        
        document.getElementById("submitClick").disabled = false;
        document.getElementById("enteredValue").disabled = false;

        document.getElementById("easy").disabled = true;
        document.getElementById("medium").disabled = true;
        document.getElementById("hard").disabled = true;


        document.getElementById("submitClick").addEventListener("click", function(){
            chance++;
            value = document.getElementById("enteredValue").value;
            if(chance<=10){
                if(value == randomNumber){
                    swal({
                        title: "Your guess is correct!",
                        text: "It took you "+chance+" turns",
                        button: "Okay"
                    });
                    document.getElementById("enteredValue").disabled = true;
                    document.getElementById("enteredValue").value = "";
                    document.getElementById("submitClick").style.display = "none";
                    document.getElementById("greenRestart").style.display = "block";
                    
                    document.getElementById("greenRestart").addEventListener("click", function(){
                        document.location.reload();
                    });
                }
                else if(value>randomNumber){
                    document.getElementById("chanceView").innerText = "High guess!";
                    document.getElementById("msg").innerText = "Turn: "+chance;
                }
                else if(value<randomNumber){
                    document.getElementById("chanceView").innerText = "Low guess!";
                    document.getElementById("msg").innerText = "Turn: "+chance;
                }
            }
            else{
                swal({
                    title: "Your 10 turns are over!",
                    text: "The number was: "+randomNumber+"\n"+"Please restart to play again.",
                    button: "Okay"
                });
                document.getElementById("enteredValue").disabled = true;
                document.getElementById("enteredValue").value = "";
                document.getElementById("submitClick").style.display = "none";
                document.getElementById("redRestart").style.display = "block";

                document.getElementById("redRestart").addEventListener("click", function(){
                    document.location.reload();
                });
            }

        });


    });

//=============================== High ===============================  
    document.getElementById("hard").addEventListener("click", function(){
            randomNumber = Math.floor(Math.random()*1000);
            swal({
                title: "Level: Hard",
                text: "You will only get 15 chances to guess the number!",
                button: "Okay",
            });
            
            document.getElementById("submitClick").disabled = false;
            document.getElementById("enteredValue").disabled = false;

            document.getElementById("easy").disabled = true;
            document.getElementById("medium").disabled = true;
            document.getElementById("hard").disabled = true;


            document.getElementById("submitClick").addEventListener("click", function(){
                chance++;
                value = document.getElementById("enteredValue").value;
                if(chance<=15){
                    if(value == randomNumber){
                        swal({
                            title: "Your guess is correct!",
                            text: "It took you "+chance+" turns",
                            button: "Okay"
                        });
                        document.getElementById("enteredValue").disabled = true;
                        document.getElementById("enteredValue").value = "";
                        document.getElementById("submitClick").style.display = "none";
                        document.getElementById("greenRestart").style.display = "block";
                        
                        document.getElementById("greenRestart").addEventListener("click", function(){
                            document.location.reload();
                        });
                    }
                    else if(value>randomNumber){
                        document.getElementById("chanceView").innerText = "High guess!";
                        document.getElementById("msg").innerText = "Turn: "+chance;
                    }
                    else if(value<randomNumber){
                        document.getElementById("chanceView").innerText = "Low guess!";
                        document.getElementById("msg").innerText = "Turn: "+chance;
                    }
                }
                else{
                    swal({
                        title: "Your 15 turns are over!",
                        text: "The number was: "+randomNumber+"\n"+"Please restart to play again.",
                        button: "Okay"
                    });
                    document.getElementById("enteredValue").disabled = true;
                    document.getElementById("enteredValue").value = "";
                    document.getElementById("submitClick").style.display = "none";
                    document.getElementById("redRestart").style.display = "block";

                    document.getElementById("redRestart").addEventListener("click", function(){
                        document.location.reload();
                    });
                }

            });


        });
}
