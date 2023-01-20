const ngrok = require("ngrok");

class Ngrok {
    static async ngrok  (){
        const url = await ngrok.connect(8080);
        console.loh(url);

    }
}