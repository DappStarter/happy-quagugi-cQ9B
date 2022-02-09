require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike rival machine upgrade guess end army gesture'; 
let testAccounts = [
"0x358210545b1aeb0622907b2aebaf691c7147b3a1822af661f7a2dc4584b54f75",
"0xf39a526e2279bbae65dc7637ceb75d14f0848a224b965aaf8a1f8bd46ed20544",
"0xdb30d723ea084c678923d3e5022b6d0ac4447a822263af2b5dba5819a202adf5",
"0x0feae3f3387a9cd578a79a5255646d5b4d96bfcaca130bdddfcedaa98a6e5021",
"0x243a5a3330d89a3d56ae7174acec6dbfe3a017dea767a133bbd42b98f8f5b7de",
"0x676feba301ed4caa964752bc224a4253910b435f3deb4b1a30ecf2b3fda43ff2",
"0x7ea74e3eea8b7ad05d86ac287a330f714b45f6330e8d4a10b8cbcf160eba2465",
"0x5b378b857ec854e026d6db32959009d0c515f0751a0476b62eb676995373a95d",
"0x5fede187ec9e1186ce57985fa67dc98839da29d29355b816057f445797d0a6eb",
"0x86047dc0c299f11f13fdbecfa4ad946432d81d6e8f76d30f9a945c242afe6032"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


