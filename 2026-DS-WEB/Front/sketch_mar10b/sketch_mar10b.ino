void setup() {
  pinMode(13, OUTPUT); //Porta de Saída
  Serial.begin(9600); //Inicializando a Comunicação Serial
  // put your setup code here, to run once:

}

void loop() {
  if (Serial.available()>0) {//Se tiver algo na serial faça...
   char comando = Serial.read();//Ler e jogar dentro da variavel
    if (comando == 'L'){//Se for L faça a ação de...
      digitalWrite(13,HIGH);//Ligar Led
    }
   if(comando == 'D'){//Se for D faça a ação de ...
    digitalWrite(13,LOW);//Desligar o Led
   } 

  }
  // put your main code here, to run repeatedly:

}
