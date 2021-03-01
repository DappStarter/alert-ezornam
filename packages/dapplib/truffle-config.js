require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stone rule saddle evidence gesture hat army gauge'; 
let testAccounts = [
"0xde1b8cc73b7e223dd198df73879c66a3f10c68994902772fa71acd97ae972d0c",
"0xa70fc90458b7508666d7cd4319f07ba3f8ab71f555501904152c4f7b3433db74",
"0x287e724cedbd66e8e006362cf928190af02050747e31b5dc7cd59dfe7cc07259",
"0x231452813f73a24277cfe9c3ad6eaf0f2c620c00d1e16e7d604f74a25e6a06b8",
"0xca032063bffe1cdd831bb1e24422a6c8dff6f1724b6f957be4499bde673734a7",
"0x822777a8ace42fd52fa3892ce4649784632fbbe4cf340647b9318f441c27db39",
"0xfb381cc31a1050925df31688f60fd78a7610592e2b26a34d0f9818e4caacd8c2",
"0xf485b1ed0a6df75e9bd92378528982f5e058cdf2e4710f4e0f0cd67089dae22f",
"0x69ac0ecb5ce94313694109086b3cf62e50413c225c2186a0c3966ffff7e3394f",
"0x636f03404524ce5e0383ba24ec8bc823f7cec1409c5e77025df74a37428798c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
