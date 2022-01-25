                                //Função somente número//

                                function SomenteNumero(e){
                                    var tecla=(window.event)?event.keyCode:e.which;   
                                    if((tecla>47 && tecla<58)) return true;
                                    else{
                                    if (tecla==8 || tecla==0) return true;
                                    else  return false;
                                    }
                                    }
                        
                                                       //Questão 1//
                                    
                                    function soma() {
                                    var num1 = parseInt(document.getElementById("num1").value);
                                    var num2 = parseInt(document.getElementById("num2").value);
                                    var somatotal = num1 + num2;
                                    if(num1.value == 0 && num2.value == 0){
                                        window.alert("Você não inseriu um dos números");
                                    }
                                    
                                    else{
                                        alert("A soma dos números são: " + somatotal);
                                    }
                                }
                        
                                                       //Questão 2//
                        
                                    function imparpar(){
                                    var number = parseInt(document.getElementById("number").value);
                                    if(number % 2 == 0){
                                        alert("O número é par");
                                    }
                                    else{
                                        alert("O número é impar");
                                    }    
                                    }                   
                        
                                                       //Questão 3//
                        
                                    function desconto() {
                                    var num4 = parseInt(document.getElementById("num4").value);
                                    var desconto = num4 * 0.05;
                                    alert("Valor do desconto de 5% é de: " + desconto);
                                    }