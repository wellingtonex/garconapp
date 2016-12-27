cordova create garconapp org.sergiolopes.garconapp "Garçonete So de Cenoura"

https://www.genymotion.com/download/

cordova platform add android

cordova run android

cordova run android --device

https://github.com/sergiolopes/garconapp

cordova plugin add phonegap-plugin-barcodescanner --save

cordova plugin add cordova-plugin-statusbar --save

Os browsers só permitem fazer certos requests para o mesmo domínio - política chamada Same Origin Policy. O servidor (back-end) precisa liberar explicitamente outras origens adicionando o cabeçalho Access-Control-Allow-Origin

https://github.com/sergiolopes

garconapp $ cordova plugin add cordova-plugin-whitelist


Nossa App usa apenas o whitelist de chamadas Ajax. Entretanto, há outras configurações possíveis com esse plugin.
Também podemos listar quais URLs devem ser tratadas pelo sistema operacional, e não pelo navegador. É o que chamamos de Intents. Certas URLs especiais podem abrir Apps nativas do sistema, e precisamos liberar quais queremos. Por exemplo, podemos liberar links em URLs do tipo tel: para abrir o discador nativo:

<allow-intent href="tel:*" />

https://github.com/apache/cordova-plugin-whitelist

http://cozinhapp.sergiolopes.org/

projeto final
https://github.com/sergiolopes/garconapp/tree/ajax