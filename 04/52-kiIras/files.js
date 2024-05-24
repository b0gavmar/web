const fs = require('fs');

function CreateDir(){
  if (!fs.existsSync('./directory')) {
    fs.mkdir('./directory', err => {
      if (err) {
        console.log(err);
      }
      console.log('Mappa kész\n');
      
    });
  }
  CreateAndWrite();
}

function CreateAndWrite(){
  fs.writeFile('./directory/text.txt', 'Zuboly, nézz bennünket!\nTe szabad hajdúságod\nS halálos nagypénteked...', () => {
    console.log('Fájlba beleíródott\n');
    Read();
  });
}

function Read(){
  if (fs.existsSync('./directory/text.txt')) {
    fs.readFile('./directory/text.txt', (err, data) => {
      if (err) {
        console.log(err);
      }  
      console.log(data.toString());
    });  
}
else{
    console.log('nem létezik a fájl');
}
  
}

CreateDir();

//ctrl+k   cstrl+c ==> fancy comment