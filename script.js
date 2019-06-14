

function kolor(x)
{  
    var zle=document.querySelectorAll(".odp.redBackground");
    var dobre=document.querySelectorAll(".odp.popr.redBackground");
    
   
   
    
    switch(x)
        {
            case 1:
                
                
                 for(var i=2; i<=4; i++)
                    {
                        var pierwsze = document.getElementById("pyt"+x+"odp"+i);    //wszystkie zmieniają od 1 do 4 na klasę odp bad
                        pierwsze.className = "odp bad";
                        
                    }
                
                
            break;
            
            case 2:
                
                 for(var i=1; i<=3; i++)
                    {
                        var pierwsze = document.getElementById("pyt2odp"+i);
                         pierwsze.className = "odp bad";
                    }
                
            break;
            
            
        }
   
   
    
        
            if (zle.length == 1)
         {
            for (var i=0; i<1; i++)
                {
             zle[i].className = "odp bad";
            dobre[i].className = "odp bad popr" ;
         } }
    
    for(var i=1; i<9; i++)
        {
            kk=document.getElementById("")
        }
           
        
}
    
    

    

function poznaj_odpowiedz()
{
     
    var ksak = document.getElementsByClassName("odp popr redBackground");
       
           document.getElementById("test").textContent = "Brawo zdobyłeś " + ksak.length + " pkt!" 
  
       // POPRAWNE USTAWIANIE ZIELONEJ NA PODSTAWIE SELEKTORA 
    var correct=document.querySelectorAll(".odp.popr"); //wybór
       
    if(correct.length > 0)
    {
        for(var i=0; i<correct.length; i++)
        correct[i].className="odp green";
    } 
    var correct=document.querySelectorAll(".odp.popr"); //wybór
       
    if(correct.length > 0)
    {
        for(var i=0; i<correct.length; i++)
        correct[i].className="odp green";
    }
    
    
    for (var j=0; j<11; j++)
        {
            
            var nr_pytania = document.getElementsByClassName("odp bad redBackground");  //odp2 odp3 odp4
            if(nr_pytania)
            nr_pytania[j].setAttribute("class", "odp wrong");
       
        }
 
}
